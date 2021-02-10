import React from "react";
import ResultsChart from "./ResultsChart";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const ResultsPage = ({ userData }) => {
  const displayResultText = (years) => {
    console.log(years);
    if (years === 0) {
      return "You're either already a millionaire or something went wrong while processing your input";
    } else if (years <= 5) {
      return "You're almost there! Keep doing what you're doing and you will get there soon.";
    } else if (years <= 15) {
      return "The end is getting near. You'll get there eventually but there are just a few years still in between.";
    } else if (years <= 25) {
      return "There is light at the end of the tunnel, but the tunnel is a long one unfortunately. Don't give up and keep up the good work, you'll get there!";
    } else if (years <= 35) {
      return "You still have quite some way to go to get to that million. Try to speed up the journey by reading up on investing and personal finance, good luck!";
    }
  };

  return (
    <div className="results-page">
      <ScrollToTopOnMount duration={1000} />
      <h3>Your Results</h3>
      <ResultsChart userData={userData} />
      <p>{displayResultText(userData.length)}</p>
    </div>
  );
};

export default ResultsPage;
