import React from "react";
import packageJson from "../../../package.json";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p>© 2021 HLTYAM. All Rights Reserved.</p>
      <p>current version: {packageJson.version}</p>
      <a href="https://github.com/Ashkan999/how-long-till-a-millionaire">
        <FaGithub className="git-icon" />
      </a>
    </div>
  );
}

export default Footer;
