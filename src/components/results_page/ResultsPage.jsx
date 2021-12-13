import PropTypes from "prop-types";
import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import ResultsChart from "./ResultsChart";

const ResultsPage = ({ userData }) => {
  const displayResultText = (years) => {
    if (years === 0) {
      return "Something went wrong while processing your input, please try again.";
    }
    if (years <= 5) {
      return "You're almost there! Keep doing what you're doing and you'll be a millionaire soon.";
    }
    if (years <= 15) {
      return "The end is getting near. You'll get there eventually but there are just a few years in between.";
    }
    if (years <= 25) {
      return "There is light at the end of the tunnel, but the tunnel is a long one unfortunately. Try to speed up the journey by reading up on investing and personal finance. Good luck!";
    }
    return "You still have quite some way to go to get to that million. Try to speed up the journey by reading up on investing and personal finance. Good luck!";
  };

  return (
    <div id="results-page">
      <ScrollToTopOnMount to="results-page" duration={1200} offset={-10} />
      <div className="chart-container">
        <h3>Your Results</h3>
        <ResultsChart userData={userData} />
      </div>
      <p>{displayResultText(userData.length)}</p>
    </div>
  );
};

ResultsPage.defaultProps = {
  userData: [],
};

ResultsPage.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.number),
};

export default ResultsPage;
