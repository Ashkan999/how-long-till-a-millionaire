import React from "react";
import AOS from "aos";
import formula1 from "../../assets/formula_1.svg";
import formula2 from "../../assets/formula_2.svg";
import "aos/dist/aos.css";
AOS.init();

function InfoSection({ isUserInputPageShowing }) {
  return (
    <div
      // data-aos-once="true"
      data-aos="fade-up"
      data-aos-duration="1500"
      // data-aos-offset={isUserInputPageShowing ? "1200" : "120"}
      className={
        isUserInputPageShowing
          ? "info-section-form-open"
          : "info-section-form-closed"
      }
    >
      <h2>
        Just a bit more info about the calculations done behind the scenes
      </h2>
      <p className="subheader">
        The following formula is used to calculate the remaining years:
      </p>
      <p className="explaination1">
        The formula is the addition of the future value of the deposits and the
        future value of the initial capital:{" "}
      </p>
      <img className="formula1" src={formula1} alt="main formula" />
      <p className="explaination2">
        The summation part of the formula can be written in closed form which
        gives us the actual formula used for the calculations:
      </p>
      <img className="formula2" src={formula2} alt="closed-form formula" />
    </div>
  );
}

export default InfoSection;
