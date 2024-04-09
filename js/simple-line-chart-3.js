
const simpleLineChart = new Chart(
    document.getElementsByClassName('simple-line-chart'),
    {
        type: "bar",
        data: {
            labels: [
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
            ],
            datasets: [
                {
                    label: "# of Votes",
                    data: [
                        200,
                        250,
                        500,
                        700,
                        1050,
                        1100,
                    ],
                    borderWidth: 2,
                    borderColor: 'rgba(255,26,104,0.42)',
                    backgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    tension: 0.4
                },
                {
                    label: "# of Votes",
                    data: [
                        200,
                        250,
                        500,
                        700,
                        1050,
                        1100,
                    ],
                    borderWidth: 2,
                    borderDash: [2, 2],
                    borderColor: 'rgba(255, 26, 104, 0.3)',
                    backgroundColor: "transparent",
                    pointBorderColor: "transparent",
                    tension: 0.4
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
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
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                }
            }
        }
    });

