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
        backgroundColor: "rgba(16, 123, 139, 0.6)",
      },
      {
        type: "bar",
        label: "Liquid Net Worth",
        data: userData,
        backgroundColor: "rgba(16, 123, 139, 0.8)",
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={{
        // title: { display: true, text: "Your Results", fontSize: 16 },
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
