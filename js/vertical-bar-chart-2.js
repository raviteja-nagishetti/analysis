const verticalBarChart2 = new Chart(
    document.getElementsByClassName('bar-chart-2'), {
    type: "bar",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug"
        ],
        datasets: [
            {
                label: "Html Template",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [0, 200, 250, 200, 500, 450, 850, 1050],
                backgroundColor: "primary"
            },
            {
                label: "VueJs Template",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                data: [0, 300, 400, 560, 320, 600, 720, 850],
                backgroundColor: "dark"
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(26,255,99,0.42)',
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12
                    },
                    color: 'rgba(26,236,255,0.42)',
                },
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            },
            y: {
                ticks: {
                    font: {
                        size: "12"
                    },
                    color: "slate.500",
                    callback: function (value, index, values) {
                        return "$" + value;
                    }
                },
                grid: {
                    color: 'rgba(255,26,104,0.42)',
                },
                border: {
                    dash: [2, 2],
                    display: false
                }
            }
        }
    }
});
