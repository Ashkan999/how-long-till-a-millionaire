import React from "react";
import ResultsChart from "./ResultsChart";

const ResultsPage = ({ userData }) => {
  return (
    <div className="results-page">
      <h3>Your Results</h3>
      <ResultsChart userData={userData} />
      <p>The text here will depend on the results</p>
    </div>
  );
};

export default ResultsPage;
