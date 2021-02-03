import React from "react";
import MainButton from "./MainButton";

function WelcomeSection() {
  return (
    <div className="welcome-section">
      <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima sint
        tempore voluptatum ex distinctio reiciendis, quia rerum, explicabo
        repellat natus iure laboriosam ut maiores illo porro optio praesentium
        rem.{" "}
      </p>
      <MainButton text="Let's Begin!" />
    </div>
  );
}

export default WelcomeSection;
