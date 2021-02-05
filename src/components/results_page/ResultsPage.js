import React from "react";
import ResultsChart from "./ResultsChart";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const ResultsPage = ({ userData }) => {
  return (
    <div className="results-page">
      <ScrollToTopOnMount duration={1000} />
      <h3>Your Results</h3>
      <ResultsChart userData={userData} />
      <p>The text here will depend on the results</p>
    </div>
  );
};

export default ResultsPage;
