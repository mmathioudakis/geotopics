var MINI = require('minified');
var _ = MINI._,
  $ = MINI.$,
  $$ = MINI.$$,
  EE = MINI.EE,
  HTML = MINI.HTML;
var mainCats = ['Arts &\n Entertainment', 'College & University', 'Food',
  'Nightlife Spot', 'Outdoors & Recreation', 'Shop & Service',
  'Professional & Other Places', 'Residence', 'Travel & Transport'
];
var timeOfDay = ['morning', 'noon', 'afternoon', 'evening', 'night',
  'late night'
];
var allRegions = [];

function create_map(center, zoom_level) {
  L.mapbox.accessToken =
    'pk.eyJ1IjoiZGF1cmVnIiwiYSI6ImNpbGF4aTkwZTAwM3l2d2x6bGNsd3JhOWkifQ.ga2zNgyopN05cNJ1tbviWQ';
  return L.mapbox.map('map', 'mapbox.light');//.setView(center, zoom_level);
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
  colors, rel_data) {
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
  var yscale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .rangeRound([h, margin.t])
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
      return h - yscale(d);
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
  svg.append("text")
    .attr("x", y_pos + 2 * margin.l)
    .attr('y', margin.t)
    .attr('id', 'toggle_' + className)
    .text(change_prompt[nb_clicks])
    .on('click', function () {
      nb_clicks = (nb_clicks + 1) % 2;
      dataset = data[nb_clicks]
      yscale = d3.scale.linear()
        .domain([0, d3.max(dataset)])
        .rangeRound([h, margin.t])
        .nice();
      yAxis = d3.svg.axis().scale(yscale).orient("left").ticks(5);
      svg.selectAll('.' + className + ' rect')
        .data(dataset)
        .transition()
        .attr("y", function (d) {
          return yscale(d);
        })
        .attr("height", function (d) {
          return h - yscale(d);
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

function display_region(feature) {
  var name = feature.properties.name;
  $('#region-title').fill(name);

  var svg = d3.select('#bars');
  var bounding_rect = svg.node().getBoundingClientRect();
  var margin = {
      t: 30,
      r: 30,
      b: 100,
      l: 60
    },
    w = bounding_rect.width - margin.l - margin.r,
    h = bounding_rect.height - margin.t - margin.b;
  svg.selectAll("*").remove();

  var colors_cat = d3.scale.category10();
  var xScale_cat = d3.scale.ordinal()
    .domain(mainCats)
    .rangeRoundBands([margin.l, bounding_rect.width / 2 - margin.r], 0.15, 0.2);
  var xAxis_cat = d3.svg.axis()
    .scale(xScale_cat)
    .orient("bottom");
  // https://github.com/mbostock/d3/blob/master/lib/colorbrewer/colorbrewer.js
  var colors_time = function (i) {
    return ["#ffffd4", "#fee391", "#fec44f", "#fe9929", "#d95f0e", "#993404"]
      [i];
  }
  var xScale_time = d3.scale.ordinal()
    .domain(timeOfDay)
    .rangeRoundBands([bounding_rect.width / 2 + margin.l, bounding_rect.width -
      margin.r
    ], 0.15, 0.2);
  var xAxis_time = d3.svg.axis()
    .scale(xScale_time)
    .orient("bottom");
  set_x_axis(svg, 0, h, xAxis_cat);
  set_x_axis(svg, 0, h, xAxis_time);

  draw_bars(svg, feature.properties.category_distrib, 'cat_bar', 0, h,
    margin, xScale_cat, mainCats, colors_cat, feature.properties.category_more
  );
  draw_bars(svg, feature.properties.time_distrib, 'time_bar', bounding_rect.width /
    2, h,
    margin, xScale_time, timeOfDay, colors_time, feature.properties.time_more
  );
  // TODO: display two sentences highlighting most frequent category and timeOfDay?
}
function region_in(index) {
  var poly = allRegions[index];
  var Lpoly = poly._layers[Object.keys(poly._layers)[0]];
  Lpoly.bringToFront();
  Lpoly.setStyle({fillColor: "#47b8e0", opacity: 1.0});
}
function region_out(index) {
  var poly = allRegions[index];
  var Lpoly = poly._layers[Object.keys(poly._layers)[0]];
  Lpoly.bringToBack();
  Lpoly.setStyle({fillColor: "rgba(255,201,82, 0.5)", opacity: 0.7});
}
var POLY_STYLE = { color: '#222', fillColor: 'rgba(255,201,82, 0.5)', weight: 2, opacity: 0.7};
function main() {
  // TODO: allow for loading of different city
  var map = create_map();
  // TODO: fix min and max level of zoom
  $.request('get', 'newyork_distrib.json', {})
    .then(function success(result) {
      var regions = $.parseJSON(result);
      var list_elems = new Array();
      var BOUNDS = null;
      var i = 0;
      for (let feature of regions.features) {
        var name = feature.properties.name;
        var poly = L.geoJson(feature, {style: POLY_STYLE});
        allRegions.push(poly);
        poly.addTo(map);
        if (BOUNDS) {BOUNDS.extend(poly.getBounds());}
        else {BOUNDS = poly.getBounds();}
        list_elems.push(EE('li', {}, name).on('click', display_region, [feature])
            .on('mouseover', region_in, [i])
            .on('mouseout', region_out, [i]))
        i = i + 1;
      }
      $('#neighborhoods').add(EE('ul', {}, list_elems));
      map.fitBounds(BOUNDS);
      map.setMaxBounds(BOUNDS.pad(.50));
      // map.fitBounds(BOUNDS, {maxZoom: map.getZoom()+2});
    })
}
$.ready(main);
