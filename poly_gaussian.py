import json
import numpy as np
from shapely.geometry import mapping, Polygon
import persistent as p


# from https://github.com/mitodl/template-mit-demo/blob/master/python_lib/functions.py#L48
def arccot(val):
    if np.real(val) < 0:
        return -np.pi / 2 - np.arctan(val)
    else:
        return np.pi / 2 - np.arctan(val)


def gaussian_to_poly(center, covariance, city, name, scaler, stddev=1.4,
                     resolution=50):
    """Take a `center` (x, y) and a `covariance` matrix in normalized
    coordinates from `city` and return a GeoJSON polygon called `name` in
    latitude, longitude coordinates"""
    x0, y0 = center
    r, t = stddev, np.linspace(0, 2*np.pi, resolution)
    circle = np.array([r*np.cos(t), r*np.sin(t)])
    L, R = np.linalg.eig(covariance)
    S = np.sqrt(np.diag(L))
    T = R.dot(S)
    ellipse = T.dot(circle)
    ellipse[0, :] += x0
    ellipse[1, :] += y0
    geometry = mapping(Polygon(scaler.inverse_transform(ellipse.T)))
    return {'type': 'Feature', 'geometry': geometry,
            'properties': {'city': city, 'name': name, 'fill': '#22aaff'}}


def poly_to_gaussian(points):
    """Given `points` of the border of a polygon in local space, return the
    center and covariance matrix of the smallest area enclosing ellipse"""
    import subprocess as sp
    np.savetxt('__poly', points, fmt='%.10f %.10f')
    params = sp.check_output('./ellipse', shell=True)
    a, b, c, d, f, g = [float(_) for _ in params.decode('utf8').split(' ')]
    if b*b-a*c < 1e-8:
        return tuple(points.mean(0)), np.cov(points.T)
    x0 = (c*d-b*f)/(b*b-a*c)
    y0 = (a*f-b*d)/(b*b-a*c)
    numerator = 2*(a*f*f+c*d*d+g*b*b-2*b*d*f-a*c*g)
    denom_sqrt = np.sqrt(4*b*b+(a-c)**2)
    _a = np.sqrt(numerator/((b*b-a*c)*(denom_sqrt - (a+c))))
    _b = np.sqrt(numerator/((b*b-a*c)*(-denom_sqrt - (a+c))))
    det = abs(np.linalg.det([[a, b, d], [b, c, f], [d, f, g]]))
    if det < 1e-6 or np.any(np.isnan([_a, _b])):
        # screw it, let's do something less accurate but more straightforward
        return tuple(points.mean(0)), np.cov(points.T)
    if b < 1e-5:
        theta = 0 if a < c else np.pi/2
    else:
        theta = .5*arccot((a-c)/(2*b))
        if a > c:
            theta += np.pi/2
    R = np.array([[np.cos(theta), -np.sin(theta)], [np.sin(theta), np.cos(theta)]])
    S = np.diag([_a, _b])
    T = R.dot(S)
    return (x0, y0), .5*T.dot(T.T)


if __name__ == '__main__':
    city, name = "paris", "test"
    model_prefix_1 = "sandbox/{}".format(city)
    m1 = p.load_var(model_prefix_1 + ".mdl")
    model_parameters_1 = m1.get_params()
    scaler_1 = p.load(model_prefix_1 + ".scaler")
    centers_1 = model_parameters_1.topic_centers
    covars_1 = model_parameters_1.topic_covar
    for i, (center, cov) in enumerate(zip(centers_1, covars_1)):
        json_poly = gaussian_to_poly(center, cov, city, "test", scaler_1,
                                     stddev=1.41, resolution=17)
        points = scaler_1.transform(np.array(json_poly['geometry']['coordinates'][0]))
        points += 0.0002*np.random.randn(*points.shape)
        print('{}: original (center & covariance)\n{}\n{}'.format(i, center, cov))
        ncenter, ncov = poly_to_gaussian(points)
        print('recovered (center & covariance)\n{}\n{}'.format(ncenter, ncov))
    print(json.dumps(json_poly))
    print('paste that on on http://geojsonlint.com/')
