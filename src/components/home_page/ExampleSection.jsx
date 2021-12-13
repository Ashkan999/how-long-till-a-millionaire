import React from "react";
import results from "../../assets/results.PNG";

const ExampleSection = () => (
  <div className="example-section">
    <div className="example-section-container">
      <p>View your results quick and easily</p>
      <img
        data-aos="fade-left"
        data-aos-duration="1000"
        // data-aos-once="true"
        className="results-img"
        src={results}
        alt="results example"
      />
    </div>
  </div>
);

export default ExampleSection;
