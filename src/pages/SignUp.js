import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Modal from "../components/Modal";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loanInputs, setLoanInputs] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassWord: "",
    age: "",
    gender: "",
    cities: "",
    profilePic: "/img/profile-pic.png",
  });

  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);

    const { phoneNumber, password, confirmPassWord, age, email } = loanInputs;

    if (Number(age) < 14 ) {
      setErrorMessage(
        "Age must be older than 14."
      );
      setShowModal(true);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setShowModal(true);
      return;
    }

    if (!/^\d{10,12}$/.test(phoneNumber)) {
      setErrorMessage(
        "Phone Number Format is Incorrect. It should be 10-12 digits."
      );
      setShowModal(true);
      return;
    }

    if (password !== confirmPassWord) {
      setErrorMessage("Passwords do not match");
      setShowModal(true);
      return;
    }


    toast.success("Sign up successful!");

    const existingData = JSON.parse(localStorage.getItem("userForms")) || [];

    const newForm = {
      id: Date.now(),
      ...loanInputs,
    };

    existingData.push(newForm);

    localStorage.setItem("userForms", JSON.stringify(existingData));

    setTimeout(() => {
      navigate("../Login");
    }, 1000);
  }

  function validatePasswordStrength(password) {
    if (password.length < 6) {
      return "Weak: Password must be at least 6 characters.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Weak: Include at least one uppercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Weak: Include at least one number.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Medium: Add a special character (!@#$%^&*).";
    }
    return "Strong";
  }

  const btnIsDisabled =
    !loanInputs.userName ||
    !loanInputs.email ||
    !loanInputs.phoneNumber ||
    !loanInputs.password ||
    !loanInputs.confirmPassWord ||
    !loanInputs.age ||
    !loanInputs.gender ||
    !loanInputs.cities;

  let btnClasses = "";
  if (btnIsDisabled) {
    btnClasses = "disabled";
  }

  return (
    <>
      <div className="form-container mt-5 mb-5" id="SignUpPage">
        <div className="form-card col-9">
          <h2 className="form-title">Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input
                value={loanInputs.userName}
                onChange={(event) => {
                  setLoanInputs({
                    ...loanInputs,
                    userName: event.target.value,
                  });
                }}
                type="text"
                className="form-control"
                placeholder="Enter username"
                id="userName"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={loanInputs.email}
                onChange={(event) => {
                  setLoanInputs({ ...loanInputs, email: event.target.value });
                }}
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile-number-form">Mobile Number</label>
              <input
                value={loanInputs.phoneNumber}
                onChange={(event) => {
                  setLoanInputs({
                    ...loanInputs,
                    phoneNumber: event.target.value,
                  });
                }}
                type="tel"
                className="form-control"
                placeholder="Enter Mobile Number"
                id="mobile-number-form"
              />
            </div>

            <div className="form-group">
              <label htmlFor="passWord">Password</label>
              <input
                value={loanInputs.password}
                onChange={(event) => {
                  const password = event.target.value;
                  setLoanInputs({
                    ...loanInputs,
                    password,
                  });
                  setPasswordStrength(validatePasswordStrength(password));
                }}
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="passWord"
                required
              />
              <small className="text-muted">{passwordStrength}</small>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassWord">Confirm Password</label>
              <input
                value={loanInputs.confirmPassWord}
                onChange={(event) => {
                  setLoanInputs({
                    ...loanInputs,
                    confirmPassWord: event.target.value,
                  });
                }}
                type="password"
                className="form-control"
                placeholder="Re-Enter password"
                id="confirmPassWord"
                required
              />
            </div>

            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="age">Age</label>
                <input
                  value={loanInputs.age}
                  onChange={(event) => {
                    setLoanInputs({ ...loanInputs, age: event.target.value });
                  }}
                  type="number"
                  className="form-control"
                  placeholder="Enter Age"
                  id="age"
                />
              </div>

              <div className="form-group col-6">
                <label className="mb-1">Gender</label>
                <select
                  value={loanInputs.gender}
                  onChange={(event) => {
                    setLoanInputs({
                      ...loanInputs,
                      gender: event.target.value,
                    });
                  }}
                  name="gender"
                  id="gender-selection"
                  className="form-control"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="cityForm" className="col-6">
                Choose City
              </label>
              <select
                value={loanInputs.cities}
                onChange={(event) => {
                  setLoanInputs({ ...loanInputs, cities: event.target.value });
                }}
                id="cities"
                name="cities"
                className="form-control col-6 mx-2"
              >
                <option value="">Select City</option>
                <option value="Tourist">Tourist</option>
                <option value="Nablus">Nablus</option>
                <option value="Jenin">Jenin</option>
                <option value="Tulkarm">Tulkarm</option>
                <option value="Ramallah">Ramallah</option>
                <option value="Salfeet">Salfeet</option>
                <option value="Tubas">Tubas</option>
                <option value="Jericho">Jericho</option>
                <option value="Hebron">Hebron</option>
                <option value="Bethlehem">Bethlehem</option>
                <option value="Jerusalem">Jerusalem</option>
              </select>
            </div>

            <button
              onClick={handleFormSubmit}
              disabled={btnIsDisabled}
              type="submit"
              className={`btn btn-primary w-100 mt-3 ${btnClasses}`}
            >
              Sign Up
            </button>
          </form>
          <br />

          <div className="form-title mb-0">
            <Link to="/login" id="Already-User-Login">
              Already a user?
            </Link>
          </div>
        </div>
        <Modal
          errorMessage={errorMessage}
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default SignUp;
