

 d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => console.log(data))

 let sortedSearch = data.sort((a, b) => b - a);

// Slice the first 10 objects for plotting
slicedData = sortedSearch.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// Trace1 for the Greek Data
let trace1 = {
  x: slicedData.map(object => object.sample_values),
  y: slicedData.map(object => object.otu_ids),
  text: slicedData.map(object => object.otu_labels),
  orientation: "h"
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "horizontal bar chart ",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", traceData, layout);
