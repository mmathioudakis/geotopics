import codecs
import json
import ssl
# install with pip install git+https://github.com/mLewisLogic/foursquare.git
import foursquare

VIDS = ["4b8deafdf964a5203d1333e3", "3fd66200f964a52000e81ee3", "52f2286011d267020943ae84",
        "423a1a00f964a5202e201fe3", "4a27077ff964a520f78d1fe3", "4a338cb0f964a520359b1fe3",
        "4a8759e4f964a5200b0420e3", "4be1c2b0ae55a593c0765b62", "4c1dce96b4e62d7f3c63dd93",
        "4d039583a26854819ea0b2bd", "4d236ae9b69c6dcb6b368b95", "4df265bb45dd4e26933ca63a"]
# get your credential here https://foursquare.com/developers/apps
YOUR_CLIENT_ID = ''
YOUR_CLIENT_SECRET = ''

client = foursquare.Foursquare(client_id=YOUR_CLIENT_ID, client_secret=YOUR_CLIENT_SECRET)
venues_info = []

for i, vid in enumerate(VIDS):
    # add that id to the next batch API call
    client.venues(vid, multi=True)
    is_chunk_full = (i+1) % foursquare.MAX_MULTI_REQUESTS == 0
    is_last_chunk = i == len(VIDS)-1

    if is_chunk_full or is_last_chunk:
        try:
            # perform the call
            answers = list(client.multi())
        except foursquare.ParamError as e:
            print('invalid request:' + str(e))
        except (foursquare.ServerError, ssl.SSLError) as e:
            print(e)
            # you may want to sleep for sometimes here
        for venue in answers:
            if isinstance(venue, dict) and 'venue' in venue:
                venues_info.append(venue['venue'])

# when VIDS is large, it's a better idea to save the results rugularly instead
# of waiting the end of the script
with codecs.open('venues_utf8.json', 'a', 'utf8') as f:
    json.dump(venues_info, f, sort_keys=True, indent=2, ensure_ascii=False)
# or if you want to save everything in ASCII
# with open('venues_info.json', 'a') as f:
#     json.dump(venues_info[0], f, sort_keys=True, indent=2)
