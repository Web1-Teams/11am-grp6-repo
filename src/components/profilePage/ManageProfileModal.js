import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const ManageProfileModal = ({
  userName,
  profilePicture,
  onSaveProfile,
  onPictureChange,
  temporaryUserName,
  setTemporaryUserName,
  deleteUserFromForms,
  userId,
}) => {
  const handleSave = () => {
    onSaveProfile(); // استدعاء فنكشن الحفظ الموجود في ProfilePage --> handleSaveProfile
  };
  const handleDeleteAccount = (userId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete your account?</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button
                style={{
                  padding: "5px 10px",
                  background: "#ff6b6b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // إغلاق المودل
                  const modalElement =
                    document.getElementById("manageProfileModal");
                  const modalInstance =
                    window.bootstrap.Modal.getInstance(modalElement);
                  if (modalInstance) {
                    modalInstance.hide();
                  }
                  deleteUserFromForms(userId);
                  localStorage.removeItem("currentUser");
                  toast.dismiss(t.id);
                  console.log("Account deleted successfully.");
                  toast.success("Your Account has been deleted successfully!");
                }}
              >
                Yes
              </button>
            </Link>
            <button
              style={{
                padding: "5px 10px",
                background: "#ddd",
                color: "#333",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => toast.dismiss(t.id)} // إغلاق التوست
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: Infinity } // بضل التوست مفتوح
    );
  };
  return (
    <div
      className="modal fade"
      id="manageProfileModal"
      tabIndex="-1"
      aria-labelledby="manageProfileLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-d-hamza">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="manageProfileLabel">
              Manage Profile
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setTemporaryUserName(userName);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  value={temporaryUserName}
                  onChange={(e) => setTemporaryUserName(e.target.value)}
                />
              </div>
              <hr />
              {/* Profile Picture */}
              <div className="mb-3">
                <label htmlFor="profilePicture" className="form-label">
                  Profile Picture
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={onPictureChange}
                />
                <img
                  id="profilePicturePreview"
                  src={profilePicture}
                  className="img-thumbnail mt-3"
                  alt="Profile Preview"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <hr />
              {/* Password Section */}
              <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                  placeholder="********"
                  disabled
                />
                <button
                  type="button"
                  className="btn btn-link p-0 mt-2"
                  data-bs-toggle="modal"
                  data-bs-target="#changePasswordModal"
                >
                  Change Password
                </button>
              </div>

              {/* زر الحذف */}
              <hr />
              <button
                className="btn btn-danger btn-sm"
                onClick={(e) => {
                  e.preventDefault(); // منع إعادة التحميل الافتراضية
                  handleDeleteAccount(userId); // استدعاء الحذف
                }}
              >
                Delete Account
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {
                setTemporaryUserName(userName);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfileModal;
