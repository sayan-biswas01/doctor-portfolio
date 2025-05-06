import React from "react";
import logo from "../assets/pictur/logo.jpg";
import "../assets/Css/Header.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-3 p-1">
      <div className="container-fluid  ">
        <a className="navbar-brand fs-3  " href="#">
          <img src={logo} style={{ height: "60px" }} alt="logo" />
          Dr.shaker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation "
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse right " id="navbarNav">
          <ul className="navbar-nav fs-4  ">
            <li className="nav-item ttr">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item ttr">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item ttr">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item ttr">
              <a className="nav-link" href="#contruct">
                Contact
              </a>
            </li>
            <li className="nav-item appo ">
              <a className="nav-link" href="#contruct">
                Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
