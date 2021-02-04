import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function InfoSection() {
  return (
    <div
      className="info-section"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
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
