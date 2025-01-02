import React from "react";

const ChangePasswordModal = ({ onSavePassword }) => {
  return (
    <div
      className="modal fade"
      id="changePasswordModal"
      tabIndex="-1"
      aria-labelledby="changePasswordLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-d-hamza ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="changePasswordLabel">
              Change Password
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={onSavePassword}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
