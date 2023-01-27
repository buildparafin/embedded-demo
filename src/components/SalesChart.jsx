// ./components/BarChart.js

import React from "react";
import { Chart } from 'react-chartjs-2';

const SalesChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var options = {
    maintainAspectRatio: false,
    barPercentage: .5,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {    
        barThickness: 2,    
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    }
  }

  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [3, 10, 5, 8, 20, 30, 33, 30, 40, 44, 46, 49]
      },
    ]
  };
  return (
    <div style={{height: "250px"}} className="pb-5">
      <Chart type='bar' data={data} options={options} />
    </div>
  );
};

export default SalesChart;