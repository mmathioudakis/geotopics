var MINI = require('minified');
var _=MINI._, $=MINI.$, $$=MINI.$$, EE=MINI.EE, HTML=MINI.HTML;
var mainCats = ['Arts &\n Entertainment', 'College & University', 'Food',
		'Nightlife Spot', 'Outdoors & Recreation', 'Shop & Service',
		'Professional & Other Places', 'Residence', 'Travel & Transport'];
var timeOfDay = ['morning',  'noon',  'afternoon', 'evening',  'night', 'late night'];

function create_map(center, zoom_level) {
	L.mapbox.accessToken = 'pk.eyJ1IjoiZGF1cmVnIiwiYSI6ImNpbGF4aTkwZTAwM3l2d2x6bGNsd3JhOWkifQ.ga2zNgyopN05cNJ1tbviWQ';
	return L.mapbox.map('map', 'mapbox.light').setView(center, zoom_level);
	
}
function set_x_axis(svg, x, y, axis) {
	svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate("+x+"," + y + ")")
			.call(axis)
			.selectAll("text")
					.attr("y", 0)
					.attr("x", -10)
					.attr("dy", ".4rem")
					.attr("transform", "rotate(-45)")
					.style("text-anchor", "end");
}

function draw_bars(svg, dataset, className, y_pos, h, margin, xscale, labels, colors, rel_data) {
	var bars = svg.selectAll("."+className)
                 .data(dataset)
                 .enter()
                 .append("g")
								 .attr('class', className);
	var yscale = d3.scale.linear()
											 .domain([0, d3.max(dataset)])
											 .rangeRound([h, 0])
											 .nice();
  bars.append("rect")
    .attr("x", function(d, i) { return xscale(labels[i]); })
    .attr("y", function(d) { return yscale(d);})
    .attr("width", xscale.rangeBand())
    .attr("fill", function(d, i) {return colors(i);})
    .attr("height", function(d) { return h-yscale(d); });
  bars.append("text").text(function(d){ return d3.format(".1%")(d)})
    .attr("x", function(d, i) { return xscale(labels[i])+xscale.rangeBand()/2; })
    .attr("y", function(d) { return yscale(d)-5; })
    .attr("text-anchor", "middle");

	var yAxis = d3.svg.axis()
										.scale(yscale)
										.orient("left")
										.ticks(5);
	svg.append("g")
			.attr("class", "axis")
			.attr("id", className)
			.attr("transform", "translate(" + (y_pos + margin.l/2) + "," + margin.t + ")")
			.call(yAxis);
  svg.append("text")
    .attr("x", y_pos+2*margin.l)
    .attr('y', margin.t)
    .text('Click me')
    .on('click', function() {
      yscale = d3.scale.linear()
        .domain([0, d3.max(rel_data)])
        .rangeRound([h, 0])
        .nice();
      yAxis = d3.svg.axis().scale(yscale).orient("left").ticks(5);
      svg.selectAll('.'+className+' rect')
        .data(rel_data)
        .transition()
        .attr("y", function(d) { return yscale(d);})
        .attr("height", function(d) { return h-yscale(d); });
      svg.selectAll('.'+className+' text')
        .data(rel_data)
        .transition()
        .attr("y", function(d) { return yscale(d)-5; })
        .text(function(d){ return d3.format(".1%")(d)});
      svg.select('#'+className).call(yAxis);
    });
}
function display_region(feature) {
	var name = feature.properties.name;
	$('#region-title').fill(name);

	var svg = d3.select('#bars');
	var bounding_rect = svg.node().getBoundingClientRect();
	var margin = {t: 10, r: 30, b: 100, l: 60},
		w = bounding_rect.width - margin.l - margin.r,
    h = bounding_rect.height - margin.t - margin.b;
	svg.selectAll("*").remove();

	var colors_cat = d3.scale.category10();
	var xScale_cat = d3.scale.ordinal()
											 .domain(mainCats)
											 .rangeRoundBands([margin.l, bounding_rect.width/2-margin.r], 0.15, 0.2);
	var xAxis_cat = d3.svg.axis()
										.scale(xScale_cat)
										.orient("bottom");
  // https://github.com/mbostock/d3/blob/master/lib/colorbrewer/colorbrewer.js
  var colors_time = function(i) {return ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"][i];}
	var xScale_time = d3.scale.ordinal()
											 .domain(timeOfDay)
											 .rangeRoundBands([bounding_rect.width/2+margin.l, bounding_rect.width-margin.r], 0.15, 0.2);
	var xAxis_time = d3.svg.axis()
										.scale(xScale_time)
										.orient("bottom");
  set_x_axis(svg, 0, h, xAxis_cat);
  set_x_axis(svg, 0, h, xAxis_time);

  draw_bars(svg, feature.properties.category_distrib, 'cat_bar', 0, h,
      margin, xScale_cat, mainCats, colors_cat, feature.properties.category_more);
  // draw_bars(svg, feature.properties.category_more, 'cat_bar', 0, h, margin, xScale_cat, mainCats, colors_cat);
  draw_bars(svg, feature.properties.time_distrib, 'time_bar', bounding_rect.width/2, h,
      margin, xScale_time, timeOfDay, colors_time, feature.properties.time_more);
}

function main() {
	// var map = create_map([40.8, -74], 13)
	$.request('get', 'newyork_formatted.json', {})
		.then(function success(result) {
			var regions = $.parseJSON(result);
			var list_elems = new Array();
			for (let feature of regions.features) {
				var name = feature.properties.name;
				display_region(feature);
				return false;
				list_elems.push(EE('li', {}, name).on('click', display_region, [feature]));
			}
			$('#neighborhoods').add(EE('ul', {}, list_elems));
			L.geoJson(regions, {
				style: function(feature) {
					return {color: '#222', fillColor: feature.properties.fill, weight: 3, opacity: 0.3};
				}
			}).addTo(map);
		})
}
$.ready(main);
