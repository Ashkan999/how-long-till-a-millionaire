import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <FaMoneyBillWave className="icon" />
          <h3>How Long Till I'm a Millionaire</h3>
        </div>
      </Link>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navlink-active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="navlink-active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="navlink-active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
