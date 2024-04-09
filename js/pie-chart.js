
// setup
const data = {

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
const config = {
    type: 'pie',
    data,
    options: {
        plugins: {
            legend: {
                display: true
            },
            layout: {
                padding: 10
            },
            labels:
                {
                    render: (args) => {
                        return `${args.label}: ${args.percentage}%`
                    },
                    position: 'border',
                    precision: 1,
                    fontSize: 10,
                    fontStyle: 'bolder',
                    fontColor: 'rgba(0, 0, 0, 2)',
                    display: true,
            }
        }
    }
};


// render init block
const myChart = new Chart(
    document.getElementById('pie-chart'),
    config
);