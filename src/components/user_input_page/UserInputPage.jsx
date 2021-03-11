import PropTypes from "prop-types";
import React from "react";
import MainButton from "../MainButton";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import MainForm from "./MainForm";

const UserInputPage = ({ onClose, onSubmit, isUserInputPageShowing }) => {
  if (!isUserInputPageShowing) {
    return null;
  }

  return (
    <div id="user-input-page">
      <ScrollToTopOnMount to="user-input-page" duration={1500} offset={-70} />
      <p>Please provide the following information:</p>
      <MainForm onSubmitProp={onSubmit} />
      <MainButton classNameProp="back-button" text="Back" onClick={onClose} />
    </div>
  );
};

UserInputPage.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isUserInputPageShowing: PropTypes.bool.isRequired,
};

export default UserInputPage;
