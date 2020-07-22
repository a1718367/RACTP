import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg sticky-top">
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
      >Menu
        
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className={
              window.location.pathname === "/" || window.location.pathname === "/home" || window.location.pathname === "/RACTP"
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
          <li>
          <a className="nav-item nav-link" href="https://github.com/a1718367" target="_blank">Github <i className='fab fa-github'></i></a>
          </li>
          <li>
          <a className="nav-item nav-link" href="https://au.linkedin.com/in/pangszee-ong-5926b05a" target="_blank">Linkedin <i className='fab fa-linkedin'></i></a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
