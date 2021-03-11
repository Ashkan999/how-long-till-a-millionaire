import PropTypes from "prop-types";
import React, { useState } from "react";
import { animateScroll } from "react-scroll";
import UserInputPage from "../user_input_page/UserInputPage";
import ExampleSection from "./ExampleSection";
import InfoSection from "./InfoSection";
import WelcomeSection from "./WelcomeSection";

const HomePage = ({ onSubmit: processUserData }) => {
  const [isUserInputPageShowing, setUserInputPageShowing] = useState(false);
  const showUserInputPage = () => {
    setUserInputPageShowing(true);
    // scroller.scrollTo("test", { smooth: true });
  };
  const closeUserInputPage = () => {
    setUserInputPageShowing(false);
    animateScroll.scrollToTop({ smooth: "easeInOutQuad", duration: 1500 });
  };

  const processUserDataAndCloseForm = (data) => {
    setUserInputPageShowing(false);
    processUserData(data);
  };

  return (
    <div className="home-page">
      <div
        className={
          isUserInputPageShowing
            ? "welcome-and-form-container welcome-and-form-container--open"
            : "welcome-and-form-container"
        }
      >
        <WelcomeSection
          isUserInputPageShowing={isUserInputPageShowing}
          onStart={showUserInputPage}
        />
        <UserInputPage
          onClose={closeUserInputPage}
          onSubmit={processUserDataAndCloseForm}
          isUserInputPageShowing={isUserInputPageShowing}
        />
      </div>
      <ExampleSection />
      <InfoSection isUserInputPageShowing={isUserInputPageShowing} />
    </div>
  );
};

HomePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default HomePage;
