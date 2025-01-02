import React, { useState } from "react";

const EmailModal = ({ currentEmail, onSave }) => {
  const [email, setEmail] = useState(currentEmail);

  const handleSave = () => {
    if (email.trim() === "") {
      onSave(false, "The Email field cannot be left empty.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      onSave(false, "Please enter a valid email.");
      return;
    }

    onSave(true, email);
  };

  return (
    <div
      className="modal fade"
      id="editEmailModal"
      tabIndex="-1"
      aria-labelledby="editEmailLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-d-hamza">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Email</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
