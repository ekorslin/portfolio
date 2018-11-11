import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      e.Korslin
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <span className="navbar-text ml-auto">
    <a href="https://github.com/ekorslin"><i className="fab fa-github"></i></a><a href="https://www.linkedin.com/in/eric-korslin-06144b37/"><i className="fab fa-linkedin"></i></a><a href="https://www.facebook.com/eric.korslin.54"><i className="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/ekorslin2/"><i className="fab fa-instagram"></i></a><a href="https://twitter.com/EricKorslin"><i className="fab fa-twitter"></i></a>
   </span>
  </nav>

);

export default Navbar;
