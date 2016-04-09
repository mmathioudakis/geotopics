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
// TODO is 18 a good choice?
var max_region = urlParams.max_region ? parseInt(urlParams.max_region) : 18;

// loading minified
// see http://minifiedjs.com/docs/quickstart.html
var MINI = require('minified');
var _ = MINI._, $ = MINI.$, $$ = MINI.$$, EE = MINI.EE, HTML = MINI.HTML;

//TODO[mobile] shorter category name?
var mainCats = ['Arts & Entertainment', 'College & University', 'Food',
  'Nightlife Spot', 'Outdoors & Recreation', 'Shop & Service',
  'Professional & Other Places', 'Residence', 'Travel & Transport'
];
var timeOfDay = ['morning', 'noon', 'afternoon', 'evening', 'night',
  'late night'
];
var allRegions = [];
var allFeatures = [];
var zoomLevel = null;
var regions_layer = null;
var venues_layer = null;
var heatmap_layer = null;
var control_layer = null;
var lscale = null;
// TODO check overlay_info lifecycle (should it be reset sometimes?)
var overlay_info = {city: null, url: null, layer: null};
var map = null;
var radius_factor = d3.scale.threshold().domain([0, 10, 13, 15, 17]).range([0, .1, .3, .6, .8, 1.2]);
var initial_city_markers = null;
var popups = {};

function create_map() {
  L.mapbox.accessToken =
    'pk.eyJ1IjoiZGF1cmVnIiwiYSI6ImNpbGF4aTkwZTAwM3l2d2x6bGNsd3JhOWkifQ.ga2zNgyopN05cNJ1tbviWQ';
  // TODO how come maxZoom option isn't honored?
  map = L.mapbox.map('map', 'mapbox.light', {maxZoom: 19});
  //TODO do we need a scale?
  // L.control.scale().addTo(map);
  map.on('zoomend', function zoomEnded() {zoomLevel = map.getZoom();});
  control_layer = L.control.layers(null, null);
}

function init() {
  create_map();
  var minx = 200, miny = 200, maxx = -200, maxy = -200;
  var markers = [];
  var options = [EE('option', {value: null, selected: true}, 'some city')];
  for (var city in CITY_BOUNDS) {
    var name = CITY_BOUNDS[city][2];
    var x = (CITY_BOUNDS[city][0][1] + CITY_BOUNDS[city][1][1])/2;
    var y = (CITY_BOUNDS[city][0][0] + CITY_BOUNDS[city][1][0])/2;
    if (x < minx) {minx = x;}
    if (y < miny) {miny = y;}
    if (x > maxx) {maxx = x;}
    if (y > maxy) {maxy = y;}
    var marker = L.marker([x, y], {keyboard: false, title: name});
    var popup = L.popup({autoPan: false}).setLatLng([x, y]).setContent('<h3 class="city">'+name+'</h3>');
    marker.bindPopup(popup);
    popups[city] = popup;
    var css_class = (MEANINGFUL.indexOf(city) === -1) ? "" : "meaningful";
    options.push(EE('option', {value: city, "@class": css_class}, name)
        .on('mouseover', function(e){popups[e.target.value].openOn(map);})
        .on('mouseout', function(e){map.closePopup(popups[e.target.value]);}));
    marker.city = city;
    marker.on('click', resize_map);
    markers.push(marker);
  }
  $('#city').fill(options);
  initial_city_markers = L.layerGroup(markers);
  initial_city_markers.addTo(map);
  map.fitBounds([[minx-2, miny-2], [maxx+2, maxy+2]], {maxZoom: 18});
}
function resize_map(e) {
  var chosen_city = e===null ? $('#city').get('value') : e.target.city;
  var raw = CITY_BOUNDS[chosen_city];
  $("#city").set({value: chosen_city});
  $('#main-left').set({$width: '55%'});
  $('#main-right').set({$display: 'block'});
  $('#map').set({$height: '80%'});
  map.invalidateSize();
  //TODO this leave the popups in place, maybe better to set them to null as well?
  map.removeLayer(initial_city_markers);
  map.fitBounds([[raw[0][1], raw[0][0]], [raw[1][1], raw[1][0]]], {maxZoom: 18});
  map.addControl(control_layer);
  change_city(chosen_city);
}

function set_x_axis(svg, x, y, axis) {
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + x + "," + y + ")")
    .call(axis)
    .selectAll("text")
    .attr("y", 0)
    .attr("x", -10)
    .attr("dy", 5)
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");
}

function draw_bars(svg, full_data, className, y_pos, h, margin, xscale, labels,
  colors, rel_data, upper) {
  var nb_clicks = 0;
  var data = [full_data, rel_data],
    change_prompt = ['Relative', 'Absolute'],
    label_format = ['.1%', '.2f'];
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
    .attr("x", function (d, i) { return xscale(labels[i]); })
    .attr("y", function (d) { return yscale(d); })
    .attr("width", xscale.rangeBand())
    .attr("fill", function (d, i) { return colors(i); })
    .attr("height", function (d) { return yscale(0) - yscale(d); });
  bars.append("text").text(function (d) { return d3.format(label_format[nb_clicks])(d) })
    .attr("x", function (d, i) { return xscale(labels[i]) + xscale.rangeBand() / 2; })
    // TODO put text below with appropriate color http://stackoverflow.com/a/3943023
    .attr("y", function (d) { return yscale(d) - 5; })
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
  // TODO instead of appending to SVG, we could add the select element from there and still link to that change function
  svg.append("text")
    .attr("x", y_pos)
    .attr('y', horiz_space[1]-margin.t/3)
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
        .attr("y", function (d) { return yscale(d); })
        .attr("height", function (d) { return yscale(0) - yscale(d); });
      svg.selectAll('.' + className + ' text')
        .data(dataset)
        .transition()
        .attr("y", function (d) { return yscale(d) - 5; })
        .text(function (d) { return d3.format(label_format[nb_clicks])(d) });
      svg.select('#' + className).transition().call(yAxis);
      svg.select('#toggle_' + className).transition().text(change_prompt[nb_clicks]);
    });
}

//TODO more stuff to clean here?
function remove_region() {
  var svg = d3.select('#bars');
  svg.selectAll("*").remove();
  $('#theta').fill('');
}

function display_region() {
  var index = parseInt($('#neighborhoods').get('value'));
  if (index === -1) {return remove_region();}
  var feature = allFeatures[index];
  var name = feature.properties.name;
  $('#theta').fill(_.format(', which accounts for {{w::0.00}}% of the city mass.',
        {w: 100*feature.properties.weight}));
  var svg = d3.select('#bars');
  svg.selectAll("*").remove();
  var bounding_rect = svg.node().getBoundingClientRect();
  //TODO[mobile] smaller vertical margins
  var margin = { t: 30, r: 30, b: 100, l: 60 },
    w = bounding_rect.width - margin.l - margin.r,
    h = bounding_rect.height - margin.t - margin.b;
  var height = bounding_rect.height;

  var colors_cat = function (i) {
    return ['#f44336', '#2196f3', '#8bc34a', '#9c27b0', '#ff9800', '#795548', '#ffeb3b', '#ff4081', '#1de9b6'][i];
  }
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
  // TODO: display two sentences highlighting most frequent category and timeOfDay? (no more space!)
}

function region_in(index) {
  var poly = allRegions[index];
  var Lpoly = poly._layers[Object.keys(poly._layers)[0]];
  Lpoly.bringToFront();
  Lpoly.setStyle({ fillColor: "#47b8e0", opacity: 1.0 });
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


//TODO more cleaning?
function change_city(city) {
  //TODO call remove_region?
  var svg = d3.select('#bars');
  svg.selectAll("*").remove();
  d3.select('#neighborhoods').selectAll("*").remove();
  allRegions.length = 0;
  allFeatures.length = 0;
  // TODO see what happen to control when we change city (everything get added twice, we need to fix that)
  // map.removeControl(control_layer);
  // control_layer = L.control.layers(null, null);
  venues_layer = null;
  heatmap_layer = null;
  regions_layer = null;
  show_three_layers(city);
}

function show_three_layers(city) {
  show_regions(city);
  show_venues(city);
  show_heatmap(city);
}

function update_overlay_url(main) {
  var query = $('#formui').values();
  var parts = query.feature.split('_');
  var cat_time_day = parts[0];
  var likely_or_distinct = parts[1];
  var feature_str = ({cat: 'primCategory', time: 'timeOfDay', day: 'dayOfWeek'})[cat_time_day];
  var score_type = (likely_or_distinct === 'likely' ? 'likely': 'distinctive');
  var city = $('#city').values().city;
  var prefix = 'overlays/';
  var infix =  city + '_' + feature_str + '_' + score_type + '_';
  var suffix = main ? 'main.png' : query.feature_value + '.png';
  var image_url = prefix + infix.replace(' ', '').replace("/", "+") + suffix;
  var legend_url = 'overlays/legends/'+infix+'main.json';
  var raw_bounds = CITY_BOUNDS[city];
  var southWest = L.latLng(raw_bounds[0][1], raw_bounds[0][0]),
  northEast = L.latLng(raw_bounds[1][1], raw_bounds[1][0]),
  imageBounds = L.latLngBounds(southWest, northEast);

  if (main) {$.request('get', legend_url, {}).then(list_feature_values);}
  if (overlay_info.city === null) {
    overlay_info.city = city;
    overlay_info.url = image_url;
    overlay_info.layer = L.imageOverlay(image_url, imageBounds);
    control_layer.addOverlay(overlay_info.layer, "Heatmap");
    map.addLayer(overlay_info.layer);
  }
  if (overlay_info.city !== null && overlay_info.city !== city) {
    map.removeLayer(overlay_info.layer);
    overlay_info.layer = L.imageOverlay(image_url, imageBounds);
    map.addLayer(overlay_info.layer);
  }
  if (overlay_info.url !== null && overlay_info.url !== image_url) {
    overlay_info.layer.setUrl(image_url);
  }
}

function list_feature_values(result) {
  d3.select('#feature_value').selectAll('option').remove(); // empty first
  // parse json to extract feature values
  var raw = $.parseJSON(result);
  var list_elems = [EE('option', {}, "a specific value"),];
  for (var cat in raw) {
    //TODO cut long feature names?
    list_elems.push(EE('option', {value: cat.replace(/\s/g, '')}, cat.toLowerCase()));
  }
  $('#feature_value').fill(list_elems);
  $('#focus').set({$display: 'inline'});
  // TODO bad coupling, but why make 2 requests and parse json 2 times?
  display_legend(raw);
}
function show_heatmap(city) {
  update_overlay_url(true);
}

//TODO should “display: none” the legend when heatmap layer is turned off?
//TODO likewise, maybe call remove_region when regions_layer is turned off?
//TODO in general, we should probably react more when layers are turned on/off http://leafletjs.com/reference.html#control-layers-overlayadd
function display_legend(raw) {
  // var raw = $.parseJSON(result);
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
  li.append('span').text(function (d) {return d.name.toLowerCase();});
}

function show_regions(city) {
  $.request('get', 'regions/'+city+'_distrib.json', {})
    .then(function success(result) {
      var regions = $.parseJSON(result);
      var list_elems = new Array();
      list_elems.push(EE('option', {value: "-1"}, "some region"));
      var BOUNDS = null;
      var i = 0;
      for (let feature of regions.features) {
        var name = feature.properties.name;
        var poly = L.geoJson(feature, { style: POLY_STYLE });
        allRegions.push(poly);
        allFeatures.push(feature);
        if (BOUNDS) { BOUNDS.extend(poly.getBounds());
        } else { BOUNDS = poly.getBounds(); }
        feature.poly_index = i;
        list_elems.push(EE('option', {value: i}, name)
          .on('mouseover', region_in, [i])
          .on('mouseout', region_out, [i]));
        i = i + 1;
        if (i > max_region) { break; }
      }
      regions_layer = L.layerGroup(allRegions);
      $('#neighborhoods').fill(list_elems);
      map.addLayer(regions_layer);
      map.fitBounds(BOUNDS);
      map.setMaxBounds(BOUNDS.pad(.3));
      zoomLevel = map.getZoom();
      control_layer.addOverlay(regions_layer, "Regions");
    });
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
        if (venue[2] < 5) { return; }
        if (venue[2] > max_visits) { max_visits = venue[2]; }
        var d = {"slat": venue[1], "slon": venue[0], "count": venue[2]};
        points.push(d);
    });
    lscale = d3.scale.log().base(Math.E).domain([5, max_visits]).range([1, 3]).nice();
    venues_layer = new MyLayer();
    venues_layer.setData(points);
    map.addLayer(venues_layer);
    control_layer.addOverlay(venues_layer, "Venues");
}
var MyLayer = L.FullCanvas.extend({
    drawSource: function(point, ctx, data) {
        ctx.beginPath();
        var radius = lscale(data.count);
        var color = "rgba(33, 33, 33, .82)";
        // TODO display is really buggy, but why?
        if (radius > 2) { color = "rgba(229, 57, 53, 0.82)" }
        ctx.fillStyle = color;
        if (radius*radius_factor(zoomLevel) >= 0.6) {
          ctx.arc(point.x, point.y , 1.5*radius*radius_factor(zoomLevel), 0, 2 * Math.PI, true);
        }
        ctx.fill();
    }
});
