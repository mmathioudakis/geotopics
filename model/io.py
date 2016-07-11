import json
import pickle
import sys
from collections import Counter
from datetime import timedelta

import pandas as pd
from delorean import epoch
from scipy import sparse
from sklearn import cross_validation
from sklearn.preprocessing import StandardScaler

from model.model import Model

__author__ = 'emre'
from sklearn.decomposition import TruncatedSVD
import numpy as np


def get_sparse_occur_matrix(words, unigram_ids):
    # a sparse N x V matrix
    doc_sparse = sparse.lil_matrix((len(words), len(unigram_ids)))
    for d, venue in enumerate(words):
        for w in venue:
            doc_sparse[d, unigram_ids[w]] += 1.0
    return doc_sparse.tocsr()


def load_data_csv(datafile):
    """
    Loads data from given CSV file. The first line in the given CSV file is expected to be the names of the columns.
    :param datafile: path of the file
    :return: a NumPy array containing a data point in each row
    """

    # File format for CSV file. For example, setting _X_COLUMN to 'x' means that x coordinates of geographical location
    # will be at the column named 'x' in the CSV file.
    # This will be useful later when we start adding more features.
    _COLUMN_X = 'x'
    _COLUMN_Y = 'y'
    _COLUMN_W = 'color'

    data = pd.read_csv(datafile)

    # Normalize
    scaler = StandardScaler()
    scaler.fit(data[[_COLUMN_X, _COLUMN_Y]])
    data[[_COLUMN_X, _COLUMN_Y]] = scaler.transform(data[[_COLUMN_X, _COLUMN_Y]])

    data_coords = data[[_COLUMN_X, _COLUMN_Y]].values
    data_words = [[e] for e in data[[_COLUMN_W]].values.flatten().tolist()]

    data = {"coordinates": data_coords, "words": data_words}

    return sparsify_data(data, None, None), scaler  # None for both params since SVD is not used


def load_data_csv_advanced(datafile):
    """
    Loads data from given CSV file. The first line in the given CSV file is expected to be the names of the columns.
    :param datafile: path of the file
    :return: a NumPy array containing a data point in each row
    """

    # File format for CSV file. For example, setting _X_COLUMN to 'x' means that x coordinates of geographical location
    # will be at the column named 'x' in the CSV file.
    _COLUMN_X = 'x'
    _COLUMN_Y = 'y'

    data = pd.read_csv(datafile)

    # Normalize
    scaler = StandardScaler()
    scaler.fit(data[[_COLUMN_X, _COLUMN_Y]])
    data[[_COLUMN_X, _COLUMN_Y]] = scaler.transform(data[[_COLUMN_X, _COLUMN_Y]])

    #  Get feature vector names by removing "x" and "y"
    feature_vector_names = data.columns.difference([_COLUMN_X, _COLUMN_Y])
    data_coords = data[[_COLUMN_X, _COLUMN_Y]].values

    result = {"coordinates": data_coords}

    for feature in feature_vector_names:
        data_words = [[e.strip() for e in venue_data.split(",")] for venue_data in data[feature].values.flatten().tolist()]

        result[feature] = data_words

    return sparsify_data(result, None, None), scaler  # None for both params since SVD is not used


def fetch_data_from_mongo(venue_collection, checkin_collection, venue_filter_query,
                          venue_feature_extractors, checkin_feature_extractors,
                          venue_threshold=0):
    print(venue_filter_query)
    venue_filter_query_json = json.loads(venue_filter_query)

    data = {"coordinates": []}

    # do filtering here -> save the results of the filtering to tempoarary collection
    # filter users with >N checkins
    num_elems = venue_collection.count(venue_filter_query_json)

    venue_cursor = venue_collection.find(venue_filter_query_json)

    num_checkins = 0
    venues = [venue for venue in venue_cursor
              if len(list(checkin_collection.find({"venueId": venue["_id"]}))) >= venue_threshold]
    num_elems = len(venues)
    for venue_num, venue in enumerate(venues):
        if venue_num % 2000 == 0: print("Processing venue number {0}/{1}.".format(venue_num, num_elems),
                                        file=sys.stderr)

        data["coordinates"].append(venue["coordinates"])

        venueId = venue["_id"]

        for extractor in venue_feature_extractors:
            key, words = extractor(venue)
            cur = data.get(key, [])
            # TODO: Elegance - Emre
            cur.append(words)
            data[key] = cur

        if checkin_feature_extractors:
            # Assuming venueId is indexed
            checkin_cursor = checkin_collection.find({"venueId": venueId})

            for checkin in checkin_cursor:
                num_checkins += 1
                for extractor in checkin_feature_extractors:
                    key, words = extractor(checkin)

                    # Initialize with whole list of lists if empty, otherwise we might skip things
                    if key not in data.keys(): data[key] = [[] for i in range(num_elems)]

                    data[key][venue_num] += words


    print("Found {0} checkins in total.".format(num_checkins))

    return data


def load_data_mongo(venue_collection, checkin_collection, venue_filter_query,
                    venue_feature_extractors, checkin_feature_extractors,
                    filename_prefix: str, num_svd_components: int,
                    venue_threshold: int):
    data = fetch_data_from_mongo(venue_collection, checkin_collection, venue_filter_query,
                                 venue_feature_extractors, checkin_feature_extractors,
                                 venue_threshold)

    # Normalize geographical coordinates
    scaler = StandardScaler()
    scaler.fit(data["coordinates"])
    data["coordinates"] = scaler.transform(data["coordinates"])

    print("Processed {0} venues.".format(data["coordinates"].shape[0]),
          file=sys.stderr)
    return sparsify_data(data, filename_prefix, num_svd_components), scaler


def sparsify_data(data: dict, filename_prefix: str, num_svd_components: int):
    """
    Converts raw data to sparse matrices.
    :param data:
    :return:
    """
    sparsified = {"coordinates": data["coordinates"], "unigrams": {}, "counts": {}}

    # Construct sparse matrices
    features = (feature for feature in data.keys() if feature not in ["coordinates", "counts", "unigrams"])

    for feature in features:
        counter = Counter([item for sublist in data[feature] for item in sublist])  # Flatten the list
        sparsified["counts"][feature] = list(counter.values())
        sparsified["unigrams"][feature] = list(counter.keys())
        unigram_ids = dict([(w, i) for i, w in enumerate(sparsified["unigrams"][feature])])
        sparsified[feature] = get_sparse_occur_matrix(data[feature], unigram_ids)
        if num_svd_components is not None and feature == "user":
            print("Running SVD for user and keeping {0} components...".format(num_svd_components))
            reduced = reduce_dim(sparsified[feature], data[feature],
                                 sparsified["unigrams"][feature],
                                 num_svd_components,
                                 filename_prefix)
            print("Size before SVD: {0}".format(sparsified[feature].shape))
            print("Size after SVD: {0}".format(reduced.shape))

            sparsified[feature] = reduced

            sparsified["counts"][feature] = reduced.sum(axis=0).tolist()
            sparsified["unigrams"][feature] = [str(i) for i in range(0, num_svd_components)]

    return sparsified


def reduce_dim(sparse_matrix, raw_data, unigrams, n: int, filename_prefix: str):
    """
    Applies truncated SVD to given sparse matrix and "clusters" each word according to
    the component that "leans" most in its direction.

    i.e. for each user, find out which principal component has the maximum value in its
    direction. Then assign it to the component with the maximum value.

    After doing this for all users and summing up the counts, components become
    "super user"s.

    :param sparse_matrix: feature matrix to be reduced
    :param unigrams: unigrams that correspond to columns in sparse_matrix
    These will be used to create a mapping file from word to super-word
    :param n: number of components
    :param filename_prefix: assignment vector will be saved with this prefix
    :return: reduced feature matrix where each column is a new "super-word"
    """
    svd = TruncatedSVD(n_components=n)
    svd.fit(sparse_matrix)
    maximums = np.argmax(np.abs(svd.components_), axis=0)
    unigram_feat_map = dict([(unigrams[i], maximums[i]) for i in range(len(maximums))])

    reduced = get_sparse_occur_matrix(raw_data, unigram_feat_map)[:, 0:n]
    # num_points, _ = sparse_matrix.shape
    # counts = sparse.csc_matrix((num_points, n), dtype=int)
    #
    # for feat_index, target_component in enumerate(maximums):
    #     counts[:, target_component] += sparse_matrix[:, feat_index]
    #
    with open(filename_prefix + ".svdfeatmap", "wb") as svdfeatmap:
        pickle.dump(unigram_feat_map, svdfeatmap)

    return reduced


def split_train_test_with_common_vocabulary(sparse_data: dict, test_size: float):
    # seed = random.randint(0, 2 ** 32)
    # TODO: Enable
    seed = 1

    train = {"unigrams": sparse_data["unigrams"], "counts": {}}
    test = {"unigrams": sparse_data["unigrams"], "counts": {}}

    coordinates_train, coordinates_test = cross_validation.train_test_split(sparse_data["coordinates"],
                                                                            test_size=test_size,
                                                                            random_state=seed)

    train["coordinates"] = coordinates_train
    test["coordinates"] = coordinates_test

    features = (feature for feature in sparse_data.keys() if feature not in ["coordinates", "counts", "unigrams"])

    for feature in features:
        sparse_train, sparse_test = cross_validation.train_test_split(sparse_data[feature], test_size=test_size,
                                                                      random_state=seed)
        train[feature] = sparse_train
        test[feature] = sparse_test

        # [0] is because this is a matrix, so we get list of lists
        train["counts"][feature] = np.asarray(sparse_train.sum(axis=0)).flatten().tolist()
        test["counts"][feature] = np.asarray(sparse_test.sum(axis=0)).flatten().tolist()

    return train, test


def venue_primary_category_extractor(venue_entry):
    try:
        category_names = [category["name"] for category in venue_entry["categories"] if "primary" in category]
    except:
        print(venue_entry["_id"])
        raise

    if len(category_names) == 1:
        word = category_names[0]
    elif len(category_names) > 1:
        print("found multiple\n")
        word = category_names[0]
    else:
        word = "NOPRIMCAT"
        # print("no prim cat")

    return "primCategory", [word]


def checkin_time_extractor_hard(checkin_entry):
    offset = checkin_entry["timeZoneOffset"]
    timestamp = checkin_entry["timestamp"]

    # Add time offset to timestamp so we get the local time
    actual_time = epoch(timestamp) + timedelta(minutes=offset)

    hour = actual_time.datetime.hour

    if hour < 2:
        time_of_day = "NIGHT"
    elif hour < 6:
        time_of_day = "LATENIGHT"
    elif hour < 10:
        time_of_day = "MORNING"
    elif hour < 14:
        time_of_day = "NOON"
    elif hour < 18:
        time_of_day = "AFTERNOON"
    elif hour < 22:
        time_of_day = "EVENING"
    else:
        time_of_day = "NIGHT"

    return "timeOfDay", [time_of_day]


def checkin_day_extractor(checkin_entry):
    offset = checkin_entry["timeZoneOffset"]
    timestamp = checkin_entry["timestamp"]

    # Add time offset to timestamp so we get the local time
    actual_time = epoch(timestamp) + timedelta(minutes=offset)

    day_of_week = actual_time.datetime.strftime("%A")

    return "dayOfWeek", [day_of_week]


def checkin_user_extractor(checkin_entry):
    return "user", [checkin_entry["foursquareUserId"]]


def save_model(model: Model, scaler: StandardScaler, query: str, unigrams: dict, filename_prefix: str,
               per_point_test_likelihood=None):
    with open(filename_prefix + ".mdl", "wb") as model_file:
        pickle.dump(model, model_file)

    with open(filename_prefix + ".scaler", "wb") as scaler_file:
        pickle.dump(scaler, scaler_file)

    with open(filename_prefix + ".unigrams", "wb") as unigram_file:
        pickle.dump(unigrams, unigram_file)

    with open(filename_prefix + ".desc", "w") as desc_file:
        desc_file.write("Number of points for training: {0}\n".format(model.num_points))
        desc_file.write("Number of topics: {0}\n".format(model.num_topics))
        desc_file.write("Features: {0}\n".format(list(model.beta_arrays.keys())))
        if query is not None: desc_file.write("Query: {0}\n".format(query))
        if per_point_test_likelihood is not None:
            desc_file.write("Test Likelihood per point: {}\n".format(per_point_test_likelihood))
