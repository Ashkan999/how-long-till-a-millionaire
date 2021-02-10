import { Link } from "react-scroll";
import MainButton from "../MainButton";

const WelcomeSection = ({ isUserInputPageShowing, onStart }) => {
  return (
    <div className="welcome-section" id="welcome-section">
      <h1>How long till you're a millionaire?</h1>
      <p>
        Find out now using this fast and simple compound interest calculater
        that supports monthly deposits!{" "}
      </p>
      <Link
        className={
          isUserInputPageShowing ? "start-button-off" : "start-button-on"
        }
        activeClass="active"
        to="user-input-page"
        smooth={true}
        duration={1500}
        offset={-110}
      >
        <MainButton
          classNameProp="start-button"
          text="Get Started"
          onClick={onStart}
        />
      </Link>
    </div>
  );
};

export default WelcomeSection;
