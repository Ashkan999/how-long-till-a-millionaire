import PropTypes from "prop-types";

const MainButton = ({ text, onClick, classNameProp }) => {
  return (
    <button className={classNameProp} onClick={onClick}>
      {" "}
      <span> {text} </span>
    </button>
  );
};

MainButton.defaultProps = {
  text: "button",
  classNameProp: "button",
};

MainButton.propTypes = {
  text: PropTypes.string,
  classNameProp: PropTypes.string,
  onClick: PropTypes.func,
};

export default MainButton;
