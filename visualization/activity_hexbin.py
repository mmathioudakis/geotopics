from model.io import *
from visualization.utils import *
import matplotlib.pyplot as plt
import numpy as np

def load_data(venue_collection, checkin_collection, venue_filter_query):
    venue_extractors = [venue_primary_category_extractor]
    checkin_extractors = [checkin_day_extractor, checkin_time_extractor_hard]

    data = fetch_data_from_mongo(venue_collection, checkin_collection, venue_filter_query, venue_extractors, checkin_extractors)

    data["coordinates"] = np.array(data["coordinates"])

    return sparsify_data(data, None, None)


def activity_hexbin(model_prefix, data, features_to_words: dict):
    # We obtain the region to focus from the model, but the data comes from mongo
    m = pickle.load(open(model_prefix + ".mdl", "rb"))
    scaler = pickle.load(open(model_prefix + ".scaler", "rb"))

    _, X, Y, _ = compute_grid_geo_probabilities(m, scaler, 0.002, 0.125)

    x_vec = data["coordinates"][:, 0]
    y_vec = data["coordinates"][:, 1]

    x_proj_grid, y_proj_grid, basemap = project_mesh_to_map(X, Y)

    x_size, y_size = generate_suitable_plot_size(x_proj_grid, y_proj_grid)

    figs, axs = zip(* [plt.subplots(figsize=(x_size, y_size)) for feature in features_to_words for _ in features_to_words[feature]])
    draw_osm_backgrounds(X.ravel(), Y.ravel(), basemap, axs)

    x_proj, y_proj = basemap(x_vec, y_vec)

    print(len(axs))


    for feature in features_to_words.keys():
        for word in features_to_words[feature]:
            word_pos = data["unigrams"][feature].index(word)
            vec = data[feature][:, word_pos]
            basemap.hexbin(x=x_proj, y=y_proj, C=vec.todense(), ax=axs[0], mincnt=5, cmap='YlOrBr',
                           reduce_C_function=np.sum, alpha=0.5)
            # basemap.colorbar(location='bottom', ax=axs[0])
            # plt.show()
            figs[0].savefig("newyork-hexbin.pdf", dpi=150)
            break