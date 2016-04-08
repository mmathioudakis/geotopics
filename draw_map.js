var urlParams;
(window.onpopstate = function () {
    var match,
    pl     = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query  = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
})();
var max_region = urlParams.max_region ? parseInt(urlParams.max_region) : 30;

// loading minified
// see http://minifiedjs.com/docs/quickstart.html
var MINI = require('minified');
var _ = MINI._, $ = MINI.$, $$ = MINI.$$, EE = MINI.EE, HTML = MINI.HTML;

var mainCats = ['Arts &\n Entertainment', 'College & University', 'Food',
  'Nightlife Spot', 'Outdoors & Recreation', 'Shop & Service',
  'Professional & Other Places', 'Residence', 'Travel & Transport'
];
var timeOfDay = ['morning', 'noon', 'afternoon', 'evening', 'night',
  'late night'
];
var allRegions = [];
var zoomLevel = null;
var regions_layer = null;
var venues_layer = null;
var control_layer = null;
var lscale = null;
var overlay_info = {city: null, url: null, layer: null};
var map = null;
var radius_factor = d3.scale.threshold().domain([0, 10, 13, 15, 17]).range([0, .1, .3, .6, .8, 1.2]);

function create_map(center, zoom_level) {
  L.mapbox.accessToken =
    'pk.eyJ1IjoiZGF1cmVnIiwiYSI6ImNpbGF4aTkwZTAwM3l2d2x6bGNsd3JhOWkifQ.ga2zNgyopN05cNJ1tbviWQ';
  return L.mapbox.map('map', 'mapbox.light', {maxZoom: 19});
}

function set_x_axis(svg, x, y, axis) {
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + x + "," + y + ")")
    .call(axis)
    .selectAll("text")
    .attr("y", 0)
    .attr("x", -10)
    .attr("dy", ".4rem")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");
}

function draw_bars(svg, full_data, className, y_pos, h, margin, xscale, labels,
  colors, rel_data, upper) {
  var nb_clicks = 0;
  var data = [full_data, rel_data],
    change_prompt = ['Relative', 'Absolute'],
    label_format = ['.1%', '.1f'];
  var dataset = data[nb_clicks];
  var bars = svg.selectAll("." + className)
    .data(dataset)
    .enter()
    .append("g")
    .attr('class', className);

  var horiz_space = upper ? [h / 2 - margin.b, margin.t] : [h - margin.b, h / 2 + margin.t]
  var yscale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .rangeRound(horiz_space)
    .nice();
  bars.append("rect")
    .attr("x", function (d, i) {
      return xscale(labels[i]);
    })
    .attr("y", function (d) {
      return yscale(d);
    })
    .attr("width", xscale.rangeBand())
    .attr("fill", function (d, i) {
      return colors(i);
    })
    .attr("height", function (d) {
      return yscale(0) - yscale(d);
    });
  bars.append("text").text(function (d) {
      return d3.format(label_format[nb_clicks])(d)
    })
    .attr("x", function (d, i) {
      return xscale(labels[i]) + xscale.rangeBand() / 2;
    })
    // TODO put text below with appropriate color http://stackoverflow.com/a/3943023
    .attr("y", function (d) {
      return yscale(d) - 5;
    })
    .attr("text-anchor", "middle");

  var yAxis = d3.svg.axis()
    .scale(yscale)
    .orient("left")
    .ticks(5);
  svg.append("g")
    .attr("class", "axis")
    .attr("id", className)
    .attr("transform", "translate(" + (y_pos + margin.l / 2) + "," + "0" + ")")
    .call(yAxis);
  // TODO instead of appending to SVG, we could add the select element from
  // there and still link to that change function
  svg.append("text")
    .attr("x", y_pos + 2 * margin.l)
    .attr('y', horiz_space[1])
    .attr('id', 'toggle_' + className)
    .text(change_prompt[nb_clicks])
    .on('click', function () {
      nb_clicks = (nb_clicks + 1) % 2;
      dataset = data[nb_clicks]
      yscale = d3.scale.linear()
        .domain([0, d3.max(dataset)])
        .rangeRound(horiz_space)
        .nice();
      yAxis = d3.svg.axis().scale(yscale).orient("left").ticks(5);
      svg.selectAll('.' + className + ' rect')
        .data(dataset)
        .transition()
        .attr("y", function (d) {
          return yscale(d);
        })
        .attr("height", function (d) {
          return yscale(0) - yscale(d);
        });
      svg.selectAll('.' + className + ' text')
        .data(dataset)
        .transition()
        .attr("y", function (d) {
          return yscale(d) - 5;
        })
        .text(function (d) {
          return d3.format(label_format[nb_clicks])(d)
        });
      svg.select('#' + className).transition().call(yAxis);
      svg.select('#toggle_' + className).transition().text(change_prompt[
        nb_clicks]);
    });
}

function remove_region() {
  var svg = d3.select('#bars');
  svg.selectAll("*").remove();
}

function display_region(feature) {
  var name = feature.properties.name;
  // $('#region-title').fill(name);

  var svg = d3.select('#bars');
  svg.selectAll("*").remove();
  var bounding_rect = svg.node().getBoundingClientRect();
  var margin = {
      t: 30,
      r: 30,
      b: 100,
      l: 60
    },
    w = bounding_rect.width - margin.l - margin.r,
    h = bounding_rect.height - margin.t - margin.b;
  var height = bounding_rect.height;

  var colors_cat = d3.scale.category10();
  var xScale_cat = d3.scale.ordinal()
    .domain(mainCats)
    .rangeRoundBands([margin.l, bounding_rect.width - margin.r], 0.15, 0.2);
  var xAxis_cat = d3.svg.axis()
    .scale(xScale_cat)
    .orient("bottom");
  // https://github.com/mbostock/d3/blob/master/lib/colorbrewer/colorbrewer.js
  var colors_time = function (i) {
    return ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#d95f0e", "#993404"][i];
  }
  var xScale_time = d3.scale.ordinal()
    .domain(timeOfDay)
    .rangeRoundBands([margin.l, bounding_rect.width - margin.r], 0.15, 0.2);
  var xAxis_time = d3.svg.axis()
    .scale(xScale_time)
    .orient("bottom");
  set_x_axis(svg, 0, height / 2 - margin.b + 5, xAxis_cat);
  set_x_axis(svg, 0, height - margin.b + 5, xAxis_time);

  draw_bars(svg, feature.properties.category_distrib, 'cat_bar', 20, height,
    margin, xScale_cat, mainCats, colors_cat, feature.properties.category_more, true
  );
  draw_bars(svg, feature.properties.time_distrib, 'time_bar', 20, height,
    margin, xScale_time, timeOfDay, colors_time, feature.properties.time_more, false
  );
  // TODO: display two sentences highlighting most frequent category and timeOfDay?
}

function region_in(index) {
  var poly = allRegions[index];
  var Lpoly = poly._layers[Object.keys(poly._layers)[0]];
  Lpoly.bringToFront();
  Lpoly.setStyle({
    fillColor: "#47b8e0",
    opacity: 1.0
  });
}

function region_out(index) {
  var poly = allRegions[index];
  var Lpoly = poly._layers[Object.keys(poly._layers)[0]];
  Lpoly.bringToBack();
  Lpoly.setStyle(POLY_STYLE);
}
var POLY_STYLE = {
  color: '#222',
  fillColor: 'rgba(255,201,82, 0.5)',
  weight: 2,
  opacity: 0.7
};

function change_city() {
  var svg = d3.select('#bars');
  svg.selectAll("*").remove();
  d3.select('#neighborhoods').selectAll("*").remove();
  allRegions.length = 0;
  map.removeControl(control_layer);
  control_layer = null;
  venues_layer = null;
  regions_layer = null;
  show_regions(document.getElementById("city").value);
}
function onEachFeature(feature, layer) {
  layer.bindLabel(feature.properties.title);
}
function styleMe(feature) {
  return {weight: 0, fillOpacity: 0.8, fillColor: feature.properties.fill};
}

function show_heatmap(city, cat_or_time, likely_or_distinct) {
  if (map === null) {map = create_map();}
  var raw_bounds = CITY_BOUNDS[city];
  var southWest = L.latLng(raw_bounds[0][1], raw_bounds[0][0]),
    northEast = L.latLng(raw_bounds[1][1], raw_bounds[1][0]),
    imageBounds = L.latLngBounds(southWest, northEast);
  map.fitBounds(imageBounds);
  // TODO use consistent keywords for features
  var feature_str = (cat_or_time == 'cat'? 'primCategory': (cat_or_time == 'time'? 'timeOfDay': 'dayOfWeek'))
  var score_type = (likely_or_distinct == 'likely'? 'likely': 'distinctive')
  var infix =  city + '_' + feature_str + '_' + score_type;
  var imageURL = 'overlays/' + infix + '_main.png';
  if (overlay_info.city === null) {
    overlay_info.city = city;
    overlay_info.url = imageURL;
    overlay_info.layer = L.imageOverlay(imageURL, imageBounds);
    map.addLayer(overlay_info.layer);
  }
  if (overlay_info.city !== null && overlay_info.city !== city) {
    map.removeLayer(overlay_info.layer);
    overlay_info.layer = L.imageOverlay(imageURL, imageBounds);
    map.addLayer(overlay_info.layer);
  }
  if (overlay_info.url !== null && overlay_info.url !== imageURL) {
    overlay_info.layer.setUrl(imageURL);
  }
  $.request('get', 'overlays/legends/'+infix+'_main.json', {})
    .then(display_legend);
}
function display_legend(result) {
  var raw = $.parseJSON(result);
  var data = [];
  for (var cat in raw) {
    data.push({"name": cat, "color": d3.rgb(raw[cat][0]*255, raw[cat][1]*255, raw[cat][2]*255).toString()});
  }
  d3.select('#legend').selectAll("li").remove();
  var legend = d3.select('#legend');
  var li = legend.selectAll('li')
    .data(data)
    .enter()
    .append('li');
  li.append('div')
    .style("background-color", function (d) {return d.color;});
  li.append('span').text(function (d) {return d.name;});
}

function show_regions(city) {
  if (map === null) {
    map = create_map();
    map.on('zoomend', function zoomEnded() {zoomLevel = map.getZoom();});
  }
  $.request('get', 'regions/'+city+'_distrib.json', {})
    .then(function success(result) {
      var regions = $.parseJSON(result);
      var list_elems = new Array();
      list_elems.push(EE('option', {}, "--None--").on('click', remove_region))
      var BOUNDS = null;
      var i = 0;
      for (let feature of regions.features) {
        var name = feature.properties.name;
        var poly = L.geoJson(feature, {
          style: POLY_STYLE
        });
        allRegions.push(poly);
        if (BOUNDS) {
          BOUNDS.extend(poly.getBounds());
        } else {
          BOUNDS = poly.getBounds();
        }
        feature.poly_index = i;
        list_elems.push(EE('option', {}, name).on('click', display_region, [feature])
          .on('mouseover', region_in, [i])
          .on('mouseout', region_out, [i]))
        i = i + 1;
        if (i > max_region) {
          break;
        }
      }
      regions_layer = L.layerGroup(allRegions);
      $('#neighborhoods').fill(EE('select', {"id": "neighborhoods_select"}, list_elems));
      map.addLayer(regions_layer);
      map.fitBounds(BOUNDS);
      map.setMaxBounds(BOUNDS.pad(.3));
      zoomLevel = map.getZoom();
      maybe_add_control();
    });
  show_venues(city);
}
function maybe_add_control() {
  if (venues_layer !== null && regions_layer !== null && control_layer === null) {
    control_layer = L.control.layers(null, {"Regions": regions_layer, "Venues": venues_layer});
    map.addControl(control_layer);
  }
}
function show_venues(city) {
  $.request('get', 'regions/'+city+'_venues_compact.json', {})
    .then(create_venues_canvas);
}

// Plotting venues
function create_venues_canvas(result) {
    var venues = $.parseJSON(result).venues;
    var points = [];
    var max_visits = -1;
    _.each(venues, function add_venue(venue) {
        if (venue[2] < 5) {
          return;
        }
        if (venue[2] > max_visits) {
          max_visits = venue[2];
        }
        var d = {"slat": venue[1], "slon": venue[0], "count": venue[2]};
        points.push(d);
    });
    lscale = d3.scale.log().base(Math.E).domain([5, max_visits]).range([1, 3]).nice();
    venues_layer = new MyLayer();
    venues_layer.setData(points);
    map.addLayer(venues_layer);
    maybe_add_control();
}
var MyLayer = L.FullCanvas.extend({
    drawSource: function(point, ctx, data) {
        ctx.beginPath();
        var radius = lscale(data.count);
        var color = "rgba(33, 33, 33, .82)";
        if (radius > 2) {
          color = "rgba(229, 57, 53, 0.82)"
        }
        ctx.fillStyle = color;
        if (radius*radius_factor(zoomLevel) >= 0.6) {
          ctx.arc(point.x, point.y , 1.5*radius*radius_factor(zoomLevel), 0, 2 * Math.PI, true);
        }
        ctx.fill();
    }
});
