from pymongo import MongoClient

__author__ = 'emre'


def get_mongo_database_with_auth(dbhost, dbport, dbname, username, password):
    """
    Attempts to get authenticated access to a MongoDB database.

    :param dbhost:
    :param dbport:
    :param dbname:
    :param username:
    :param password:
    :return: :raise "Failed to authenticate to MongoDB database {0} using given username and password!".format:
    """
    client = MongoClient(dbhost, dbport)

    db = client[dbname]

    if username is not None or password is not None:
        if not db.authenticate(username, password):
            raise "Failed to authenticate to MongoDB database {0} using given username and password!".format(dbname)

    return db
