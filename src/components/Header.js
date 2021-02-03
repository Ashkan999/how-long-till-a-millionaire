import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="logo">
        <FaMoneyBillWave className="icon" />
        <h3>How Long Till I'm a Millionaire</h3>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/about">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
