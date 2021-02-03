import PropTypes from "prop-types";
import React from "react";

function MainButton({ text }) {
  return (
    <button className="button">
      {" "}
      <span> {text} </span>
    </button>
  );
}

MainButton.defaultProps = {
  text: "button",
};

MainButton.propTypes = {
  text: PropTypes.string,
};

export default MainButton;
