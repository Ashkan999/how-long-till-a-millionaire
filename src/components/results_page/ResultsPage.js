import React from "react";
import ResultsChart from "./ResultsChart";

const ResultsPage = () => {
  return (
    <div className="results-page">
      <h3>Your Results</h3>
      <ResultsChart />
      <p>The text here will depend on the results</p>
    </div>
  );
};

export default ResultsPage;
