import sys
import warnings

import numpy as np
import scipy as sp
from model import ModelParameters


def stop(): sys.exit()


class Error(Exception):
    pass


# Math
def my_log(x):
    if x == 0.:
        return float('-inf')
    return np.log(x)


def log_sum(x, axis):
    return np.logaddexp.reduce(x, axis)


def log_sum_scipy(x, axis):
    return sp.misc.logsumexp(x, axis)


def log_sum_slow(x_array):
    def ls(log_x, log_y):
        """ Return log(x+y), given log(x) and log(y)."""
        if log_x == float('-inf'):
            return log_y
        elif log_y == float('-inf'):
            return log_x

        with warnings.catch_warnings():
            warnings.filterwarnings('error')
            try:
                partial = my_log(1 + np.exp(log_y - log_x))
            except Warning:  # OverflowError:
                sys.stderr.write("logx = {0}, logy = {1}\n".format(log_x,
                                                                   log_y))
                partial = log_y - log_x
                raise Error("Overflow")

        return log_x + partial

    log_s = float('-inf')
    for log_x in x_array:
        log_s = ls(log_s, log_x)
    return log_s


# Printing

def get_topic_labels(unigrams, parameters: ModelParameters):
    """
    Finds the most important labels for each feature per topic. The output is a list of dictionary objects.
    Each dictionary in the list correspond to a topic. Dictionaries contain per-feature topics.

    Example:

    [
        {"dayOfTime":["MORNING", "NOON"], "primCategory": ["Office"]},
        {"dayOfTime: ["EVENING"], "primCategory": ["Bar"]}
    ]


    :param unigrams:
    :param parameters:
    """
    num_topics = parameters.num_topics

    topic_labels = [{} for i in range(num_topics)]

    for feature in parameters.beta_arrays.keys():
        beta = parameters.beta_arrays[feature]

        k, _ = beta.shape

        # Get the highest probability indexes, sorted by descending order
        highest_index = np.argsort(-1. * beta, axis=1)

        sorted_beta = -1. * np.sort(-1. * beta, axis=1)

        summed = np.cumsum(sorted_beta, axis=1)

        for z in range(k):
            twothird_explained = np.where(summed[z] >= 0.8)  # In which positions did we reach 0.8?

            pos = twothird_explained[0][0]  # Take the first position that satisfies 0.8

            if pos > 20:
                topic_labels[z][feature] = None  # Too many elements, too small increase, just skip
            else:
                most_important = highest_index[z][0:pos + 1]  # Take the unigrams that sum of prob >= 0.8
                topic_labels[z][feature] = ["{0} ({1:.6f})".format(unigrams[feature][i], beta[z][i]) for i in most_important]  # Add them to the unigrams for this feature

    return topic_labels


def print_stuff(unigrams, model_parameters: ModelParameters):
    k = model_parameters.num_topics

    print("m_arrays =\n {0}".format(str(model_parameters.m_arrays)), file=sys.stderr)
    sys.stderr.write("Initialization\n")
    sys.stderr.write("{0} clusters\n".format(k))

    topic_labels = get_topic_labels(unigrams, model_parameters)

    for feature in model_parameters.m_arrays.keys():
        sys.stderr.write("For feature {0}:\n".format(feature))
        unigram_str = ", ".join(unigrams[feature][0:20])
        freq_str = ", ".join(str(np.exp(x)) for x in model_parameters.m_arrays[feature][0:20])
        if len(unigrams[feature]) > 20:
            sys.stderr.write("Too many unigrams. Printing the first 20.\n")
            unigram_str += ", ..."

        sys.stderr.write("Unigrams: {0}\n".format(unigram_str))
        sys.stderr.write("Frequencies: {0}\n" \
                     .format(freq_str))

    for z in range(k):
        sys.stderr.write("\n")
        sys.stderr.write("Probability: {0}\n".format(model_parameters.theta[0, z]))
        sys.stderr.write("Center: ({0}, {1})\n".format(model_parameters.topic_centers[z, 0],
                                                       model_parameters.topic_centers[z, 1]))
        sys.stderr.write("Variances: XX {0}, XY {1}, YY {2}\n" \
                         .format(model_parameters.topic_covar[z, 0, 0], model_parameters.topic_covar[z, 0, 1],
                                 model_parameters.topic_covar[z, 1, 1]))

        for feature in model_parameters.beta_arrays.keys():
            if topic_labels[z][feature] is not None:
                sys.stderr.write("Topic labels for {0}: {1}\n" \
                                 .format(feature, ", ".join(x for x in topic_labels[z][feature])))

    sys.stderr.write("\n")
