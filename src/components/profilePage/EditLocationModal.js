
import React from "react";


const EditLocationModal = ({
  currentLocation,
  temporaryLocation,
  setTemporaryLocation,
  onSave,
}) => {
  const handleSave = () => {
    onSave(); // استدعاء فنكشن الحفظ الموجود في ProfilePage --> handleSaveLocation
  };

  return (
    <div
      className="modal fade"
      id="editLocationModal"
      tabIndex="-1"
      aria-labelledby="editLocationLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog m-d-hamza">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editLocationLabel">
              Edit Location
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setTemporaryLocation(currentLocation)} // إعادة تعيين اللوكيشن للوكيشن الاصلي عند الإلغاء
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="editLocationInput" className="form-label">
                  New Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editLocationInput"
                  value={temporaryLocation} // تتغير القيمة مع تغير النص المكتوب بسبب 
                  // onChange 
                  // لأنها تغير الموقع المؤقت
                  onChange={(e) => setTemporaryLocation(e.target.value)}
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
              onClick={() => setTemporaryLocation(currentLocation)} // إعادة تعيين اللوكيشن للوكيشن الاصلي عند الإلغاء
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

export default EditLocationModal;
