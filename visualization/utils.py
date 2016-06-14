import json
import sys

import numpy as np
from matplotlib import mlab
from mpl_toolkits.basemap import Basemap
from sklearn.preprocessing import StandardScaler

from model import ModelParameters
from visualization import smopy

__author__ = 'emre'


def create_probability_grid(x_min, x_max, y_min, y_max, scaler: StandardScaler, prob_granularity: float = 0.001):
    """
    Creates a np.meshgrid with (approximately) given granularity between values -5 and 5. Tries to keep the number of
    points reasonable.

    Also transforms the grid to longitude and latitude coordinates using given scaler.

    :param scaler: scaler to be used while transforming back to latitude and longitude
    :param prob_granularity: distance between each point in the grid (in degrees)
    :return: a tuple containing raw X, Y values and lat-lon vales
    """
    x_min_unsc, y_min_unsc = scaler.inverse_transform((x_min, y_min))
    x_max_unsc, y_max_unsc = scaler.inverse_transform((x_max, y_max))

    x_rng = np.arange(x_min_unsc, x_max_unsc, prob_granularity)
    y_rng = np.arange(y_min_unsc, y_max_unsc, prob_granularity)

    while len(x_rng) > 400 or len(y_rng) > 400:
        # print("Too many points ({}x{}), decreasing granularity.".format(len(x_rng), len(y_rng)))
        prob_granularity *= 1.25
        x_rng = np.arange(x_min_unsc, x_max_unsc, prob_granularity)
        y_rng = np.arange(y_min_unsc, y_max_unsc, prob_granularity)

    # print("Generated {}x{} coordinate points.".format(x_rng.shape[0], y_rng.shape[0]))
    X_lon, Y_lat = np.meshgrid(x_rng, y_rng)

    x = X_lon.ravel()
    y = Y_lat.ravel()

    coords = np.hstack((x[:, np.newaxis], y[:, np.newaxis]))
    scaled = scaler.transform(coords)

    X = scaled[:, 0].reshape(X_lon.shape)
    Y = scaled[:, 1].reshape(Y_lat.shape)

    return X, Y, X_lon, Y_lat


def compute_grid_geo_probabilities(model_parameters: ModelParameters, scaler: StandardScaler,
                                   prob_granularity: float = 0.01, geo_prob_threshold: float = 0.2):
    """
    Creates a mesh grid and computes the geographical probabilities for each point per each topic.

    Probabilities are weighted by topic probabilities (theta).

    :param geo_prob_threshold: points with mixture geo probability lower than this amount will be removed
    :param model_parameters:
    :param scaler:
    :param prob_granularity:
    :return:
    """
    X, Y, X_lon, Y_lat = create_probability_grid(-5.0, 5.0, -5.0, 5.0, scaler, prob_granularity)

    theta = model_parameters.theta.flatten()

    # 3D matrix of k x N1 X N2
    probs = np.zeros((model_parameters.num_topics, X.shape[0], X.shape[1]))

    for z in range(model_parameters.num_topics):
        center = model_parameters.topic_centers[z]
        cov = model_parameters.topic_covar[z]
        probs[z] = mlab.bivariate_normal(X, Y, np.sqrt(cov[0, 0]), np.sqrt(cov[1, 1]),
                                         center[0],
                                         center[1], cov[0, 1])

    probs *= theta[:, np.newaxis, np.newaxis]

    # Keep only locations that are geographically likely
    disabled_locations = probs.sum(axis=0) < geo_prob_threshold

    badcols = np.all(disabled_locations, axis=0)
    badrows = np.all(disabled_locations, axis=1)

    firstcol = max(0, badcols.argmin() * 0.9)
    firstrow = max(0, badrows.argmin() * 0.9)

    lastcol = min(len(badcols), (len(badcols) - badcols[::-1].argmin()) * 1.1)
    lastrow = min(len(badrows), (len(badrows) - badrows[::-1].argmin()) * 1.1)

    probs = probs[:, firstrow:lastrow, firstcol:lastcol]
    X_lon = X_lon[firstrow:lastrow, firstcol:lastcol]
    Y_lat = Y_lat[firstrow:lastrow, firstcol:lastcol]

    # print("Shrinked number grid to {}x{} by removing points with p<{}.".format(X_lon.shape[1], X_lon.shape[0],
    #                                                                            geo_prob_threshold))

    return probs, X_lon, Y_lat, probs / theta[:, np.newaxis, np.newaxis]


def compute_word_probabilities(probs, model_parameters: ModelParameters, feature: str):
    beta = model_parameters.beta_arrays[feature]
    k, V = beta.shape
    NX, NY = probs.shape[1::]

    numerator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d, w_d | z, I) * P(z | I)
    denominator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d | z) * P(z | I)

    for z in range(k):
        for w in range(V):
            numerator[w, :, :] += probs[z, :, :] * beta[z, w]
            denominator[w, :, :] += probs[z, :, :]

    return numerator / denominator

def compute_word_volumes(probs, model_parameters: ModelParameters, feature: str):
    beta = model_parameters.beta_arrays[feature]
    k, V = beta.shape
    NX, NY = probs.shape[1::]

    numerator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d, w_d | z, I) * P(z | I)

    for z in range(k):
        for w in range(V):
            numerator[w, :, :] += probs[z, :, :] * beta[z, w]

    return numerator


def compute_word_divergences(probs, model_parameters: ModelParameters, feature: str):
    eta = model_parameters.h_arrays[feature]
    k, V = eta.shape
    NX, NY = probs.shape[1::]

    numerator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d, w_d | z, I) * P(z | I)
    denominator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d | z) * P(z | I)

    for z in range(k):
        for w in range(V):
            numerator[w, :, :] += probs[z, :, :] * eta[z, w]
            denominator[w, :, :] += probs[z, :, :]

    return (numerator / denominator) / numerator.sum(axis=(1, 2))[:, np.newaxis, np.newaxis]


def compute_word_divergences_kl(probs, model_parameters: ModelParameters, feature: str):
    # p || q
    eta = model_parameters.h_arrays[feature]
    k, V = eta.shape
    NX, NY = probs.shape[1::]

    numerator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d, w_d | z, I) * P(z | I)
    denominator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d | z) * P(z | I)

    for z in range(k):
        for w in range(V):
            numerator[w, :, :] += probs[z, :, :] * eta[z, w]
            denominator[w, :, :] += probs[z, :, :]

    specific = (numerator / denominator)
    general = numerator.sum(axis=(1, 2))[:, np.newaxis, np.newaxis]

    kl = -general * np.log(general / specific)

    kl = np.nan_to_num(kl)
    return kl


def compute_word_divergences_kl2(probs, model_parameters: ModelParameters, feature: str):
    # q || p
    eta = model_parameters.h_arrays[feature]
    k, V = eta.shape
    NX, NY = probs.shape[1::]

    numerator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d, w_d | z, I) * P(z | I)
    denominator = np.zeros((V, NX, NY))  # sum for all z, P(loc_d | z) * P(z | I)

    for z in range(k):
        for w in range(V):
            numerator[w, :, :] += probs[z, :, :] * eta[z, w]
            denominator[w, :, :] += probs[z, :, :]

    specific = (numerator / denominator)
    general = numerator.sum(axis=(1, 2))[:, np.newaxis, np.newaxis]

    kl = specific * np.log(specific / general)

    kl = np.nan_to_num(kl)
    return kl


def project_mesh_to_map(X_lon, Y_lat):
    """
    Converts a np.meshgrid containing lon-lat coordinates to "real" x-y coordinates using Mercator projection.

    :return: vectors containing x and y values and the Basemap object used for projection
    """
    x_vec = X_lon.ravel()
    y_vec = Y_lat.ravel()

    x_min = x_vec[0]
    x_max = x_vec[-1]

    y_min = y_vec[0]
    y_max = y_vec[-1]

    basemap = Basemap(ellps='WGS84',
                      llcrnrlon=x_min,
                      llcrnrlat=y_min,
                      urcrnrlon=x_max,
                      urcrnrlat=y_max,
                      fix_aspect=True,
                      # resolution="h", # For debugging, enable along with drawcoastlines below
                      epsg=3857)

    # Project probability grid to the map projection
    x_proj, y_proj = basemap(x_vec, y_vec)

    return x_proj, y_proj, basemap


def generate_suitable_plot_size(x_proj, y_proj):
    """
    Attempts to come up with a good figure size for geographic maps, based on shape of the bounding box of given city
    """
    x_min = np.min(x_proj)
    x_max = np.max(x_proj)

    y_min = np.min(y_proj)
    y_max = np.max(y_proj)

    x_size = np.abs((x_max - x_min) * 0.5 * 1e-4)
    y_size = np.abs((y_max - y_min) * 0.5 * 1e-4)

    while x_size < 5 or y_size < 5:
        x_size *= 1.25
        y_size *= 1.25

    y_size += 6  # Add space for legend

    return x_size, y_size


def draw_osm_backgrounds(x_lon_vec, y_lat_vec, map, axs):
    """
    Loads map data from OpenStreetMap using smopy and puts them on given Matplotlib axes.

    :param map: Basemap object
    :param axs: a list of Matplotlib axes
    """
    print("Starting to draw OSM backgrounds...")

    x_min = np.min(x_lon_vec)
    x_max = np.max(x_lon_vec)

    y_min = np.min(y_lat_vec)
    y_max = np.max(y_lat_vec)

    bounds = (y_min, x_min, y_max, x_max)

    smopymap = smopy.Map(bounds, z=12)

    # Crop the image such that we actually have the correct coordinates (gives xy, not yx!)
    xy_min_pix = [int(i) for i in np.round(smopymap.to_pixels(y_min, x_min))]
    xy_max_pix = [int(i) for i in np.round(smopymap.to_pixels(y_max, x_max))]

    # top left, bottom right (x-y)
    img = smopymap.img.crop((xy_min_pix[0], xy_max_pix[1], xy_max_pix[0], xy_min_pix[1]))

    for ax in axs:
        map.imshow(img, origin="upper", ax=ax, alpha=1, zorder=-10, aspect=None)
        # For debugging
        # map.drawcoastlines(linewidth=0.25, ax=ax)

    print("OSM background drawing complete.", file=sys.stderr)


def draw_n_likely_contours(X_proj, Y_proj, unraveled_geo_probabilities, theta, n, basemap, axs):
    """
    Picks n most likely topics (from theta) and draws the contours of their geographical distributions.

    Given X and Y should be a mesh grid containing lon-lat coordinates.

    :param X_proj: grid X, projected to map projection
    :param Y_proj: grid Y, projected to map projection
    :param unraveled_geo_probabilities: zxNxN matrix of geographical probabilities for each point in the mesh
    :param theta:
    :param n: number of topics to draw
    :param map: Basemap object
    :param axs: a list of Matplotlib axes
    """
    print("Drawing {0} most likely contours on the figures...".format(n), file=sys.stderr)
    most_likely_topic_indexes = (-theta).argsort(axis=1).flatten()

    indexes = most_likely_topic_indexes[0:n]

    for ax in axs:
        for index in indexes:
            basemap.contour(X_proj, Y_proj, unraveled_geo_probabilities[index, :, :], 5, colors='#333333',
                            linewidths=theta[0, index] * 3, alpha=theta[0, index] * 10, ax=ax)


def get_city_name_from_desc(desc_file: str):
    """
    Extracts city name query from a desc file.

    :param desc_file: path of the desc file of a model
    :return: a string containing the city
    """
    query = None
    with open(desc_file, "r") as f:
        for l in f:
            if "Query:" in l:
                query = json.loads(l[7::])

    city_fields = ["city", "gadmCity", "bboxCity"]
    for field in city_fields:
        if field in query:
            return query[field]

    raise RuntimeError("Missing city field in given JSON")
