"""
the main python script, it trains a geotopics model based
on data loaded from a mongodb database
"""


import argparse
import gc
import sys
import time
from datetime import datetime
import matplotlib.pyplot as plt
import numpy as np
from joblib import Parallel, delayed

from model import io, plotting
from model.model import Model
from model.utils import print_stuff
from mongo import get_mongo_database_with_auth


class Error(Exception):
    pass


def _get_lambdas(arg_str):
    result = [float(x) for x in arg_str.split()]
    return result


def parse_args():
    parser = argparse.ArgumentParser()

    # Data source. Mutually exclusive commands:
    # It's either Mongo or our CSV files.
    datasource_subparsers = parser.add_subparsers(dest="datasource")

    mongo_parser = datasource_subparsers.add_parser("mongo")
    mongo_parser.add_argument('--dbhost', 
        help='Address of MongoDB server', default="127.0.0.1")
    mongo_parser.add_argument('--dbport',
        help='Port of MongoDB server', type=int, default=27017)
    mongo_parser.add_argument('--dbname', '-n',
        help='Database name', type=str, required=True)
    mongo_parser.add_argument('--username',
        help='Database user', default=None)
    mongo_parser.add_argument('--password',
        help='Password for the user', default=None)
    mongo_parser.add_argument('--checkincoll', '-c',
        help='Collection name of venue data', default="checkins")
    mongo_parser.add_argument('--venuecoll', '-v',
        help='Collection name of venue data', default="venues")
    mongo_parser.add_argument('--venue_threshold', '-t', type=int, 
        help='Keep only venues with that number of checkins', default=0)
    mongo_parser.add_argument('--query', '-q', 
        help='MongoDB query to filter venues that will be loaded',
        default=None)
    mongo_parser.add_argument('--city', '-y', help='City to train on')

    # TODO remove this parser
    file_parser = datasource_subparsers.add_parser("file")
    file_parser.add_argument('--datafile', '-d',
        help='Filename for data points.')

    # TODO remove this parser
    file_adv_parser = datasource_subparsers.add_parser("file_advanced")
    file_adv_parser.add_argument('--datafile', '-d',
        help='Filename for data points.')

    parser.add_argument('-k_min', type=int, default=1,
        help = 'Number of topics to look for.')
    parser.add_argument('-k_step', type=int, default=1,
        help = 'Step in increasing k.')
    parser.add_argument('-k_max', type=int,
        help = 'Max number of topics to look for.', default=1)
    parser.add_argument('-n_components', type=int,
        help = 'Max number of superusers to keep after SVD." \
            " If not given, SVD is disabled.', default=None)
    parser.add_argument('-lambdas', type=_get_lambdas,
        help = 'List of lambdas passed as space separated values',
        default=[1.0])
    parser.add_argument('--iter', '-r', type=int, default=50,
        help = 'Number of iterations.')
    parser.add_argument('--rel_change', '-rc', type=float, default=0.001,
        help = 'Relative change in likelihood.')
    parser.add_argument('--step', '-s', type=int, default=1,
        help = 'Iterations step.')
    parser.add_argument('--prefix', '-p', help = 'output filename')
    parser.add_argument('--external', '-e', help = 'external topic provider')
    parser.add_argument('--plot', action='store_true',
        help = "Plot data points")
    parser.add_argument('--trackparams', action='store_true',
        help = "Keep an instance of some parameters at every step. "
            "Uses more memory, good for debugging. Almost useless otherwise.")
    parser.add_argument('--save', action='store_true',
        help = 'saves the model to a file if true')
    parser.add_argument('--centers', action='store_true',
        help = "Provide geo distribution")
    parser.add_argument('--runs', type=int, default=1,
        help = "Number of different runs - useful with random initialization")
    parser.add_argument('-xc', type=float, nargs='*',
        help = 'centers in x dimension')
    parser.add_argument('-yc', type=float, nargs='*',
        help = 'centers in y dimension')
    parser.add_argument('-covar', help = 'list of k*3 covariance values')
    parser.add_argument('-verbose', type=int, default=1,
        help = "Verbosity level 0-2, higher is more verbose.")

    return parser.parse_args(), parser


def main():
    import persistent as p
    args, parser = parse_args()

    if args.datasource == "mongo":
        # Get current time to use it as a filename for output files
        filename_prefix = datetime.today().strftime("%d-%m-%Y-%H.%M.%S")
        if args.city:
            external = args.external or str(args.k_min)
            city = args.city
            filename_prefix = '_'.join([city, external, str(args.n_components)])
            filename_prefix = 'comparisons/' + filename_prefix
            args.query = '{{"bboxCity": "{}"}}'.format(args.city)

        # connect to mongo, load and standardize data
        db = get_mongo_database_with_auth(args.dbhost, args.dbport, args.dbname,
            args.username, args.password)

        # TODO: Get this from command line
        venue_extractors = [io.venue_primary_category_extractor]
        checkin_extractors = [io.checkin_time_extractor_hard,
                        io.checkin_user_extractor, io.checkin_day_extractor]

        data, scaler = io.load_data_mongo(db[args.venuecoll],
            db[args.checkincoll], args.query, venue_extractors,
            checkin_extractors, filename_prefix, args.n_components,
            args.venue_threshold)
        
    elif args.datasource == "file":
        # load data from a CSV file
        data, scaler = io.load_data_csv(args.datafile)  # 1 x N
    elif args.datasource == "file_advanced":
        # load data from a CSV file
        data, scaler = io.load_data_csv_advanced(args.datafile)  # 1 x N
    else:
        parser.print_help(file=sys.stderr)
        sys.exit(0)

    # Split into train and test
    train, test = io.split_train_test_with_common_vocabulary(data,
        test_size=0.2)

    print("Loaded {0} ({1} train, {2} test) data points.".format(
        data["coordinates"].shape[0], train["coordinates"].shape[0],
        test["coordinates"].shape[0]), file=sys.stderr)

    # set centers of topics
    initial_topic_centers = None
    initial_topic_covar = None
    if args.external:
        initial_topic_centers, initial_topic_covar = \
            p.load_var('comparisons/{}_{}.preset'.format(city, args.external))

    # Run EM n times
    best_train_likelihood = -1 * np.inf
    best_test_likelihood = -1 * np.inf
    best_k = None
    best_lambda = None
    best_model = None

    lambda_list = args.lambdas
    k_list = range(args.k_min, 1 + args.k_max, args.k_step)
    train_likelihood_across_k = -np.inf * np.ones((len(lambda_list), len(k_list)))
    test_likelihood_across_k = -np.inf * np.ones((len(lambda_list), len(k_list)))

    track_params = args.trackparams

    if args.plot:
        likelihood_fig = plt.figure()

    if initial_topic_centers is not None:
        k_list = [len(initial_topic_centers)]

    for lidx, Lambda in enumerate(lambda_list):

        for kidx, num_topics in enumerate(k_list):
            print("\n====== lambda = {0}, k = {1} ======\n\n".format(Lambda,
                 num_topics), file=sys.stderr)

            # n_jobs=-2 -> Leave only one logical core unused
            models = Parallel(n_jobs=-2, backend="threading")(
                delayed(run)(train, Lambda, num_topics, i, args,
                             initial_topic_centers, initial_topic_covar,
                             track_params) for i in
                range(args.runs))

            # TODO remove this or add command line option
            # Swap to this for serial processing
            # models = [run(train, Lambda, num_topics, i, args,
            #               initial_topic_centers, initial_topic_covar,
            #               track_params)
            #           for i in range(args.runs)]

            best_model_index_for_parameters = np.argmax(
                [model.latest_statistics.likelihood for model in models])

            best_model_in_k = models[best_model_index_for_parameters]

            train_likelihood_across_k[lidx][kidx] = \
                best_model_in_k.latest_statistics.likelihood
            test_likelihood_for_parameters = \
                best_model_in_k.predict_log_probs(test)
            test_likelihood_across_k[lidx][kidx] = \
                test_likelihood_for_parameters

            if test_likelihood_for_parameters > best_test_likelihood:
                best_train_likelihood = \
                    best_model_in_k.latest_statistics.likelihood
                best_test_likelihood = test_likelihood_for_parameters

                best_k = num_topics
                best_model = best_model_in_k

            gc.collect()

    print("Results of the best model:\n", file=sys.stderr)
    print_stuff(data["unigrams"], best_model.get_params())
    print("Best train likelihood: {0}\n".format(best_train_likelihood),
        file=sys.stderr)
    print("Best test likelihood: {0}\n".format(best_test_likelihood),
        file=sys.stderr)

    print("PROB VS VARIATIONAL")
    print(best_model.predict_log_probs(test))
    print(best_model.predict_log_probs_variational(test))

    if args.save:
        query = "synthetic"
        try:
            if args.query:
                query = args.query
        except:
            pass

        io.save_model(best_model, scaler, query, data["unigrams"], filename_prefix)

    # PLOTS
    if args.plot:
        x_plot_num = 1
        y_plot_num = 1

        if len(k_list) > 1:
            plotting.plot_across_lambda_and_k(lambda_list, k_list,
                train_likelihood_across_k, test_likelihood_across_k,
                train["coordinates"].shape[0], data["coordinates"].shape[0],
                filename_prefix, save=True)

        if track_params:
            best_statistics_history = best_model.get_statistics_history()

            # Plot likelihood graph
            likelihood_plot = plotting.plot_statistics_history(likelihood_fig,
               best_statistics_history, x_plot_num, y_plot_num, 0)

            # Put the legend on the last likelihood plot
            likelihood_fig.legend(list(likelihood_plot),
                ['Likelihood', 'User likelihood', 'Location likelihood',
                'Topic likelihood', 'Sigma likelihood', 'Phi entropy'])

            # TODO add command line option
            #  Uncomment to enable animated plots
            # phi_animated_fig, phi_animated_ax = plt.subplots(1, 1)
            # anim = plotting.plot_phi_animated(phi_animated_fig, 
                # phi_animated_ax, train, best_statistics_history)

            # anim.save('anim.gif', writer='imagemagick', fps=10, dpi=300)

        plt.show()


def run(data, Lambda, num_topics, num_initialization, args,
        initial_topic_centers, initial_topic_covar, track_params):

    print("\n=== [k = {0}] INITIALIZATION NUMBER {1} ===\n\n".format(num_topics,
        num_initialization))

    # TODO add explanation in comment
    seed = int(time.time() * 1e6 * (num_initialization + 1)) % int(time.time())
    np.random.seed(seed)

    # Initialize model
    model = Model(Lambda, num_topics, args.iter, args.rel_change,
        initial_topic_centers, initial_topic_covar,
        track_params=track_params, verbose=args.verbose)

    model.fit(data)

    return model


if __name__ == '__main__':
    main()
