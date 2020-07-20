import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        PangSzee Ong
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className={
              window.location.pathname === "/" || window.location.pathname === "/home"
              ? "nav-link active"
              : "nav-link"}
               to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className={
              window.location.pathname === "/project" ? "nav-link active" : "nav-link"}
               to="/project">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"} 
            to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
