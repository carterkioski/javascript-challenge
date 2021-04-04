// from data.js
var tableData = data;

// YOUR CODE HERE!
tableData.forEach((item) => {
    table = d3.select('table')
    tr = table.append('tr')
    console.log(item.city)
    tr.append('td').text(item.datetime)
    tr.append('td').text(item.city)
    tr.append('td').text(item.state)
    tr.append('td').text(item.country)
    tr.append('td').text(item.shape)
    tr.append('td').text(item.durationMinutes)
    tr.append('td').text(item.comments)
}
)