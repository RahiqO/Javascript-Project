drop_down = d3.select("#selDataset")
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => {
id_data = data.names 
// console.log(id_data);

id_data.forEach((id) => {
    console.log(id)
    drop_down.append("option").text(id).property("value",id)
})


})



 function bar_data (sample_no){
 d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => {
    
 console.log(data);

 
//  let sortedSearch = data.names.sort((a, b) => b - a);
sample_values = data.samples.filter(itm => itm.id == sample_no)[0].sample_values
otu_ids = data.samples.filter(itm => itm.id == sample_no)[0].otu_ids
otu_labels = data.samples.filter(itm => itm.id == sample_no)[0].otu_labels
 slicedData = sample_values.slice(0, 10).reverse();
 id_slicedData = otu_ids.slice(0, 10).reverse();
 labels_slicedData = otu_labels.slice(0, 10).reverse();


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
var trace_bubble = {
    x: otu_ids ,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
      color: otu_ids ,
      size: sample_values,
      colorscale: 'Earth'
    }
  };
  
  var data = [trace_bubble];
  
  var layout_bubble = {
    title: 'Bubble Chart Hover Text',
    showlegend: false,
  };
  
  Plotly.newPlot('bubble', data, layout_bubble);
})}

bar_data("940")


let tbody1 = d3.select(".panel-body").append("li").text("id:940")
let tbody2 = d3.select(".panel-body").append("li").text("ethnicity: Caucasian")
let tbody3 = d3.select(".panel-body").append("li").text("age:24")
let tbody4 = d3.select(".panel-body").append("li").text("location:Beaufort/NC")
let tbody5 = d3.select(".panel-body").append("li").text("bbtype: I")
let tbody6 = d3.select(".panel-body").append("li").text("wfreq:2")