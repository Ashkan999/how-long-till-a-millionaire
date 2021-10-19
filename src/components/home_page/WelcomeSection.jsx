import PropTypes from "prop-types";
import React from "react";
import MainButton from "../MainButton";

const WelcomeSection = ({ isUserInputPageShowing, onStart }) => (
  <div className="welcome-section">
    <h1>How long till you&apos;re a millionaire?</h1>
    <p>
      Find out now using this fast and simple compound interest calculator that
      supports monthly deposits!{" "}
    </p>
    <MainButton
      classNameProp={
        isUserInputPageShowing ? "start-button-hidden" : "start-button-showing"
      }
      text="Get Started"
      onClick={onStart}
    />
  </div>
);

WelcomeSection.propTypes = {
  isUserInputPageShowing: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
};

export default WelcomeSection;
