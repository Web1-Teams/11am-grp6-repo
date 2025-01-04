//import
import { Link } from "react-router-dom";
import "./NavBar.css";
import React from "react";
import logo from "./img/logo.png";

const NavBar = ({ BrandName, i2, i3, i4 }) => {
  return (
    <div className="container">
      <nav className="grp-6-nav navbar navbar-expand-md navbar-light p-2 bg-light fixed-top">
        <Link className="navbar-brand" to="/HomePage">
          <img src={logo} alt="Logo" className="logo" />
          {BrandName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navi"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-light" id="navi">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/visited-places">
                <i className="fa-solid fa-check" /> Visited Places
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                <i className="fa-solid fa-heart" />
                {i3}
              </Link>
            </li>
            <li className="nav-item ">
              <Link className=" nav-link" to="/calendar">
                <i className="fa-solid fa-calendar-days"></i> {i2}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/event-page">
                <i className="fa-regular fa-calendar-check"></i> Events
              </a>
            </li>
          </ul>
          <Link className="nav-link" to="/about-us">
            <i className="fa-solid fa-users"></i> About Us
          </Link>
          <Link
            className="nav-link"
            to="/add-place"
            style={{ padding: "10px" }}
          >
            <i className="fa-solid fa-plus"></i> Place
          </Link>

          <div className="dropdown ms">
            <button
              className="btn btn-ss btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fa-solid fa-user"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-start">
              <li>
                <Link className="dropdown-item" to="/profile-page">
                  <i className="fa-solid fa-user"></i> My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/feedback">
                  <i className="fa-solid fa-message"></i> FeedBack
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/login"
                  onClick={() => {
                    localStorage.removeItem("currentUser");
                    console.log(
                      "User logged out and currentUser removed from localStorage"
                    );
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Log Out
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
//export
export default NavBar;
