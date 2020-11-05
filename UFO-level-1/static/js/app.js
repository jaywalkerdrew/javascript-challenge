// Grab the data from data.js
var tableData = data;

// Send the table data to the console for preview
console.log(tableData);

// Select refences from the html with d3
var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");
var dateInput = d3.select("#datetime");

// Function to build the UFO sighting table
function buildTable(info) {
    info.forEach(ufoReport => {

    // Add a row for each reported sighting
    var row = tbody.append("tr");
    
    // Add the values from each report into their own cell
    Object.entries(ufoReport).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
}

// Build the full table of UFO sightings
buildTable(tableData);

// Select the button to filter the table
filterButton.on("click", filterTable);

// Function to filter the table by the user input date
function filterTable() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input date
    var dateValue = dateInput.property("value");
    console.log(dateValue);

    // Filter the data based on the datetime values
    var filteredRows = tableData.filter(tableData => tableData.datetime == dateValue);
    console.log(filteredRows)

    // Clear the original table
    tbody.html("");

    // Print a message if the table will be empty
    if(filteredRows.length == 0) {
        var row = tbody.append("tr");
        var cell = tbody.append("td");
        cell.text("No reported sightings on this date, please try another.")
    }

    else {
    // Build the filtered report using the data selected from the full data set
    buildTable(filteredRows);
    }
};