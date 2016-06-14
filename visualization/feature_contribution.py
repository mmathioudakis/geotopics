__author__ = 'emre'

import os
import os.path
import pickle
import sys

import numpy as np
import pandas as pd
import seaborn as sns
from scipy.stats import uniform, multivariate_normal

from model import io
from model.model import Model
from model.utils import log_sum
from mongo import get_mongo_database_with_auth


def compute_feature_contribution(db, model_path: str, venue_extractors, checkin_extractors):
    """
    Loads model files under given folder and computes likelihood drops for each model and for each feature,
    when the respective etas are set to zero.

    Querying of the database is done by reading .desc files and finding from there the query used to train the model.

    :param db: Mongo database instance to load data points from (use get_mongo_database_with_auth)
    :param model_path: path to directory where model files reside
    :return:
    """
    model_prefixes = [model_path + "/" + e[:-4:] for e in os.listdir(model_path) if ".mdl" in e]

    total_results = {}

    prev_dbquery = ""
    for model_prefix in model_prefixes:
        # Find the query for given model and fetch relevant data from the DB
        dbquery = ""
        with open(model_prefix + ".desc") as f:
            content = f.readlines()

            for line in content:
                if line[0:6] == "Query:":
                    dbquery = line[7::]

        model = pickle.load(open(model_prefix + ".mdl", "rb"))
        scaler = pickle.load(open(model_prefix + ".scaler", "rb"))
        unigrams = pickle.load(open(model_prefix + ".unigrams", "rb"))

        print("Processing {}.".format(model_prefix))
        # Do not load the data twice if we are operating on the same data.
        if dbquery != prev_dbquery:
            raw_data = io.fetch_data_from_mongo(db["venues"], db["checkins_gte5"], dbquery, venue_extractors,
                                                checkin_extractors)

            # Normalize geographical coordinates
            raw_data["coordinates"] = scaler.transform(raw_data["coordinates"])

            # Construct sparse matrices
            features = [feature for feature in raw_data.keys() if feature not in ["coordinates", "counts", "unigrams"]]

        data = {"coordinates": raw_data["coordinates"]}

        for feature in features:
            if feature == 'user' and os.path.isfile(model_prefix + ".svdfeatmap"):
                svdfeatmap = pickle.load(open(model_prefix + ".svdfeatmap", "rb"))

                data[feature] = io.get_sparse_occur_matrix(raw_data[feature], svdfeatmap)[:, 0:len(unigrams[feature])]
            else:
                unigram_ids = dict([(w, i) for i, w in enumerate(unigrams[feature])])
                data[feature] = io.get_sparse_occur_matrix(raw_data[feature], unigram_ids)

        # Compute likelihoods
        orig_ll = model.predict_log_probs(data)

        results = {"orig": orig_ll}
        for feature in features:
            betas = model.beta_arrays[feature]
            model.beta_arrays[feature] = Model.get_topic_unigram(model.m_arrays[feature], np.zeros_like(betas))
            ll = model.predict_log_probs(data)
            results[feature] = ll
            model.beta_arrays[feature] = betas

        without_geo = compute_probabilities_from_mixture(model, data)

        results["geo"] = without_geo
        total_results[model_prefix] = results

        prev_dbquery = dbquery
    return total_results


def plot_results(total_results):
    df = pd.DataFrame(total_results, columns=["timeOfDay", "dayOfWeek", "primCategory", "user"])
    sns.boxplot(orient="v", data=df)


def compute_probabilities_from_mixture(model, data):
    """
    Compute data probabilities, but by substituting Gaussian mixture of all topic distributions as geographical
    distribution, so all points are drawn from the same distribution.
    :param model:
    :param coordinates:
    :return:
    """
    theta = model.theta
    beta_arrays = model.beta_arrays
    num_points = data["coordinates"].shape[0]

    geo_log_prob = np.zeros((model.num_topics, num_points))  # kxN
    feature_log_prob = np.zeros((model.num_topics, num_points))  # kxN

    for z in range(model.num_topics):
        # Compute feature probabilities
        for feature in beta_arrays.keys():
            beta = beta_arrays[feature]  #  kxV

            feature_log_prob[z] += np.log(beta[z]) * data[feature].T  # kxV * NxV' = kxN

        # Compute geographical probabilities
        rv = multivariate_normal(mean=model.topic_centers[z, :],
                                 cov=model.topic_covar[z, :, :],
                                 allow_singular=True)

        geo_log_prob[z] += rv.logpdf(data["coordinates"])

        log_theta_for_z = np.log(theta[0, z])
        geo_log_prob[z] += log_theta_for_z
        feature_log_prob[z] += log_theta_for_z

    # Log-sum-exp over topics, then sum over data points
    final_geo_log_prob = log_sum(geo_log_prob, axis=0)
    final_feature_log_prob = log_sum(feature_log_prob, axis=0)

    return np.sum(final_geo_log_prob + final_feature_log_prob)


if __name__ == '__main__':
    if len(sys.argv) != 6:
        print("Usage: python -m visualization.feature_contribution dbhost dbport dbuser dbpassword model_dir")
        exit(0)

    dbhost = sys.argv[1]
    dbport = int(sys.argv[2])
    dbuser = sys.argv[3]
    dbpassword = sys.argv[4]
    model_path = sys.argv[5]

    db = get_mongo_database_with_auth(dbhost, dbport, "combined", dbuser, dbpassword)

    venue_extractors = [io.venue_primary_category_extractor]
    checkin_extractors = [io.checkin_time_extractor_hard, io.checkin_user_extractor, io.checkin_day_extractor]

    total_results = compute_feature_contribution(db, model_path, venue_extractors, checkin_extractors)
    print(total_results)
