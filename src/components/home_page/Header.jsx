import PropTypes from "prop-types";
import React, { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaMoneyBillWave } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header({ isHeaderExtended }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={isHeaderExtended ? "header header-extended" : "header"}>
      <Link to="/" className="logo">
        <FaMoneyBillWave className="icon" />
        <p>How Long Till I&apos;m a Millionaire</p>
      </Link>
      <nav
        className={isMobileMenuOpen ? "nav-container-mobile" : "nav-container"}
      >
        {isMobileMenuOpen && (
          <CgClose className="close-menu-icon" onClick={closeMobileMenu} />
        )}
        <ul className="nav-links">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="navlink-active"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="navlink-active"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="navlink-active"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <CgMenu className="mobile-menu-icon" onClick={openMobileMenu} />
    </header>
  );
}

Header.propTypes = {
  isHeaderExtended: PropTypes.bool.isRequired,
};

export default Header;
