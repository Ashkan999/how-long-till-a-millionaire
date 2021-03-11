import PropTypes from "prop-types";
import React from "react";

const MainButton = ({ text, onClick, classNameProp, type }) => (
  <button
    className={classNameProp}
    onClick={onClick}
    type={type === 0 ? "button" : "submit"}
  >
    <span> {text} </span>
  </button>
);

MainButton.defaultProps = {
  text: "button",
  classNameProp: "button",
  onClick: () => {},
  type: 0,
};

MainButton.propTypes = {
  text: PropTypes.string,
  classNameProp: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.number,
};

export default MainButton;
