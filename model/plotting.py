# import fiona

from matplotlib.figure import Figure

from model import Statistics

__author__ = 'emre'

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.mlab as mlab
import matplotlib.animation as animation


def plot_phi_colors(ax, data: dict, phi):
    # phi: k x N
    # TODO: We only plot according to first type here, for now... - Emre
    # first_feature = "primCategory"
    first_feature = list(data["unigrams"].keys())[0]
    unigram_ids = dict([(w, i) for i, w in enumerate(data["unigrams"][first_feature])])
    marker_types = ['o', 'x', 'D', '.', 'v', '^']
    k, N = phi.shape

    colors = np.zeros((3, phi.shape[1]))
    colors[0, :] = phi[0, :]

    if k > 1: colors[2, :] = phi[1, :]
    if k > 2: colors[1, :] = phi[2, :]

    # Group items by markers, so that we only have to call the scatter function V times.
    # This is done to speed up the plotting - which is important while animating the change.
    plots = []
    for k, v in unigram_ids.items():
        # TODO: Remove np.array hack
        idx = data[first_feature].getcol(v).nonzero()[0]
        p = ax.scatter(data["coordinates"][idx, 0], data["coordinates"][idx, 1], marker=marker_types[v % 6],
                       color=colors.T[idx],
                       alpha=0.50)
        plots.append((p, k))

    return plots  # We need these for legend


def plot_contours(ax, topic_centers, topic_covar):
    num_topics = topic_covar.shape[0]

    # Plotting variables
    # TODO: Perhaps get this from the centers?
    rng = np.arange(-8.0, 8.0, 0.01)
    X, Y = np.meshgrid(rng, rng)

    for z in range(num_topics):
        cov = topic_covar[z, :, :]
        try:
            D = mlab.bivariate_normal(X, Y, np.sqrt(cov[0, 0]), np.sqrt(cov[1, 1]), topic_centers[z, 0],
                                      topic_centers[z, 1], cov[0, 1])

            ax.contour(X, Y, D, 5, colors='k')
        except:
            pass


def plot_phi_animated(fig, ax, data, statistics_history):
    """
    Animates phi values and contours across iterations. Useful for seeing how the model evolves during EM.
    :param data_coords: N x 2 matrix for geographical coordinates of points
    :param data_words: N x 1 matrix for "words" (i.e. colors) per each data point
    :param unigram_ids: a dictionary with length V, containing an index number for each word
    :param phi_history: I x k x N matrix, containing q_d(z) values across iterations (denoted as I)
    :param topic_centers_history: I x k x 2 matrix, containing cluster centers per each topic across iterations
    :param topic_covar_history: I x k x 2 x 2 matrix, containing covariances per each topic across iterations (denoted as I)
    :param fig: figure to draw on
    :param ax: ax to draw on
    :return: the animation, but nothing of importance
    """
    num_iterations, num_topics, _, _ = statistics_history.topic_covar.shape

    # Plotting variables
    rng = np.arange(-3.0, 3.0, 0.05)
    X, Y = np.meshgrid(rng, rng)

    def animate(i):
        ax.cla()

        # Draw the points
        plots = plot_phi_colors(ax, data, statistics_history.phi[i, :, :])
        fig.legend([p[0] for p in plots], [p[1] for p in plots], numpoints=1)

        # Draw the contours
        for z in range(num_topics):
            cov = statistics_history.topic_covar[i, z, :, :]
            # try:
            D = mlab.bivariate_normal(X, Y, np.sqrt(cov[0, 0]), np.sqrt(cov[1, 1]),
                                      statistics_history.topic_centers[i, z, 0],
                                      statistics_history.topic_centers[i, z, 1], cov[0, 1])

            cont = ax.contour(X, Y, D, 5, colors='k', alpha=0.5)
            # except:
            pass

        return cont,

    anim = animation.FuncAnimation(fig, animate, frames=num_iterations, interval=50, repeat=True, repeat_delay=1000)

    return anim
    # anim.save('animation.mp4')


def plot_center_history(ax, topic_centers_history):
    """
    Plots the change of centers across iterations. Useful for seeing how the model evolves during EM.
    :param topic_centers_history: I x k x 2 matrix, containing cluster centers per each topic across iterations
    :param h_array: k x V matrix
    :param unigrams:
    :param ax: ax to draw on
    """
    num_iterations, num_topics, _ = topic_centers_history.shape

    for iter in range(num_iterations):
        for z in range(num_topics):
            ax.scatter(topic_centers_history[iter, z, 0], topic_centers_history[iter, z, 1], marker="*",
                       # topic's with most discriminative color
                       # c=unigrams[np.argmax(h_array[z, :])],
                       s=150.0 * (iter + 1) / num_iterations)


def plot_statistics_history(fig: Figure, statistics_history: Statistics, x_plot_num, y_plot_num, plot_num):
    likelihood_ax = fig.add_subplot(y_plot_num, x_plot_num, plot_num + 1)
    lhl, = likelihood_ax.plot(statistics_history.likelihood, linestyle='-', color='black')
    ull, = likelihood_ax.plot(statistics_history.user_likelihood, linestyle='--', color='green')
    lll, = likelihood_ax.plot(statistics_history.location_likelihood, linestyle=':', color='red')
    tll, = likelihood_ax.plot(statistics_history.topic_likelihood, linestyle='--', color='purple')
    sll, = likelihood_ax.plot(statistics_history.sigma_likelihood, linestyle=':', color='blue')
    phe, = likelihood_ax.plot(statistics_history.phi_entropy, linestyle='--', color='orange')
    ep, = likelihood_ax.plot(statistics_history.eta_penalty, linestyle=':', color='brown')

    return lhl, ull, lll, tll, sll, phe, ep


def plot_across_lambda_and_k(lambda_list, k_list, train_likelihood_across_lambda_and_k,
                             test_likelihood_across_lambda_and_k, num_points_training,
                             num_points_total, filename_prefix, save=False):
    across_k_fig, across_k_ax = plt.subplots(1, 1)
    for lidx in range(len(train_likelihood_across_lambda_and_k)):
        Lambda = lambda_list[lidx]
        train_likelihood_across_k = train_likelihood_across_lambda_and_k[lidx]
        test_likelihood_across_k = test_likelihood_across_lambda_and_k[lidx]
        plot_across_k(k_list, train_likelihood_across_k,
                      test_likelihood_across_k, num_points_training,
                      num_points_total, "lambda = {0}".format(Lambda),
                      filename_prefix, save, across_k_fig, across_k_ax)


def plot_across_k(k_list, train_likelihood_across_k, test_likelihood_across_k,
                  num_points_training, num_points_total, lambda_label,
                  filename_prefix, save=False,
                  across_k_fig=None, across_k_ax=None):
    train_ll_vs_k = [ll / num_points_training for ll in train_likelihood_across_k]
    test_ll_vs_k = [ll / (num_points_total - num_points_training) for ll in test_likelihood_across_k]

    if not across_k_fig or not across_k_ax:
        across_k_fig, across_k_ax = plt.subplots(1, 1)
    across_k_ax.plot(k_list, train_ll_vs_k, marker='x', c="blue", label="Train - {0}".format(lambda_label))
    across_k_ax.plot(k_list, test_ll_vs_k, marker='o', c="red", label="Test - {0}".format(lambda_label))
    across_k_ax.legend(loc='lower right')
    across_k_ax.set_xlabel("number of topics")
    across_k_ax.set_ylabel("log-likelihood per data point")

    if save:
        across_k_fig.savefig("{0}-logl_across_k.pdf".format(filename_prefix), dpi=300)

    return across_k_fig
