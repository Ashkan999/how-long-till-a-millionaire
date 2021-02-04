import PropTypes from "prop-types";
import React from "react";

function MainButton({ text, onClick }) {
  return (
    <button className="button" onClick={onClick}>
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
  onClick: PropTypes.func,
};

export default MainButton;
