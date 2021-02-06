import React from "react";
import { Line } from "react-chartjs-2";

const ResultsChart = ({ userData }) => {
  const chartData = {
    labels: Array.from(Array(userData.length).keys()),
    datasets: [
      {
        label: "Liquid Net Worth",
        data: userData,
        backgroundColor: "rgba(42, 176, 109, 0.5)",
      },
      {
        type: "bar",
        label: "Liquid Net Worth",
        data: userData,
        backgroundColor: "rgba(42, 176, 109, 0.8)",
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={{
        animation: { duration: 2000, easing: "easeOutQuad" },
      }}
    />
  );
};

export default ResultsChart;
