import React from "react";
import { FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-page">
      <p>
        Hi there! I'm Ashkan, a CSE student at the Delft University of
        Technology in the Netherlands. I created this small personal project to
        get myself familier with React JS and to get some practice with the
        framework.
      </p>
      <p>
        Thank you for visiting and if you have any feedback or questions, please
        feel free to reach out. My contact details can be found on the contacts
        page.
      </p>
      <p>
        Also, if you're interesed, the source code of the project is on my
        github. You can find the link below.
      </p>
      <a href="https://github.com/Ashkan999/how-long-till-a-millionaire">
        <FaGithub className="git-icon" />
      </a>
    </div>
  );
};

export default AboutPage;
