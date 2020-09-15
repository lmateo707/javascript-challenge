// from data.js
var tableData = data;

// YOUR CODE HERE!

// table body
var tbody = d3.select("tbody");

// filter button click
var filterEntries = d3.select("#filter-btn");
filterEntries.on("click", function() {

    // code to prevent the page from refreshing
    d3.event.preventDefault();

    // get the key element: #datetime, #city, #state, #country, #shape, #comments
    var datetimeKey = d3.select("#datetime");

    // get the value of the key elements
    var datetimeValue = datetimeKey.property("value");

    // create if statements to use for multiple filters
    if (datetimeValue != ""){
        tableData = tableData.filter(entry => entry.datetime === datetimeValue);
    }

    // create a refresh button


});

// create renderTable so that the table shows up
renderTable();

// Create loop through all data to show everything in the filtered data
function renderTable(){
    $("#tbodyid").empty();
    console.log(tableData);
    tableData.forEach(function(ufoSightings) {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);

        });
    });
}