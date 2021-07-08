import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            LOUDENT EVENTS
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="#services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="#services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="#about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                className="p-6"
                exact
                to="#contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
