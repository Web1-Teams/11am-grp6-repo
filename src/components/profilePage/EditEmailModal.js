
import React from "react";

const EditEmailModal = ({
  currentEmail,
  temporaryEmail,
  setTemporaryEmail,
  onSave,
}) => {
  const handleSave = () => {
    onSave(); // استدعاء فنكشن الحفظ الموجود في ProfilePage  -->handleSaveEmail
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
            <h5 className="modal-title" id="editEmailLabel">
              Edit Email
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setTemporaryEmail(currentEmail)} // إعادة تعيين الايميل للايميل الاصلي عند الإلغاء
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="editEmailInput" className="form-label">
                  New Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="editEmailInput"
                  value={temporaryEmail} //تتغير الفاليو مع تغير النص المكتوب بسبب اون تشينج لانها تغير الايميل المؤقت
                  onChange={(e) => setTemporaryEmail(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setTemporaryEmail(currentEmail)} // إعادة تعيين الايميل للايميل الاصلي عند الإلغاء
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
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

export default EditEmailModal;
