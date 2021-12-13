import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const ResultsChart = ({ userData }) => {
  const chartData = {
    labels: Array.from(Array(userData.length).keys()),
    datasets: [
      {
        label: "Liquid Net Worth",
        data: userData,
        backgroundColor: "rgb(131, 232, 90, 0.6)",
      },
      {
        type: "bar",
        label: "Liquid Net Worth",
        data: userData,
        backgroundColor: "rgb(131, 232, 90, 0.6)",
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={{
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time (in years)",
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Liquid Net Worth",
              },
            },
          ],
        },
        animation: { duration: 3000, easing: "easeOutQuad" },
        legend: { display: false },
      }}
    />
  );
};

ResultsChart.defaultProps = {
  userData: [],
};

ResultsChart.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.number),
};

export default ResultsChart;
