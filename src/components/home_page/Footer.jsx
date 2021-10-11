import React from "react";
import { FaGithub } from "react-icons/fa";
import packageJson from "../../../package.json";

const Footer = () => (
  <div className="footer">
    <p>© 2021 HLTIM. All Rights Reserved.</p>
    <p>Current version: {packageJson.version}</p>
    <a href="https://github.com/Ashkan999/how-long-till-a-millionaire">
      <FaGithub className="git-icon" />
    </a>
  </div>
);

export default Footer;
