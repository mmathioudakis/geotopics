import gc
import pickle

from matplotlib.cm import get_cmap

__author__ = 'emre'

import matplotlib.pyplot as plt
from visualization.utils import *


def plot_scatter_osm(X_lon, Y_lat, unraveled_geo_probabilities, theta, unigrams_list, geo_prob_threshold: float,
                     word_scores_list: list, out_files: list):
    # Sum across topics to get raw geospatial probability of a point
    geo_probabilities = unraveled_geo_probabilities.sum(axis=0).ravel()

    # Generate x-y coordinates from lon-lat
    x_proj, y_proj, basemap = project_mesh_to_map(X_lon, Y_lat)

    x_size, y_size = generate_suitable_plot_size(x_proj, y_proj)

    # Generate figures to draw plots on
    figs, axs = zip(*[plt.subplots(figsize=(x_size, y_size)) for _ in word_scores_list])
    # figs, axs = zip(*[plt.subplots() for _ in word_scores_list])

    # Get map data from OSM
    draw_osm_backgrounds(X_lon.ravel(), Y_lat.ravel(), basemap, axs)

    # Draw N most likely contours (enable if wanted)
    # X_proj = x_proj.reshape(X_lon.shape)
    # Y_proj = y_proj.reshape(Y_lat.shape)
    # draw_n_likely_contours(X_proj, Y_proj, unraveled_geo_probabilities, theta, 8, basemap, axs)

    marker_types = ['o', 'D', 'p', 'v', '^', 's', '*', '<']

    # Filter points with probability less than threshold
    enabled_points = geo_probabilities >= geo_prob_threshold

    for score_index, word_scores in enumerate(word_scores_list):
        print("Processing score type {0}/{1}...".format(score_index, len(word_scores_list) - 1), file=sys.stderr)

        # Hard-assign each "word" by its highest score, so we can draw "categorical" data
        assignments = word_scores.argmax(axis=0).ravel()

        # Keep only "words" that actually have points assigned to them
        bins = np.bincount(assignments[enabled_points])
        common_words = np.where(bins >= np.power(len(bins), 1 / 3))[0]

        marker_map = dict(
            [(feature, marker_types[idx % len(marker_types)]) for idx, feature in enumerate(common_words)])

        # Color generation
        num_colors = len(common_words)
        cm = get_cmap('Set1')
        cgen = [cm(1. * i / num_colors) for i in range(num_colors)]

        # Transparency for each point. Dependent on its geographical probability
        alphas = 0.2 + (geo_probabilities / np.max(geo_probabilities)) * (1 - 0.2)

        # Area of each marker. Calculated by the word score.
        maxes = word_scores.max(axis=0).ravel()
        areas = maxes - np.mean(maxes[enabled_points])
        areas /= np.std(areas)
        areas += 4
        if (x_size / X_lon.shape[0]) > (y_size / X_lon.shape[1]):
            areas *= (500 * (y_size / X_lon.shape[1]) ** 2)
        else:
            areas *= (500 * (x_size / X_lon.shape[0]) ** 2)
        # areas /= np.max(areas)
        # areas *= 0 + ((areas - np.min(maxes)) / (np.max(maxes) - np.min(maxes))) * (2 - 1)

        print("Starting to draw scatter plot.", file=sys.stderr)
        print("Marker areas: Min: {0}, max: {1}, mean: {2}. Alpha mean: {3}".format(np.min(areas), np.max(areas),
                                                                                    np.mean(areas), np.mean(alphas)),
              file=sys.stderr)

        for idx, word in enumerate(common_words):
            # Hack for legend, puts a point somewhere out of map
            basemap.scatter(-5000000, -5000000, marker=marker_map[word], color=cgen[idx],
                            s=100, alpha=1, label=unigrams_list[score_index][word], ax=axs[score_index])

            relevant_idx = np.where(assignments == word)[0]

            # Draw the points
            for i in relevant_idx:
                if geo_probabilities[i] > geo_prob_threshold:
                    alpha = alphas[i]
                    x_feat = x_proj[i]
                    y_feat = y_proj[i]
                    area = areas[i]
                    basemap.scatter(x_feat, y_feat, marker=marker_map[word],
                                    color=cgen[idx], s=area, alpha=alpha,
                                    ax=axs[score_index], linewidths=0)

        print("Successfully drawn scatter plot.", file=sys.stderr)

        # Put the legend on the bottom of the figure, out of the drawing area
        axs[score_index].legend(prop={'size': 10}, scatterpoints=1, bbox_to_anchor=(0.5, 0), loc='upper center')

        # Save
        print("Starting to save figure in a file.", file=sys.stderr)
        figs[score_index].savefig(out_files[score_index], dpi=150)
        print("Figure saved.", file=sys.stderr)

        # Cleanup, so we don't leak memory here
        figs[score_index].clf()
        plt.close(figs[score_index])
        gc.collect()


def generate_scatter_plots(model_prefix: str, features: list, geo_prob_threshold):
    m = pickle.load(open(model_prefix + ".mdl", "rb"))
    scaler = pickle.load(open(model_prefix + ".scaler", "rb"))
    unigrams = pickle.load(open(model_prefix + ".unigrams", "rb"))
    params = m.get_params()

    print("Processing {0}.".format(model_prefix), file=sys.stderr)

    # Have to ravel these probabilities before using them in plotting
    unraveled_geo_probabilities, X, Y, _ = compute_grid_geo_probabilities(m, scaler, 0.002, geo_prob_threshold)

    unigrams_list = [unigrams[feature] for feature in features]

    # Generate word probability grids most likely
    word_probabilities_list = [compute_word_probabilities(unraveled_geo_probabilities, params, feature)
                               for feature in features]
    word_probabilities_out_files = [model_prefix + "_" + feature + "_likely.pdf" for feature in features]

    # Generate word probability grids most distinctive
    word_divergences_list = [compute_word_divergences(unraveled_geo_probabilities, params, feature)
                             for feature in features]
    word_divergences_out_files = [model_prefix + "_" + feature + "_distinctive.pdf" for feature in features]

    # Generate word probability grids most distinctive, using KL v2
    word_divergences_kl2_list = [compute_word_divergences_kl2(unraveled_geo_probabilities, params, feature)
                                 for feature in features]
    word_divergences_kl2_out_files = [model_prefix + "_" + feature + "_distinctive_kl2.pdf" for feature in features]

    # Concatenation
    scores = word_probabilities_list + word_divergences_list + word_divergences_kl2_list
    out_files = word_probabilities_out_files + word_divergences_out_files + word_divergences_kl2_out_files
    unigrams_list = unigrams_list + unigrams_list + unigrams_list  # temporary hack

    # Generate plots
    plot_scatter_osm(X, Y, unraveled_geo_probabilities, params.theta, unigrams_list, geo_prob_threshold,
                     scores, out_files)
