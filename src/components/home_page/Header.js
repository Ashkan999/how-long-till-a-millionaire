import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { FaMoneyBillWave } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      <Link to="/" className="logo">
        <FaMoneyBillWave className="icon" />
        <p>How Long Till I'm a Millionaire</p>
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

export default Header;
