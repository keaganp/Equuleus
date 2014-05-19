define(['d3'], function (d3) {

    var render = function (containerId, width) {
        var margin = { top: 20, right: 36, bottom: 32, left: 64 },
            //width = 600,   // width of svg
            height = width / 1.618,  // height of svg
            chartWidth = width - margin.left - margin.right,
            chartHeight = height - margin.top - margin.bottom,
            parseDate = d3.time.format("%Y-%m-%d").parse;

        var data = getDummyData();


        var maxY = d3.max(data, function (d) { return d.premiums; }),
            x_domain = d3.extent(data, function (d) { return parseDate(d.date); }),
            y_domain = [0, maxY + (maxY * 0.075)];


        // create an svg container
        var vis = d3.select("#" + containerId)
                .append("svg:svg")
                .attr("width", width)
                .attr("height", height);

        // define the y scale  (vertical)
        var yScale = d3.scale.linear()
            .domain(y_domain)
            .range([chartHeight, 0]);

        var xScale = d3.time.scale()
            .domain(x_domain)
            .range([0, chartWidth]);

        // define the y axis
        var yAxis = d3.svg.axis()
            .orient("left")
            .ticks(5)
            .scale(yScale);

        // define the x axis
        var xAxis = d3.svg.axis()
            .orient("bottom")
            .scale(xScale)
            .ticks(6)
            .tickSize(10)
            .tickFormat(d3.time.format("%b %Y"));

        vis.append("g")
            .attr("class", "axis yaxis")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(yAxis)
            .selectAll('text')
              .style('text-anchor', 'left');

        d3.selectAll('.yaxis .tick line')
           .attr("x2", width - margin.left - margin.right)
           .attr("x1", "-5")
           .attr("y1", "0")
           .attr('class', 'hor_line');

        vis.append("g")
            .attr("class", "xaxis axis")
            .attr("transform", "translate(" + margin.left + "," + (margin.top + chartHeight) + ")")
            .call(xAxis);

        var line = d3.svg.line()
			.x(function (d, i) { return xScale(parseDate(d.date)) + margin.left + (margin.left * 0.05); })
			.y(function (d) { return yScale(d.premiums) + margin.top; });

        vis.append("svg:path")
      .attr("d", line(data))
      .attr("stroke", '#3399ff')
      .attr("stroke-width", '4')
      .attr("fill", "none");
    };

    var getDummyData = function () {
        return [
        { date: "2012-11-01",
            premiums: 5604
        },
        {
            date: "2012-12-01",
            premiums: 6654
        },
        {
            date: "2013-01-01",
            premiums: 5543
        },
        {
            date: "2013-02-01",
            premiums: 6962
        },
        {
            date: "2013-03-01",
            premiums: 7124
        },
        {
            date: "2013-04-01",
            premiums: 8845
        },
        {
            date: "2013-05-01",
            premiums: 9512
        },

        {
            date: "2013-06-01",
            premiums: 9423
        },
        {
            date: "2013-07-01",
            premiums: 9054
        },
        {
            date: "2013-08-01",
            premiums: 10214
        },
        {
            date: "2013-09-01",
            premiums: 11200
        },
        {
            date: "2013-10-01",
            premiums: 10620
        },
        {
            date: "2013-11-01",
            premiums: 11452
        },
        {
            date: "2013-12-01",
            premiums: 11986
        },
        {
            date: "2014-01-01",
            premiums: 12223
        },
        {
            date: "2014-02-01",
            premiums: 11245
        },
        {
            date: "2014-03-01",
            premiums: 12530
        },
        {
            date: "2014-04-01",
            premiums: 13124
        }];
    };

    return {
        Render: render
    };
});