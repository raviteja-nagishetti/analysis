const verticalBarChart = new Chart(
    document.getElementsByClassName('bar-chart'), {
        type: "bar",
        data: {
            labels: [
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
            ],
            datasets: [
                {
                    label: "Debt",
                    barPercentage: 0.5,
                    barThickness: 15,
                    maxBarThickness: 20,
                    minBarLength: 2,
                    data: [70000, 100000, 150000, 180000, 210000, 260000, 310000, 375000, 520000, 671000],
                    backgroundColor: 'rgba(245,4,36,0.9)'
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: 'rgb(16,15,15)',
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: 'rgba(3,3,3,0.42)',
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
                            size: 12
                        },
                        color: 'rgba(5,5,5,0.42)'
                    },
                    grid: {
                        color: 'rgba(10,10,10,0.42)'
                    },
                    border: {
                        dash: [2, 2],
                        display: false
                    }
                }
            }
        }
    });
