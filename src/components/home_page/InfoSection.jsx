import React from "react";
import formula1 from "../../assets/formula_1.svg";
import formula2 from "../../assets/formula_2.svg";

const InfoSection = () => (
  <div
    className="info-section"
    // data-aos-once="true"
    data-aos-offset=""
    data-aos="fade-up"
    data-aos-duration="1500"
    // data-aos-offset={isUserInputPageShowing ? "1200" : "120"}
    // className={
    //   isUserInputPageShowing
    //     ? "info-section-form-open"
    //     : "info-section-form-closed"
    // }
  >
    <h2>Wanna meet the formulae?</h2>
    <p className="subheader">
      The following formulae are used to calculate the remaining years needed to
      reach the goal:
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

export default InfoSection;
