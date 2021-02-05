import React from "react";
import { Line } from "react-chartjs-2";

const ResultsChart = ({ userData }) => {
  return (
    <Line
      data={userData}
      options={{ animation: { duration: 2000, easing: "easeOutQuad" } }}
    />
  );
};

export default ResultsChart;
