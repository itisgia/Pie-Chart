const studentDate = [

    {
        food: "Cake",
        count: 6
    },
    {
      food: "Pie",
      count: 5
    }
] // whenever using data, Array

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

// this function draw a chart using google API
function drawChart() {
    console.log('package has loaded');
    const data = new google.visualization.DataTable(); // creating border of blank table
    // creating coloutms
    data.addColumn("string", "Food");
    data.addColumn("number", "Count");
    for (var i = 0; i < studentDate.length; i++) {
      data.addRow([
        studentDate[i].food, studentDate[i].count]);
    }

    const options = {
      title : "Cake vs Pie's"
    }

    const chart = new google.visualization.PieChart(document.getElementById('chartContainer'));
    chart.draw(data, options)
}
