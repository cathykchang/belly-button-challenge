const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });


// Initializes the page with a default plot
function init() {
    data = [{
      x: [sample_values],
      y: [otu_ids] }];
  
    Plotly.newPlot("plot", data);
  }
  
  let sample_values = Object.values(sample_values.samples)

  let otu_ids = Object.values(otu_ids.samples)
  

  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    let x = [];
    let y = [];
  
    if (dataset === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (dataset === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);

    ////////////////////////
    let trace1 = {
      x: sample_values,
      y: otu_ids,
      type: 'bar'
    };    
    
    let data = [trace1];
    
    let layout = {
      title: title
    };
    
    Plotly.newPlot("plot", data, layout);
  }
  
  init();


  