// ./components/BarChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const SalesChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var options = {
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
        data: [0, 10, 5, 2, 20, 30, 33, 30, 40, 44, 46, 45, 44]
      },
    ]
  };
  return (
    <div style={{width: "100%"}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;