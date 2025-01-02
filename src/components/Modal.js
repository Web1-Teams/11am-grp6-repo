import React, { useEffect } from "react";

export default function Modal({ isVisible, errorMessage = null, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3400);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={`modal ${isVisible ? "show" : ""}`}
      style={{ display: isVisible ? "block" : "none" }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              style={{ color: errorMessage ? "red" : "green" }}
            >
              {errorMessage ? "Error" : "Success"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p style={{ color: errorMessage ? "red" : "green" }}>
              {errorMessage ||
                "You are now a member of our website .... Welcome"}
            </p>
          </div>
          <div className="modal-footer">
            <button
              style={{
                background: "#800020",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
                margin: "5px",
                fontSize: "1rem",
              }}
              type="button"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
