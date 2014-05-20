define(['d3'], function (d3) {
   
    var render = function (elementId) {
        var margin = { top: 20, right: 36, bottom: 32, left: 64 },
    width = 550,
    height = width / 1.618,
    left_width = 100,
    padding = 5,
    chartWidth = width - margin.left - margin.right,
    chartHeight = height - margin.top - margin.bottom;

        var data = [
   { name: 'Mike Dunn', commission: 3405 },
   { name: 'Arnold Jarvis', commission: 7635 },
   { name: 'Dale Howard', commission: 5532 },
   { name: 'Stacy Kidd', commission: 10023 },
   { name: 'Kevin Yost', commission: 1405 },
   { name: 'Norma Jean Bell', commission: 2635 },
   { name: 'Mike Huckaby', commission: 17532 },
   { name: 'Andy Compton', commission: 723 }
 ];


        // create an svg container
        var chart = d3.select("#" + elementId)
   .append("svg:svg")
   .attr("width", width)
   .attr("height", height);

        var x, y;
        x = d3.scale.linear()
   .domain([0, d3.max(data, function (d) { return d.commission; })])
   .range([left_width, width]);

        y = d3.scale.linear()
   .domain([1, data.length])
   .range([0, height]);

        var yAxis = d3.svg.axis()
  .orient("left")
  .scale(y);

        chart.selectAll("rect")
   .data(data)
   .enter().append("rect")
    .attr('class', 'chart-bar')
   .attr("x", left_width)
   .attr("y", function (d, i) { return i * (height / data.length); })
   .attr("width", function (d) { return x(d.commission); })
   .attr("height", (height / data.length) - padding);


        chart.selectAll("text")
  .data(data)
  .enter().append("text")
  .text(function (d) { return d.name; })
  .attr("x", left_width / 2)
  .attr("y", function (d, i) { return (i * (height / data.length)) + ((height / data.length) / 2); })
  .attr("dy", ".36em")
  .attr("text-anchor", "middle")
  .attr('class', 'bar-name');

        /*
        chart.selectAll("line")
        .data(x.ticks(17532))
        .enter().append("line")
        .attr("x1", function(d) { return x(d) + left_width; })
        .attr("x2", function(d) { return x(d) + left_width; })
        .attr("y1", 0)
        .attr("y2", 1);
        */
    };

    return {
        Render: render
    };

});