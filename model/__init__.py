__author__ = 'emre'

from collections import namedtuple

ModelParameters = namedtuple("ModelParameters",
                             ["num_topics", "num_points", "theta", "phi", "m_arrays", "h_arrays", "beta_arrays",
                              "topic_centers", "topic_covar", 'venue_ids'])

Statistics = namedtuple("Statistics",
                        ["likelihood", "user_likelihood", "location_likelihood",
                         "topic_likelihood", "sigma_likelihood", "phi_entropy", "eta_penalty",
                         "topic_centers", "topic_covar", "phi"])
