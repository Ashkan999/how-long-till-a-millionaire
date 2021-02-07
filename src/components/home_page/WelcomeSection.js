import { Link } from "react-scroll";
import MainButton from "../MainButton";

const WelcomeSection = ({ isUserInputPageShowing, onStart }) => {
  return (
    <div className="welcome-section" id="welcome-section">
      <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima sint
        tempore voluptatum ex distinctio reiciendis, quia rerum, explicabo
        repellat natus iure laboriosam ut maiores illo porro optio praesentium
        rem.{" "}
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
