import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="container">
      <nav className="grp-6-nav navbar navbar-expand-md navbar-light p-2 bg-light fixed-top">
        <a className="navbar-brand" href="#">{props.BrandName}</a>
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
              <a className="nav-link" href="#">{props.i1}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.i2}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.i3}</a>
            </li>
          </ul>
          <Link className="nav-link" to="/add-place">
            <i className="fa-solid fa-plus"></i> Place
          </Link>
          <a className="nav-link" href="#about-us">
            <i className="fa-solid fa-address-card"></i> Us
          </a>
          <div className="dropdown ms">
            <button
              className="btn btn-ss btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fa-solid fa-user"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-start">
              <li>
                <a className="dropdown-item" href="#favorites">
                  <i className="fa-solid fa-star"></i> Favorites places
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#settings">
                  <i className="fa-solid fa-gear"></i> Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#notifications">
                  <i className="fa-regular fa-bell"></i> Notifications
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#login">
                  <i className="fa-solid fa-right-to-bracket"></i> Log In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#logout">
                  <i className="fa-solid fa-right-from-bracket"></i> Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

