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
    var cityKey = d3.select("#city");
    var stateKey = d3.select("#state");
    var countryKey = d3.select("#country");
    var shapeKey = d3.select("#shape");
    var commentsKey = d3.select("#comment");

    // get the value of the key elements
    var datetimeValue = datetimeKey.property("value");
    var cityValue = cityKey.property("value").toLowerCase().trim();
    var stateValue = stateKey.property("value").toLowerCase().trim();
    var countryValue = countryKey.property("value").toLowerCase().trim();
    var shapeValue = shapeKey.property("value").toLowerCase().trim();
    var commentsValue = commentsKey.property("value").toLowerCase().trim();
    

    // create if statements to use for multiple filters
    if (datetimeValue != ""){
        tableData = tableData.filter(entry => entry.datetime === datetimeValue);
    }
    if (cityValue != ""){
        tableData = tableData.filter(entry => entry.city === cityValue);
    }
    if (stateValue != ""){
        tableData = tableData.filter(entry => entry.state === stateValue);
    }
    if (countryValue != ""){
        tableData = tableData.filter(entry => entry.country === countryValue);
    }
    if (shapeValue != ""){
        tableData = tableData.filter(entry => entry.shape === shapeValue);
    }
    if (commentsValue != ""){
        tableData = tableData.filter(entry => entry.comment === commentsValue);
    }

    
    console.log(tableData);
    renderTable();


});

// create renderTable so that the table shows up
renderTable();

// Create loop through all data to show everything in the filtered data
function renderTable(){
    
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