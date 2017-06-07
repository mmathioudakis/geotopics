import sys
import traceback
from copy import copy

import numpy as np
import scipy.optimize as optimize
import scipy.stats as stats

from model import utils, Statistics, ModelParameters

__author__ = 'emre'

_EPSILON = 1e-10


# Lambda = 1


# noinspection PyBroadException,PyPep8Naming
class Model:
    def __init__(self, Lambda, num_topics, max_iterations, minimum_relative_change,
                 initial_topic_centers=None, initial_topic_covar=None,
                 track_params=False, verbose=0):
        """
        Creates a probabilistic model for modelling regions with topics on geospatial data.

        :param num_topics: number of topics to find
        :param max_iterations: maximum number of expectation maximization iterations
        :param minimum_relative_change: threshold for likelihood change per each iteration
        :param initial_topic_centers: user-supplied centers for geographical distribution of topics
        :param initial_topic_covar: user-supplied covariance matrix for geographical distribution of topics

        :param track_params: if True, it keep a copy of model parameter for each iteration of
        expectation-maximization during training

        :param verbose: if 0, nothing will be displayed; if 1, iteration numbers will be displayed on stderr;
        if 2, will print lots of tracking information
        """
        self.Lambda = Lambda
        self.num_topics = num_topics
        self.max_iterations = max_iterations
        self.minimum_relative_change = minimum_relative_change

        self.topic_centers = initial_topic_centers  # k x 2
        self.topic_covar = initial_topic_covar  # k x 2 x2
        self.fixed_regions = True
        if initial_topic_covar is None and initial_topic_centers is None:
            self.fixed_regions = False

        # Overall unigram frequencies
        self.m_arrays = {}  # F x (1 x V)

        # Per topic unigram deviations
        self.h_arrays = {}  # F x (k x V)

        self.beta_arrays = {}  # F x (k x V)

        # Proportion of topics
        self.theta = None  # 1 x k

        # Topic proportion per document
        self.phi = None  # k X N

        # Per topic & unigram alpha and beta parameters
        self.a_gammas = {}  # k x V
        self.b_gammas = {}  # k x V

        self.track_params = track_params
        self.verbose = verbose

        self.num_points = 0

        # Variables for tracking EM changes. Only used for reporting, if enabled.
        if self.track_params:
            self.likelihood_history = []
            self.user_likelihood_history = []
            self.location_likelihood_history = []
            self.topic_likelihood_history = []
            self.sigma_likelihood_history = []
            self.phi_entropy_history = []
            self.center_history = []
            self.covar_history = []
            self.h_array_history = []
            self.phi_history = []
            self.eta_penalty_history = []

        self.latest_statistics = None
        self.venue_ids = None

    def fit(self, train_data):
        # Reset tracking
        if self.track_params:
            self.likelihood_history = []
            self.user_likelihood_history = []
            self.location_likelihood_history = []
            self.topic_likelihood_history = []
            self.sigma_likelihood_history = []
            self.phi_entropy_history = []
            self.center_history = []
            self.covar_history = []
            self.h_array_history = []
            self.phi_history = []
            self.eta_penalty_history = []

        self.latest_statistics = Statistics(-np.infty, -np.infty, -np.infty, -np.infty, -np.infty, -np.infty, -np.infty,
                                            [], [], [])

        # MODEL PARAMETER INITIALIZATION =======================
        self.num_points = train_data["coordinates"].shape[0]
        self.venue_ids = train_data['venue_ids']

        # Initialize geographical parameters
        if self.topic_centers is None:
            self.topic_centers = self.__random_centers_from_data(train_data["coordinates"])

        if self.topic_covar is None:
            self.topic_covar = self.__random_covar()

        # Proportion of topics: 1 x k
        self.theta = np.reshape(np.array(self.num_topics * [1. / self.num_topics]), (1, self.num_topics))

        # Topic proportion per document: k x N
        self.phi = np.zeros((self.num_topics, self.num_points))
        # self.phi = np.reshape(np.array(self.num_topics * [self.num_points * [1. / self.num_points]]).T,
        #                      (self.num_points, self.num_topics))

        # Unigram frequencies and deviations
        features = (feature for feature in train_data.keys()
                    if feature not in ["coordinates", "counts", "unigrams", 'venue_ids'])

        for feature in features:
            num_unigrams = len(train_data["unigrams"][feature])

            self.m_arrays[feature] = np.log([i + 1 for i in train_data["counts"][feature]]).reshape(
                (1, num_unigrams))  # 1 x V
            self.h_arrays[feature] = np.zeros((self.num_topics, num_unigrams))  # k x V
            # self.h_arrays[feature] = np.random.rand(self.num_topics, num_unigrams) - 0.2

            self.beta_arrays[feature] = \
                self.get_topic_unigram(self.m_arrays[feature], self.h_arrays[feature])  # k x V

        # Per topic & unigram alpha and beta parameters: k x V
        self.a_gammas = copy(self.h_arrays)

        for feature in self.a_gammas.keys():
            self.a_gammas[feature] = np.abs(self.a_gammas[feature])

        self.b_gammas = np.copy(self.a_gammas)

        # We are ready, run EM
        self.__run_EM(train_data)

    def predict_log_probs(self, test_data):
        num_points = test_data["coordinates"].shape[0]
        topic_log_prob_vector = np.zeros((self.num_topics, num_points))
        # topic_prob_vector = np.ones((self.num_topics, num_points))

        for z in range(self.num_topics):
            try:
                rv = stats.multivariate_normal(mean=self.topic_centers[z, :],
                                               cov=self.topic_covar[z, :, :], allow_singular=True)
                loc_log_prob = rv.logpdf(test_data["coordinates"]).reshape((num_points, 1))  # Nx1
                # loc_prob = rv.pdf(test_data["coordinates"]).reshape((num_points, 1))  # Nx1

            except:
                print("Error while computing geo log probabilities for test, dumping data.", "\n",
                      self.topic_centers[z, :], "\n", self.topic_covar[z, :, :], file=sys.stderr)
                traceback.print_stack(file=sys.stderr)
                sys.exit(1)

            feature_log_prob = np.zeros((num_points, 1))
            # feature_prob = np.ones((num_points, 1))
            for feature in self.beta_arrays.keys():
                beta = self.beta_arrays[feature][z]
                num_words = beta.shape[0]
                feature_log_prob += test_data[feature] * np.log(beta.reshape((num_words, 1)))  # (NxV * Vx1) = Nx1
                # feature_prob *= np.prod(np.power(beta.reshape((num_words, 1)).T, test_data[feature].todense()), axis=1)

            topic_log_prob_vector[z] = (loc_log_prob +
                                        feature_log_prob +
                                        np.tile(np.log(self.theta[0, z]), (num_points, 1))).flatten()
            # topic_prob_vector[z] = np.multiply(np.multiply(loc_prob, feature_prob),
            #                                    np.tile(self.theta[0, z], (num_points, 1))).flatten()

        # print("direct")
        # print(np.sum(np.log(np.sum(topic_prob_vector, axis=0))))
        return np.sum(utils.log_sum(topic_log_prob_vector, axis=0))

    def predict_log_probs_variational(self, test_data):
        data_phi = self.__update_phi(test_data, self.beta_arrays, self.theta, self.topic_centers, self.topic_covar)
        likelihood = self.compute_likelihood(test_data, self.topic_centers, self.topic_covar,
                                             self.theta, data_phi, self.h_arrays, self.beta_arrays, self.Lambda)

        return likelihood.likelihood + 2 * likelihood.sigma_likelihood - likelihood.eta_penalty

    def predict_log_probs_without_geo(self, test_data):
        data_phi = self.__update_phi(test_data, self.beta_arrays, self.theta, self.topic_centers, self.topic_covar)
        likelihood = self.compute_likelihood(test_data, self.topic_centers, self.topic_covar,
                                             self.theta, data_phi, self.h_arrays, self.beta_arrays, self.Lambda)

        return likelihood.likelihood + 2 * likelihood.sigma_likelihood \
               - likelihood.eta_penalty - likelihood.location_likelihood, data_phi

    def get_params(self):
        return ModelParameters(self.num_topics, self.num_points,
                               self.theta, self.phi,
                               self.m_arrays, self.h_arrays, self.beta_arrays,
                               self.topic_centers, self.topic_covar, self.venue_ids)

    def get_statistics_history(self):
        if self.track_params:
            return Statistics(self.likelihood_history, self.user_likelihood_history, self.location_likelihood_history,
                              self.topic_likelihood_history, self.sigma_likelihood_history, self.phi_entropy_history,
                              self.eta_penalty_history, np.array(self.center_history), np.array(self.covar_history),
                              np.array(self.phi_history))
        else:
            return None  # We don't have anything to return

    def __random_centers_from_data(self, coordinates):
        """
        Creates a random geographical center per each topic, distributed around the mean of given data.
        :param coordinates: N x 2 matrix for geographical coordinates of points
        :return: randomly initialized topic centers(k x 2)
        """
        data_means = coordinates.mean(axis=0)
        data_covar = np.cov(coordinates, rowvar=0)

        topic_centers = np.array(
            [np.random.multivariate_normal(mean=data_means, cov=data_covar) for i in range(self.num_topics)])

        return topic_centers

    def __random_covar(self):
        """
        Creates a random variance-covariance matrix per each topic.
        :return: randomly initialized covariances (k x 2 x 2)
        """

        topic_covar = (np.random.rand(self.num_topics, 2, 2) * 2)

        # Set the covariance entries to 0
        for z in range(self.num_topics):
            topic_covar[z, 0, 1] = 0
            topic_covar[z, 1, 0] = 0

        # Make it positive semi-definite by multiplying it with it's transpose
        for z in range(self.num_topics):
            topic_covar[z] = np.dot(topic_covar[z].T, topic_covar[z])

        return topic_covar

    @staticmethod
    def __update_phi(data, beta_arrays, theta, topic_centers, topic_covar):
        """
        :param data: a dictionary containing coordinates and sparse N x V_F matrices for features
        :param beta_arrays: F x k x V
        :param theta: 1 x k
        :param topic_centers: k x 2
        :param topic_covar: k x 2 x 2
        """

        k, _ = topic_centers.shape
        N, _ = data["coordinates"].shape

        G = np.zeros((k, N))
        Z = np.zeros((k, N))

        # Compute geographical probabilities
        for z in range(k):
            # setup distribution variable
            rv = stats.multivariate_normal(mean=topic_centers[z, :],
                                           cov=topic_covar[z, :, :], allow_singular=True)

            log_probabilities = rv.logpdf(data["coordinates"])
            G[z, :] = log_probabilities

            # TODO: @MM, I think we can move this out of the loop, no? There can be a minor performance increase. - Emre
            Z[z, :] = np.log(theta[0, z])

        # Compute new phi
        # TODO: @MM, please check this. - Emre
        F = np.zeros((k, N))

        for feature in beta_arrays.keys():
            # (k x V) x (N x V)' + k x N
            F += np.log(beta_arrays[feature]) * data[feature].transpose()

        F += G + Z

        S = utils.log_sum(F, axis=0)  # 1 x N

        F = F - S

        phi = np.exp(F)  # k x N

        return phi

    # @staticmethod
    # def __update_a_b(a_gamma, b_gamma, h_array, threshold):
    #     psi1 = lambda x: special.polygamma(1, x)
    #     psi2 = lambda x: special.polygamma(2, x)
    #
    #     change = float('inf')
    #     h2_array = np.square(h_array)
    #     for loop in range(_NUM_OF_LOOPS):
    #         # update a_gamma
    #         delta_num = (0.5 + a_gamma) * psi1(a_gamma) \
    #                     - 0.5 * np.square(h_array) * np.power(a_gamma - 1., -2) / b_gamma
    #         delta_den = (0.5 + a_gamma) * psi2(a_gamma) \
    #                     + np.square(h_array) * np.power(a_gamma - 1., -3) / b_gamma
    #         # TODO avoid divisions by zero
    #         delta_a = delta_num / delta_den
    #         delta_a[np.nonzero(delta_den == 0.0)] = 0.
    #         a_gamma += delta_a
    #         # update b_gamma
    #         delta_b = np.square(h_array) / (a_gamma - 1.) - b_gamma
    #         b_gamma += np.square(h_array) / (a_gamma - 1.)
    #
    #         change_in_a = np.max(np.abs(delta_a))
    #         change_in_b = np.max(np.abs(delta_b))
    #         change = np.max([change_in_a, change_in_b])
    #
    #         if change > threshold:
    #             break
    #
    #     return a_gamma, b_gamma

    @staticmethod
    def __update_theta(phi):
        """
        phi: k x N
        """
        theta = np.sum(phi, axis=1)
        theta /= np.sum(theta)
        k = phi.shape[0]
        return np.reshape(theta, (1, k))  # 1 x k

    @staticmethod
    def __update_centers(phi, data_coords):
        """
        phi:            k x N
        data_coords:    N x 2
        """
        sum_phi = np.sum(phi, axis=1)  # k x 1

        return ((phi.dot(data_coords)).T / sum_phi).T  # (k x N * N x 2) / k x 1

    @staticmethod
    def __update_covar(phi, topic_centers, data_coords):
        """
        phi:			k x N
        data_coords:	N x 2
        """
        k, N = phi.shape
        data_xx = data_coords[:, 0]  # N x 1
        data_yy = data_coords[:, 1]  # N x 1

        x_array = np.zeros((k, N))
        y_array = np.zeros((k, N))

        for z in range(k):
            x_array[z] = data_xx - topic_centers[z, 0]  # N x 1 - 1
            y_array[z] = data_yy - topic_centers[z, 1]

        coeff_sum = np.sum(phi, axis=1)  # 1 x k (k,)
        coeff_sum_squared = np.power(coeff_sum, 2.0)  # 1 x k
        coeff_sum_of_squares = np.sum(np.power(phi, 2.0), axis=1)  # 1 x k
        coeff = coeff_sum / (coeff_sum_squared - coeff_sum_of_squares)  # 1 x k

        cov_xx = coeff * np.sum(x_array * x_array * phi, axis=1)  # k x N * k x N * k x N
        cov_xy = coeff * np.sum(x_array * y_array * phi, axis=1)  # k x N * k x N * k x N
        cov_yy = coeff * np.sum(y_array * y_array * phi, axis=1)  # k x N * k x N * k x N

        topic_covar = np.zeros((k, 2, 2))
        for i in range(k):
            topic_covar[i, :, :] = np.array([cov_xx[i], cov_xy[i], cov_xy[i], cov_yy[i]]).reshape((1, 2, 2))

        return topic_covar

    @staticmethod
    def __update_covar2(phi, topic_centers, data_coords):
        """
        phi:            k x N
        data_coords:    N x 2
        """
        # New covar estimation
        k, N = phi.shape

        diff = np.zeros((k, N, 2))  # k x N x 2

        for z in range(k):
            diff[z, :, :] = data_coords - topic_centers[z]  # N x 2 - 1 x 2

        coeff_sum = np.sum(phi, axis=1) + 4.0  # 1 x k

        topic_covar = np.zeros((k, 2, 2))

        for z in range(k):
            phi_vec = phi[z, :].reshape((N, 1))
            topic_covar[z, :, :] = ((phi_vec * diff[z]).T.dot(diff[z])) / coeff_sum[z]  # (N x 1 *! N x 2)' * N x 2

        return topic_covar

    @staticmethod
    def compute_likelihood(data, topic_centers, topic_covar, theta, phi, h_arrays, beta_arrays, Lambda):
        """
        Computes log-likelihood of the model against the data for given parameters.

        :param data: a dictionary containing coordinates and sparse N x V_F matrices for features
        :param beta_arrays: F x k x V
        :param theta: 1 x k
        :param phi: k x N array
        :param topic_covar: z x 2 x 2 matrix containing variance-covariance matrices per topic for geographical location
        :param topic_centers: z x 2 matrix containing distribution centers per topic for geographical location
        :return: log likelihood according to given parameters
        """

        # I think this can be made to perform better by doing one for loop over the whole data - the reason I did it in
        # separate for loops is to track the contribution of each feature
        num_topics, num_points = phi.shape

        # Compute user likelihoods
        # TODO: @MM, please check this. - Emre
        user_likelihood = 0
        for feature in beta_arrays.keys():
            user_likelihood += np.sum(np.log(beta_arrays[feature]) * data[feature].transpose(copy=False) * phi)

        # Compute location likelihoods
        loc_likelihood = 0.0

        for z in range(num_topics):
            try:
                rv = stats.multivariate_normal(mean=topic_centers[z, :],
                                               cov=topic_covar[z, :, :], allow_singular=True)
                loc_likelihood += sum(phi[z, :] + rv.logpdf(data["coordinates"]))
            except:
                # TODO we get this very often --MM
                print("Error while computing geo probabilities for likelihood, dumping data.", "\n",
                      topic_centers[z, :], "\n", topic_covar[z, :, :], file=sys.stderr)
                traceback.print_stack(file=sys.stderr)
                sys.exit(1)

        # Compute topic likelihoods ( log p(z|theta) )
        topic_likelihood = np.sum(np.log(theta.T) * phi)  # (1 x k)' *! k x N

        # Compute covariance likelihoods ( P(S|I) )
        sigma_likelihood = 0.0

        for z in range(num_topics):
            sigma_likelihood += np.log(np.linalg.det(topic_covar[z, :, :]))

        # Compute phi (i.e. q_d(z)) entropy
        phi_mul = phi * np.log(phi)
        nan_idx = np.where(np.isnan(phi_mul))
        phi_mul[nan_idx] = 0.0  # Since the limit approaches zero as the probability approaches zero
        phi_entropy = np.sum(phi_mul)

        # TODO: @MM, please check this. - Emre
        h_penalty = 0

        for feature in h_arrays.keys():
            h_penalty += - Lambda * np.sum(np.abs(h_arrays[feature]))
            # h_penalty += - np.sum(np.log(np.abs(h_arrays[feature] + _EPSILON)))

        likelihood = user_likelihood + loc_likelihood + topic_likelihood \
                     - 2.0 * sigma_likelihood - phi_entropy + h_penalty

        return Statistics(likelihood, user_likelihood, loc_likelihood, topic_likelihood, sigma_likelihood, phi_entropy,
                          h_penalty, topic_centers, topic_covar, phi)

    @staticmethod
    def get_topic_unigram(m_array, h_array):
        """
        m_array: 1 x V
        h_array: k x V
        beta_array: k x V
        """
        beta_array = m_array + h_array
        norm_sum = utils.log_sum(beta_array, axis=1)

        try:
            beta_array = np.exp(beta_array.T - norm_sum).T
        except:
            sys.stderr.write(str(beta_array))
            sys.stderr.write("\n")
            sys.stderr.write(str(norm_sum))
            sys.stderr.write("\n")
        return beta_array

    def __run_EM(self, data):
        for em_step in range(self.max_iterations):
            self.__log("[k = {0}] At iteration {1}".format(self.num_topics, em_step + 1), 1)

            # E-Step ==================================================================================================
            # update phi
            u_phi = self.__update_phi(data, self.beta_arrays, self.theta, self.topic_centers, self.topic_covar)
            # TODO this is necessary only to compute the optimized lower bound
            # a_gamma, b_gamma = self.__update_a_b(a_gamma, b_gamma, h_array, _EPSILON)

            # M-Step ==================================================================================================
            # update theta
            u_theta = self.__update_theta(u_phi)

            # update location centers and variances
            if not self.fixed_regions:
                u_topic_centers = self.__update_centers(u_phi, data["coordinates"])
                u_topic_covar = self.__update_covar(u_phi, u_topic_centers, data["coordinates"])
            else:
                u_topic_centers = self.topic_centers
                u_topic_covar = self.topic_covar

            # update eta and beta
            u_h_arrays = {}
            u_beta_arrays = {}
            dh = 0

            for feature in self.h_arrays.keys():
                u_h_arrays[feature] = self.__update_eta_conjugate_gd_optimized(data[feature], self.m_arrays[feature],
                                                                               self.h_arrays[feature], u_phi)
                dh += np.max(np.abs(u_h_arrays[feature] - self.h_arrays[feature]))

                u_beta_arrays[feature] = self.get_topic_unigram(self.m_arrays[feature], u_h_arrays[feature])

            # likelihood_old = likelihood

            try:
                u_statistics = self.compute_likelihood(data, u_topic_centers, u_topic_covar,
                                                       u_theta, u_phi, u_h_arrays, u_beta_arrays, self.Lambda)
            except:
                # cannot compute likelihood
                # TODO why? no convergence? --MM
                traceback.print_stack(file=sys.stderr)
                self.__log("Cannot compute likelihood", 0)

                # just report whatever we had from before
                self.__update_stats(self.latest_statistics)
                break

            dlikelihood = np.abs(u_statistics.likelihood - self.latest_statistics.likelihood)

            # register the updates
            self.phi = u_phi
            self.theta = u_theta
            if not self.fixed_regions:
                self.topic_centers = u_topic_centers
                self.topic_covar = u_topic_covar
            self.h_arrays = u_h_arrays
            self.beta_arrays = u_beta_arrays

            self.__update_stats(u_statistics)

            self.__log("EM step {0}, {1}".format(em_step + 1, u_statistics[0:7]), 2)

            if abs(dlikelihood / u_statistics.likelihood) < self.minimum_relative_change:
                break

    def __update_eta_conjugate_gd_optimized(self, sparse_doc_term_matrix, m_array, h_array, phi):
        """
        Uses conjugate gradient descent from scipy to find the best eta array. Pre-computes stuff not to repeat them.

        h_array, beta_array: k x V
        phi: k x N array
        sparse_doc_term_matrix: matrix N x V
        """

        # also equals "e" in the derivative, we don't want to transpose the sparse matrix, k x V
        sparse_and_phi = phi * sparse_doc_term_matrix
        E = np.sum(sparse_and_phi, axis=1)  # 1 x k

        def compute_log_beta(h_matrix):
            beta_array = m_array + h_matrix
            norm_sum = utils.log_sum(beta_array, axis=1)

            return beta_array - norm_sum[:, np.newaxis]

        def l_prime(h_new):
            h_new_matrix = h_new.reshape(h_array.shape)

            new_beta = np.exp(compute_log_beta(h_new_matrix))
            # g = 1. / (h_new_matrix + _EPSILON) + (E * new_beta.T).T - sparse_and_phi  # multiplied by -1 to maximize
            g = self.Lambda * np.sign(h_new_matrix) + (
                E * new_beta.T).T - sparse_and_phi  # multiplied by -1 to maximize
            # g = (E * new_beta.T).T - sparse_and_phi  # multiplied by -1 to maximize

            return g.flatten()

        def f(h_new):
            h_new_matrix = h_new.reshape(h_array.shape)

            new_beta_log = compute_log_beta(h_new_matrix)
            # result = np.sum(new_beta_log * sparse_and_phi)
            # result = np.sum(new_beta_log * sparse_and_phi) - np.sum(
            #    np.log(np.abs(h_new + _EPSILON)))  # Matrix .* matrix
            result = np.sum(new_beta_log * sparse_and_phi) - self.Lambda * np.sum(
                np.abs(h_new))  # Matrix .* matrix

            return -1.0 * result

        # Initialize beta_array
        h_upd = optimize.fmin_cg(f, h_array.flatten(), fprime=l_prime, gtol=_EPSILON,
                                 norm=np.inf, disp=(self.verbose == 2))

        # self.__log('check_grad: {}'.format(optimize.check_grad(f, l_prime, h_upd)), 2)
        return h_upd.reshape(h_array.shape)

    def compute_beta_for_loc(self, loc, dimension='words'):
        """
        Return the "combined" beta array for a given location and feature dimension
        """
        # p(beta | loc) = \sum_z p(beta, z | loc) = 
        # \sum_z p(beta, z, loc) / p(loc) \propto \sum_z p(beta, loc | z) p(z)

        # TODO Speed up -- MM

        k = self.topic_centers.shape[0]
        geo_rv = [stats.multivariate_normal(mean=self.topic_centers[z, :],
                                            cov=self.topic_covar[z, :, :],
                                            allow_singular=True) for z in range(k)]
        # TODO store these in the model? -MM


        beta = np.zeros_like(self.beta_arrays[dimension][0])  # (1 x V)
        for z in range(k):
            beta += self.theta[0, z] * geo_rv[z].pdf(loc) * \
                    self.beta_arrays[dimension][z, :]

        # normalize
        beta = beta / np.sum(beta)
        return beta

    def compute_prob_for_loc(self, loc):
        """
        Return the probability that the model generate a data point at alpha
        given location.
        """
        k = self.topic_centers.shape[0]
        geo_rv = [stats.multivariate_normal(mean=self.topic_centers[z, :],
                                            cov=self.topic_covar[z, :, :],
                                            allow_singular=True) for z in range(k)]
        # p(loc) = \sum_z p(loc | z) p(z)
        geo_prob = [geo_rv[z].pdf(loc) for z in range(k)]
        tmp = [self.theta[0, z] * geo_prob[z] for z in range(k)]
        prob = np.sum(tmp)
        return prob

    def __log(self, text, level):
        if level <= self.verbose:
            print(text, file=sys.stderr)

    def __update_stats(self, statistics: Statistics):
        self.latest_statistics = statistics

        if self.track_params:
            self.likelihood_history.append(statistics.likelihood)
            self.user_likelihood_history.append(statistics.user_likelihood)
            self.location_likelihood_history.append(statistics.location_likelihood)
            self.topic_likelihood_history.append(statistics.topic_likelihood)
            self.sigma_likelihood_history.append(statistics.sigma_likelihood)
            self.phi_entropy_history.append(statistics.phi_entropy)
            self.eta_penalty_history.append(statistics.eta_penalty)
            self.center_history.append(statistics.topic_centers)
            self.covar_history.append(statistics.topic_covar)
            self.phi_history.append(statistics.phi)
