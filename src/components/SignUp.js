//imports
//functions
//exports

import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css"; // Import the CSS file

const SignUp = () => {
  return (
    <>
      <div className="form-container mt-5 mb-5" id="SignUpPage">
        <div className="form-card col-9">
          <h2 className="form-title">Sign Up</h2>
          <form>
            <div className="form-group">
              <label for="userName">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                id="userName"
                required
              />
            </div>
            <div className="form-group">
              <label for="email" required>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
              />
            </div>

            <div className="form-group">
              <label for="mobile-number-form">Mobile Number (Optinal)</label>
              <input
                type="tel"
                className="form-control"
                pattern="[0]-[5]-[0-9]{8}"
                placeholder="Enter Mobile Number"
                id="mobile-number-form"
                required
              />
            </div>

            <div className="form-group">
              <label for="passWord">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="passWord"
                required
              />
            </div>

            <div className="form-group">
              <label for="confirmPassWord"> Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-Enter password"
                id="confirmPassWord"
                required
              />
            </div>

            <div className="row">
              <div className="form-group col-6">
                <label for="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Age"
                  id="age"
                />
              </div>

              <div className="form-group col-6">
                <label className="mb-1">Gender</label>
                <br></br>
                <select
                  name="gender"
                  id="gender-selection"
                  className="form-control"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="form-group row ">
              <label id="cityForm" className="col-6">
                Choose City
              </label>

              <select
                id="cities"
                name="cities"
                className="form-control col-6 mx-2"
              >
                <option value="Tourist">Tourist</option>
                <option value="Nablus">Nablus</option>
                <option value="Jenin">Jenin</option>
                <option value="Tulkarm">Tulkarm</option>
                <option value="Ramallah">Ramallah</option>
                <option value="Salfeet">Salfeet</option>
                <option value="Salfeet">Tubas</option>
                <option value="Salfeet">Jericho</option>
                <option value="Salfeet">Hebron</option>
                <option value="Salfeet">Bethlehem</option>
                <option value="Salfeet">Jerusalem</option>
              </select>
            </div>

            <Link
              to="../login"
              type="submit"
              className="btn btn-primary w-100 mt-3"
            >
              Sign Up
            </Link>
          </form>
          <br></br>

          <div className="form-title mb-0">
            <Link to="../login" id="Already-User-Login">
              Already a user ?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
