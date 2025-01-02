
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ name, profileImage, onManageProfile }) => {
  return (
    <div className="user-card card text-center border-0">
      <img
        src={profileImage}
        alt="User Profile"
        className="grp-6-pic mx-auto rounded-circle"
      />
      <div className="card-body">
        <h2 className="card-title text-center fw-bold">{name}</h2>
        <div className="row">
          <div className="col-12">
            <button
              id="Manage-btn"
              className="grp-6-btn btn btn-primary mt-3 py-2 px-4 fs-5"
              data-bs-toggle="modal"
              data-bs-target="#manageProfileModal"
              onClick={onManageProfile}
            >
              Manage Profile
            </button>
          </div>
          <div className="col-12">
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button
                id="log-btn"
                className="grp-6-btn btn btn-danger mt-3 px-4 py-2 fs-6"
              >
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
