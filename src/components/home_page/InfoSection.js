import React from "react";
import AOS from "aos";
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
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus et
        consequuntur veritatis ex. Odit, quo sint. Ullam asperiores laudantium
        enim, veritatis officia quisquam dolor dolorum, perferendis maxime
        ducimus quibusdam cum?
      </p>
    </div>
  );
}

export default InfoSection;
