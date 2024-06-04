// google.charts.load("current", {packages: ["corechart"]});
// google.charts.setOnLoadCallback(drawChart);
//
// function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Work', 11],
//         ['Eat', 2],
//         ['Commute', 2],
//         ['Watch TV', 2],
//         ['Sleep', 7],
//         ['Plays', 5]
//     ]);
//
//     var options = {
//         title: 'My Daily Activities',
//         is3D: true,
//         pieHole: 0.4,
//         labels : {
//             fontStyle : 'bolder',
//             position : 'outside',
//             textMargin : 1
//         }
//     };
//
//     var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
//     chart.draw(data, options);
// }


// setup
const data2 = {
    labels: ["Committed Expenditure",
        "Health",
        "Education",
        "Welfare Schemes",
        "Interest Paid"],
    datasets: [{
        data: [180000, 39893, 34394, 39049, 90893],
        backgroundColor: [
            'rgba(255, 26, 104, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(255, 206, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(102,145,255,0.3)',
            'rgba(255, 159, 64, 0.3)',
            'rgba(0, 0, 0, 0.3)'
        ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(102,145,255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
    }]
};

// config
const config2 = {
    type: 'pie',
    data,
    options: {
        plugins: {
            legend: {
                display: false,
                fontStyle: 'bolder'
            },
            labels:
                {
                    render: (args) => {
                        return `${args.label} : ${args.percentage}%`
                    },
                    position: 'default',
                    overlap: true,
                    outsidePadding: 4,
                    textMargin: 4,
                    precision: 1,
                    fontSize: 10,
                    fontStyle: 'bolder',
                    fontColor: 'rgba(0, 0, 0, 2)',
            }
        }
    }
};


// render init block
const myChart2 = new Chart(
    document.getElementById('pie-chart-2'),
    config2
);