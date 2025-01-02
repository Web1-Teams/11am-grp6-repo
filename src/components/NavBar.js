//import
import { Link } from "react-router-dom";
import "./NavBar.css";
import React from "react";
import logo from './img/logo.png';
import SearchBar from "./SearchBar";



const NavBar = ({ BrandName, i2, i3,i4 }) => {
  const [isSearching, setIsSearching] = useState(false);




  return (
    <div className="container">
      <nav className="grp-6-nav navbar navbar-expand-md navbar-light p-2 bg-light fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
          {BrandName}
        </Link>

        <SearchBar />

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
              <a className="nav-link" href="calendar">
                <i className="fa-solid fa-calendar" />
                {i2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="love">
                <i class="fa-solid fa-heart" />
                {i3}
              </a>
            </li>
          </ul>
          <Link className="nav-link" to="/about-us">
            <i className="fa-solid fa-address-card"></i> Us
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
                <Link className="dropdown-item" to="/settings">
                  <i className="fa-solid fa-gear"></i> Settings
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#notifications">
                  <i className="fa-solid fa-bell"></i> Notifications
                </a>
              </li>

              <li>
                <Link className="dropdown-item" to="/Login">
                  <i className="fa-solid fa-right-to-bracket"></i> Log In
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#logout">
                  <i className="fa-solid fa-right-from-bracket"></i> Log Out
                </a>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
//export
export default NavBar;
