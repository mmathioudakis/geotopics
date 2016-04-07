bounds={}
for city in list_of_cities:
    scaler = p.load_var(folder+city+'.scaler')
    _,_,x,y=scatter_utils.create_probability_grid(-5.0, 5.0, -5.0, 5.0, scaler, prob_granularity=0.02)
    bounds[city] = [[x.min(), y.min()] ,[x.max(),  y.max()]]

class PrettyFloat(float):
    def __repr__(self):
        return '%.5f' % self
def pretty_floats(obj):
    if isinstance(obj, float):
        return PrettyFloat(obj)
    elif isinstance(obj, dict):
        return dict((k, pretty_floats(v)) for k, v in obj.items())
    elif isinstance(obj, (list, tuple)):
        return list(map(pretty_floats, obj))
    return obj

a = pretty_floats(bounds)
with open('city_bounds.js', 'w') as f:
    f.write('var CITY_BOUNDS = {};'.format(str(a).replace("'", '"').replace(', ', ',').replace(': ', ':').replace('],"', '],\n"')))
