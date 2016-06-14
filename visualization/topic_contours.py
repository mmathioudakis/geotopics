import pickle
from visualization.utils import *
import matplotlib.pyplot as plt


def topic_contours(model_prefix, geo_prob_threshold):
    # We obtain the region to focus from the model, but the data comes from mongo
    m = pickle.load(open(model_prefix + ".mdl", "rb"))
    scaler = pickle.load(open(model_prefix + ".scaler", "rb"))
    theta = m.get_params().theta

    unraveled_geo_probabilities, X, Y, _ = compute_grid_geo_probabilities(m, scaler, 0.002, geo_prob_threshold)

    # Generate x-y coordinates from lon-lat
    x_proj, y_proj, basemap = project_mesh_to_map(X, Y)

    x_size, y_size = generate_suitable_plot_size(x_proj, y_proj)

    # Generate figures to draw plots on
    figs, axs = zip(*[plt.subplots(figsize=(x_size, y_size))])

    # Get map data from OSM
    draw_osm_backgrounds(X.ravel(), Y.ravel(), basemap, axs)

    # Draw N most likely contours (enable if wanted)
    X_proj = x_proj.reshape(X.shape)
    Y_proj = y_proj.reshape(Y.shape)
    most_likely_topic_indexes = (-theta).argsort(axis=1).flatten()

    indexes = most_likely_topic_indexes[0:25]

    for ax in axs:
        for index in indexes:
            basemap.contour(X_proj, Y_proj, unraveled_geo_probabilities[index, :, :], 1, colors="#333333",
                            linewidths=theta[0, index] * 25, alpha=theta[0, index] * 12, ax=ax)

    figs[0].savefig("newyork-contours.pdf", dpi=150)

