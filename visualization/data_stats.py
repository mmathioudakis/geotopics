from collections import OrderedDict
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from geospatial_tools import names
from model.io import venue_primary_category_extractor


def fetch_time_stats(checkin_collection):
    """
    Fetches timestamps for checkins from given MongoDB collection.

    :param checkin_collection: mongodb collection from which information will be collected
    :return: a Pandas dataframe containing timestamps
    """
    num_checkins = checkin_collection.count()
    checkins = checkin_collection.find()

    times = []

    print("Processing {} entries.".format(num_checkins))
    i = 0
    for checkin in checkins:
        times.append(checkin["timestamp"])
        i += 1
        if i % 50000 == 0: print("Processing {} / {}...".format(i, num_checkins))

    df = pd.DataFrame(times, columns=["date"])
    df = pd.to_datetime(df['date'], unit='s')

    return df


def plot_time_stats(time_dataframe):
    """
    Groups given dataframe containing timestamps per month and produces a plot for visualizing the distribution.
    """
    time_dataframe.groupby([time_dataframe.dt.year, time_dataframe.dt.month]).count().plot(kind="bar")
    plt.savefig("data_stats.pdf")


def num_checkins_venues(venue_collection, checkin_collection):
    """
    Counts total number of venues and checkins for each city in the database.
    :param venue_collection: MongoDB collection that contains the venues
    :param checkin_collection: MongoDB collection that contains the checkins
    :return: a tuple containing number of venues and checkins per each city and the total number of unique users
    """
    venue_counts = OrderedDict()
    checkin_counts = OrderedDict()
    unique_users = set()

    for city_name in names:
        print("Processing {}...".format(city_name))
        venue_counts[city_name] = venue_collection.count({"bboxCity": city_name})

        venues = venue_collection.find({"bboxCity": city_name})

        num_checkins = 0

        for venue in venues:
            for checkin in checkin_collection.find({"venueId": venue["_id"]}):
                num_checkins += 1
                unique_users.add(checkin["foursquareUserId"])

        checkin_counts[city_name] = num_checkins

    venue_counts = OrderedDict((key, venue_counts[key]) for key in sorted(venue_counts.keys()))
    checkin_counts = OrderedDict((key, checkin_counts[key]) for key in sorted(checkin_counts.keys()))

    return venue_counts, checkin_counts, len(unique_users)


def num_unique_categories(venue_collection):
    """
    Counts total number of unique categories.
    :param venue_collection: MongoDB collection that contains the venues
    :return: a set of containing unique categories
    """
    unique_categories = set()
    venues = venue_collection.find()
    for venue in venues:
        unique_categories.add(venue_primary_category_extractor(venue)[1][0])

    return unique_categories
