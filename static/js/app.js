function metadata(sample_no){ 
  drop_down = d3.select("#selDataset")
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => {
  let id_data = data.metadata
  let sample_values = id_data.filter(sampleObj => sampleObj.id == sample_no)
  let first_value = sample_values[0]
  let PANEL = d3.select("#sample-metadata");
  PANEL.html("");

 
  for (key in first_value){
    PANEL.append("h6").text(`${key.toUpperCase()}: ${first_value[key]}`);
  };

  
  

  
  
  });
}
  
  
   function bar_data (sample_no){
   d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => {
      
  sample_values = data.samples.filter(itm => itm.id == sample_no)[0].sample_values
  otu_ids = data.samples.filter(itm => itm.id == sample_no)[0].otu_ids
  otu_labels = data.samples.filter(itm => itm.id == sample_no)[0].otu_labels
   slicedData = sample_values.slice(0, 10).reverse();
   id_slicedData = otu_ids.slice(0, 10).reverse();
   labels_slicedData = otu_labels.slice(0, 10).reverse();
  

  let trace1 = {
    x: slicedData,
    y: id_slicedData.map(item => `OTU${item}`),
    text: labels_slicedData,
    orientation: "h",
    type: "bar"
  };
  
  
  let traceData = [trace1];

  let layout = {
    title: "horizontal bar chart ",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  
  }


  Plotly.newPlot("bar", traceData, layout);        
})
}

  
  function bubble_grapgh(sample_no){ 
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => {
    sample_values = data.samples.filter(itm => itm.id == sample_no)[0].sample_values
    otu_ids = data.samples.filter(itm => itm.id == sample_no)[0].otu_ids
    otu_labels = data.samples.filter(itm => itm.id == sample_no)[0].otu_labels
    
  var trace_bubble = {
      x: otu_ids,
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
    
    Plotly.newPlot("bubble", data, layout_bubble);
    
  })}
  


  function init(){

    let selector = d3.select("#selDataset");     
       d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
       let id_data = data.names 
       for (let i = 0; i < id_data.length; i++){
        selector
          .append("option")
          .text(id_data[i])
          .property("value", id_data[i]);
      };
  
 
      let Theid = id_data[0];
      bar_data(Theid);
      bubble_grapgh(Theid);
      metadata(Theid);
      
     
      }
       )}

       function optionChanged(newSample) {
        
    bar_data(newSample);
    bubble_grapgh(newSample);
    metadata(newSample)
    }
       init();      
 