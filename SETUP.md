
The following instructions have been tried on OSX 10.11.5.
Setup on other platforms should be quite similar.

The technical details are described in this [pre-print article](http://arxiv.org/abs/1604.04649) on arXiv.

# Requirements

Below we list the software required to run the code, along with the version for which it was tested.

* python 3.5
* mongodb 3.2.3 [download the community version](https://www.mongodb.com/download-center?jmp=nav#community)
* anakonda 4.0.8 for python 3.5 [download](https://www.continuum.io/downloads)
* other python libraries: delorean 0.6.0, persistent 4.2.1, mapbox 0.9.0
These libraries are installed with the following command.

> pip install delorean persistent mapbox

If you do not have pip, you can install it using these [official instructions](https://pip.pypa.io/en/stable/installing/).



## Data

We provide a sample dataset with Foursquare data from Florence (Firenze).
The two data files are data/firenze_checkins.json and data/firenze_venues.json with checkins and venues from that city.

### Data schema

The checkins in the data have the following schema,
```
{
	"_id" : "558ae31a498e73ad37c4ad1e",
	"foursquareURL" : "https://foursquare.com/vincentjuggler/checkin/558ae31a498e73ad37c4ad1e",
	"venueId" : "4c7ce6167a856dcb9651e3a7",
	"timestamp" : 1435165466,
	"foursquareUserId" : "40232529",
	"timeZoneOffset" : 120,
	"swarmURL" : "https://www.swarmapp.com/c/cM24svI46Ow"
},
```
where
* '\_id' is a unique identifier for the checkin,
* 'foursquareURL' is the public Foursquare URL for the checkin,
* 'venueId' is a unique identifier for the venue where the checkin was performed,
* 'timestamp' is the posix timestamp of the checkin,
* 'foursquareUserId' is a unique identifier for the user,
* 'timeZoneOffset' the number of minutes offset from Greenwich time,
* 'swarmULR' is the public Swarm URL for the checkin.

The venues in the data have the following schema,
```
{
	"_id" : "4c7ce6167a856dcb9651e3a7",
	"numUsers" : 271,
	"state" : "Toscana",
	"gadmCity" : "Florence",
	"foursquareURL" : "https://foursquare.com/v/giardini-di-lungarno-del-tempio/4c7ce6167a856dcb9651e3a7",
	"coordinates" : [
		11.272625494550192,
		43.76587635749327
	],
	"city" : "Firenze",
	"country" : "Italia",
	"numTips" : 2,
	"numCheckins" : 546,
	"name" : "Giardini Di Lungarno Del Tempio",
	"categories" : [
		{
			"primary" : true,
			"id" : "4bf58dd8d48988d162941735",
			"name" : "Other Great Outdoors"
		}
	],
	"postalCode" : "50121"
},
```
where
* '\_id' is the unique identifier for the venue (referenced from `checkins`),
* 'coordinates' are the latitude and longitude of the venue location,
* 'name' is the name of the venue,
* 'categories' are descriptors for the venue (i.e., what kind of venue this is, e.g., restaurant, café, etc).


### Load data into mongodb

With mongodb running, import the data into a MongoDB database with the following two commands.

> mongoimport -d firenze_db -c checkins --file data/firenze_checkins.json --upsert

> mongoimport -d firenze_db -c venues --file data/firenze_venues.json --upsert

The data are stored in a database named 'firenze_db' and in two collections, 'checkins' and 'venues'.

### Download other data

**TODO** -- if needed.


## Training

To train a model on the data, issue a command like the following.
> python3.5 -W ignore train.py -k_min 1 -k_step 1 -k_max 15 --runs 10 --iter 100 \
>    --save mongo --dbname firenze_db --query '{"city":"Firenze"}'

The specified parameters have the following meaning.
* '-W ignore': do not print warnings. If not included, several numberical warnings are printed, which are however dealt with in the code.
* '-k_min', '-k_max', '-k_step': the minimum, maximum, and increment of the number $k$ of regions to be learned by the model.
* '-runs': the number of random parameter initializations tried for each value of $k$,
* '-iter': the number of EM iterations,
* '--save': directive to save the results in a file
* '--dbname': the name of the database that stores the Foursquare data
* '--query': the subset of the checkins on which to run the model.


The above outputs files with filenames of the following form,
* [date].desc: a summary **description** of the results,
* [date].mdl: the learned **model**,
* [date].scaler: the serialization of a 'scikit-learn' Scaler object, to scale the learned geographic regions back to their original scale (the *model* saves them in normalized form),
* [date].unigrams: the values of the various features, as encountered in the dataset.

where [date] is the timestamp when the program terminated.

## Loading the results

For this example, we have renamed all the result files so as to have 'firenze' as prefix. The filenames are:

```
firenze.desc,
firenze.mdl,
firenze.scaler,
firenze.unigrams.
```

The python script below shows how one can load and process the results.

***

```python
import pickle

unigrams = pickle.load(open("data/firenze.unigrams", "rb"))
print("The data contain the following features: {}.".format(", ".join(unigrams.keys())))

some_categories = unigrams['primCategory'][:5]
print("Some categories of venues are: {}.".format(", ".join(some_categories)))

weekdays = unigrams['dayOfWeek']
print("The days of week are stored in this order: {}.".format(", ".join(weekdays)))

model = pickle.load(open("data/firenze.mdl", "rb"))
print("The trained model contains {} regions.".format(model.num_topics))

region_0_day_prob = model.beta_arrays['dayOfWeek'][0]
print("For the first region, the probabilities of the various weekdays are:")
print(", ".join(": ".join([day , str(region_0_day_prob[i])]) for i, day in enumerate(weekdays)))

region_0_center = model.topic_centers[0]
region_0_covar = model.topic_covar[0]
print("In normalized scale, the first region is centered at {}".format(region_0_center))
print("In normalized scale, the covariance matrix for its gaussian is\n{}.".format(region_0_covar))
```
## Visualizing the results

To visualize the results, see the [Jupyter](http://jupyter.org/) notebook [visualize.ipynb](http://nbviewer.jupyter.org/github/mmathioudakis/geotopics/blob/master/visualize.ipynb).


