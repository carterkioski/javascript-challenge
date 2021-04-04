// from data.js
var tableData = data;

//initally loads all data
createTable(tableData)
//selects the button
button = d3.select('#filter-btn')
button.on('click', handleClick)
function handleClick(){
    //once button is clicked it checks calue of input
    inputFilter = d3.select('#filter-category').property("value")
    inputValue = d3.select('#filter-value').property("value")
    if (inputValue && inputFilter){
        filteredTableData = tableData.filter((item) => item[inputFilter] === inputValue )
        createTable(filteredTableData)
    }
    else {
        createTable(tableData)
    }
}

//Code for adding in rows
function createTable(ufoData){
    d3.select('.ufo-data').html("")
    ufoData.forEach((item) => {
        table = d3.select('.ufo-data')
        tr = table.append('tr')
        tr.append('td').text(item.datetime)
        tr.append('td').text(item.city)
        tr.append('td').text(item.state)
        tr.append('td').text(item.country)
        tr.append('td').text(item.shape)
        tr.append('td').text(item.durationMinutes)
        tr.append('td').text(item.comments)
    })
}