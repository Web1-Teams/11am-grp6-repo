import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const UserCard = ({ name, profileImage, onManageProfile }) => {
  // let User = localStorage.getItem("currentUser");
  // let nowUser = JSON.parse(User);

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
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  console.log(
                    "User logged out and currentUser removed from localStorage"
                  );
                  toast.success("User logged out successfully!", {
                    position: "top-center",
                  });
                }}
              >
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default UserCard;
