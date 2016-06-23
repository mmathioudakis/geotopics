"""Pickle variables for later use."""
import pickle as pickle


def save_var(filename, d):
    with open(filename, 'wb') as f:
        pickle.dump(d, f, 4)


def load_var(filename):
    try:
        with open(filename, 'rb') as f:
            d = pickle.load(f)
    except IOError:
        raise
    return d
