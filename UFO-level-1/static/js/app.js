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
    var filteredData = tableData.map(x => x)
    // var filteredData = [...tableData]

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
        filteredData = filteredData.filter(entry => entry.datetime === datetimeValue);
    }
    if (cityValue != ""){
        filteredData = filteredData.filter(entry => entry.city === cityValue);
    }
    if (stateValue != ""){
        filteredData = filteredData.filter(entry => entry.state === stateValue);
    }
    if (countryValue != ""){
        filteredData = filteredData.filter(entry => entry.country === countryValue);
    }
    if (shapeValue != ""){
        filteredData = filteredData.filter(entry => entry.shape === shapeValue);
    }
    if (commentsValue != ""){
        filteredData = filteredData.filter(entry => entry.comment === commentsValue);
    }

    
    console.log(filteredData);
    renderTable(filteredData);


});

// create renderTable so that the table shows up
renderTable(tableData);

// Create loop through all data to show everything in the filtered data
function renderTable(array){
    tbody.html("")
    // console.log(renderTable);
    array.forEach(function(ufoSightings) {
        // console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
            // console.log(key,value);
            var cell = row.append("td");
            cell.text(value);

        });
    });
}