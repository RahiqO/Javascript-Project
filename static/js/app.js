

 d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => {
    
 console.log(data);

//  let sortedSearch = data.names.sort((a, b) => b - a);
sample_values = data.samples[0].sample_values
otu_ids = data.samples[0].otu_ids
otu_labels = data.samples[0].otu_labels
 slicedData = sample_values.slice(0, 10).reverse();
 id_slicedData = otu_ids.slice(0, 10).reverse();
 labels_slicedData = otu_labels.slice(0, 10).reverse();

// Slice the first 10 objects for plotting
// slicedData = sortedSearch.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// Trace1 for the Greek Data
let trace1 = {
  x: slicedData,
  y: id_slicedData.map(item => `OTU${item}`),
  text: labels_slicedData,
  orientation: "h",
  type: "bar"
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
Plotly.newPlot("bar", traceData, layout);
})