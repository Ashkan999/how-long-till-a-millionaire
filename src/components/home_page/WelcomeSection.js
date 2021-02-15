import MainButton from "../MainButton";

const WelcomeSection = ({ isUserInputPageShowing, onStart }) => {
  return (
    <div className="welcome-section">
      <h1>How long till you're a millionaire?</h1>
      <p>
        Find out now using this fast and simple compound interest calculater
        that supports monthly deposits!{" "}
      </p>
      <MainButton
        classNameProp={
          isUserInputPageShowing
            ? "start-button-hidden"
            : "start-button-showing"
        }
        text="Get Started"
        onClick={onStart}
      />
    </div>
  );
};

export default WelcomeSection;
