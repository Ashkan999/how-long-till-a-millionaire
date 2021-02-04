import React from "react";
import { Line } from "react-chartjs-2";

const ResultsChart = ({ userData }) => {
  return (
    <Line
      data={{
        labels: ["hoi", "hoi2", "hoi3"],
        datasets: [{ data: [12, 2, 6] }],
      }}
    />
  );
};

export default ResultsChart;
