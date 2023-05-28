// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then (data => console.log(data))



// import data from 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json' assert { type: 'json' };
// console.log(data);

// fetch("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i]);
//     }
//   })

//   var xhr = new XMLHttpRequest();

// // open a connection
// xhr.open("GET", ".C:\Users\16475\Documents\GitLab resources\belly-button-challenge\static\js\samples.json", true);

// // send the request
// xhr.send();

// // handle the response
// xhr.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText);
//   }
// }

fetch('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json')
   .then(response => response.text())
   .then(text => console.log(text))