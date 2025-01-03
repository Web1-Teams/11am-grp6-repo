
import React from "react";

const EditPhoneModal = ({
  currentPhone,
  temporaryPhone,
  setTemporaryPhone,
  onSave,
}) => {
  const handleSave = () => {
    onSave(); // استدعاء فنكشن الحفظ الموجود في ProfilePage --> handleSavePhone
  };

  return (
    <div
      className="modal fade"
      id="editPhoneModal"
      tabIndex="-1"
      aria-labelledby="editPhoneLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-d-hamza">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editPhoneLabel">
              Edit Phone
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setTemporaryPhone(currentPhone)} // إعادة تعيين رقم التلفون للرقم الاصلي عند الإلغاء
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="editPhoneInput" className="form-label">
                  New Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="editPhoneInput"
                  value={temporaryPhone}
                  // تتغير القيمة مع تغير النص المكتوب بسبب
                  //  onChange
                  // لأنها تغير الهاتف المؤقت
                  onChange={(e) => setTemporaryPhone(e.target.value)}
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
              onClick={() => setTemporaryPhone(currentPhone)} // إعادة تعيين رقم التلفون للرقم الاصلي عند الإلغاء
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


export default EditPhoneModal;
