


const chartData = {
  type:'line',
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Ago','Sep','Oct'],
  datasets: [
    {
      label: 'BTC',
      data: [30000, 40000, 35000, 50000, 60000, 70000, 65000,60000,75000,80000],
      borderColor: 'rgb(75, 192, 192)',
      fill: false,
    },
    {
      label: 'ETH',
      data: [10000, 20000, 15000, 25000, 30000, 35000, 40000,45000,35000,48000],
      borderColor: 'rgb(153, 102, 255)',
      fill: false,
    },
    {
      label: 'LTC',
      data: [5000, 10000, 7500, 12500, 15000, 17500, 20000,18000,21000,24000],
      borderColor: 'rgb(255, 205, 86)',
      fill: false,
    },
  ],
};

 const chartOptions = {
  radius:0,
  tension:0.5,
  responsive: true,
  scales: {
    x: {
      display: true,
    },
    y: {
      display: true,
    },
  },
};

export {
  chartData,
  chartOptions
}