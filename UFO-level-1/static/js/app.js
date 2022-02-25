// from data.js
var tableData = data;

var ufoTable = d3.select("tbody");
//writes data to table on init
data.forEach(ufo => {
    var row = ufoTable.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        var cell = row.append('td')
        cell.text(value)
    });
});

var filterbutton = d3.select("#filter-btn");

var dateform = d3.select('form')

filterbutton.on("click", datefilter);
dateform.on("submit",datefilter);

function datefilter(){
    d3.event.preventDefault();
    
    var dateinput = d3.select('#datetime');
    
    var datevalue = dateinput.property("value");

    if (datevalue === "") {
        // clear existing rows
        d3.selectAll('tr').remove()
        //writes data to table
        data.forEach(ufo => {
            var row = ufoTable.append("tr");
            Object.entries(ufo).forEach(function([key,value]){
                var cell = row.append('td')
                cell.text(value)
            });
        });
    }

    else {
    var filterdata = data.filter(ufo => ufo.datetime === datevalue)
    // clear existing rows
    d3.selectAll('tr').remove()
    //writes filtered data to table    
    filterdata.forEach(ufo => {
        var row = ufoTable.append("tr");
        Object.entries(ufo).forEach(function([key,value]){
            var cell = row.append('td')
            cell.text(value)
        });
    });
}
};
