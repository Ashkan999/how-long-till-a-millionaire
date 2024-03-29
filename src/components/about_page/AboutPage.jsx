import React from "react";
import { FaGithub } from "react-icons/fa";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const AboutPage = () => (
  <div className="about-page">
    <ScrollToTopOnMount duration={1500} />
    <h1>About</h1>
    <div className="about-container">
      <p>
        Hi there! I&apos;m Ashkan, a CSE student at the Delft University of
        Technology in the Netherlands. I created this small personal project to
        get myself familier with React JS and to get some practice with the
        library.
      </p>
      <p>
        Thank you for visiting and if you have any feedback or questions, please
        feel free to reach out. My contact details can be found on the contacts
        page.
      </p>
      <p>
        Also, if you&apos;re interesed, the source code of the project is on my
        github. You can find the link below.
      </p>
      <a href="https://github.com/Ashkan999/how-long-till-a-millionaire">
        <FaGithub className="git-icon" />
      </a>
    </div>
  </div>
);

export default AboutPage;
