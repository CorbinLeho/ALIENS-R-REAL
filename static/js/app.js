// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(UFO_Sighting) {
//   console.log(UFO_Sighting);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(UFO_Sighting) {
//   console.log(UFO_Sighting);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(UFO_Sighting) {
//   console.log(UFO_Sighting);
//   var row = tbody.append("tr");

//   Object.entries(UFO_Sighting).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(UFO_Sighting) {
//   console.log(UFO_Sighting);
//   var row = tbody.append("tr");

//   Object.entries(UFO_Sighting).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = tbody.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(UFO_Sighting) {
//   console.log(UFO_Sighting);
//   var row = tbody.append("tr");
//   Object.entries(UFO_Sighting).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = tbody.append("td");
//     cell.text(value);
//   });
// });

// BONUS: Refactor to use Arrow Functions!
data.forEach((UFO_Sighting) => {
  var row = tbody.append("tr");
  Object.entries(UFO_Sighting).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});



// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#search");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  // console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue || tableData.shape === inputValue || tableData.country === inputValue || tableData.city === inputValue || tableData.state === inputValue);

  console.log(filteredData);

});
