
import React from "react";
import EditEmailModal from "./EditEmailModal";
import EditPhoneModal from "./EditPhoneModal";
import EditLocationModal from "./EditLocationModal";
import Section from "../Section";

const UserInfo = ({
  places,
  email,
  temporaryEmail,
  setTemporaryEmail,
  handleSaveEmail,
  phone,
  temporaryPhone,
  setTemporaryPhone,
  handleSavePhone,
  location,
  temporaryLocation, 
  setTemporaryLocation, 
  handleSaveLocation, 
}) => {
  const favoritePlaces = places
    .filter((place) => place.isHeartClicked)
    .slice(0, 3); // أول 6 مفضلات

  // let userForms = localStorage.getItem("userForms");

  // let User = localStorage.getItem("currentUser");
  // let nowUser = JSON.parse(User);

  return (
    <div className="user-info  d-flex flex-column justify-content-start">
      <section className="mt-5">
        <h3 className="Profile-Information text-center mb-4">
          Profile Information
        </h3>
        <div className="row justify-content-center">
          <div className="col">
            <div className="card border-0 shadow-lg">
              <div className="card-body bg-light rounded">
                <ul className="list-group list-group-flush rounded">
                  {/* قسم الايميل */}
                  <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                    <div>
                      <span className="text-muted d-block mb-1 fs-6">
                        Email
                      </span>
                      <strong id="displayEmail">{email}</strong>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-success hover-button"
                      data-bs-toggle="modal"
                      data-bs-target="#editEmailModal"
                    >
                      Edit
                    </button>
                  </li>

                  {/* قسم رقم التلفون */}
                  <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                    <div>
                      <span className="text-muted d-block mb-1 fs-6">
                        Phone Number
                      </span>
                      <strong id="displayPhone">{phone}</strong>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-success hover-button"
                      data-bs-toggle="modal"
                      data-bs-target="#editPhoneModal"
                    >
                      Edit
                    </button>
                  </li>

                  {/* قسم اللوكيشن */}
                  <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                    <div>
                      <span className="text-muted d-block mb-1 fs-6">
                        Location
                      </span>
                      <strong id="displayLocation">{location}.</strong>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-success hover-button"
                      data-bs-toggle="modal"
                      data-bs-target="#editLocationModal"
                    >
                      Edit
                    </button>
                  </li>

                  {/* قسم المفضلة */}
                  <li className="list-group-item py-3">
                    <span className="text-muted d-block mb-1 fs-6">
                      Favorite Category
                    </span>
                    <strong>Cafés</strong>
                  </li>

                  {/* قسم points */}
                  <li className="list-group-item py-3">
                    <span className="text-muted d-block mb-1 fs-6">
                      Points Earned
                    </span>
                    <strong>120</strong>
                  </li>

                  {/* قسم Feedbacks */}
                  <li className="list-group-item py-3">
                    <span className="text-muted d-block mb-1 fs-6">
                      Feedbacks
                    </span>
                    <strong>15</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المودلز   */}
      <EditEmailModal
        currentEmail={email}
        temporaryEmail={temporaryEmail}
        setTemporaryEmail={setTemporaryEmail}
        onSave={handleSaveEmail}
      />

      <EditPhoneModal
        currentPhone={phone}
        temporaryPhone={temporaryPhone}
        setTemporaryPhone={setTemporaryPhone}
        onSave={handleSavePhone}
      />

      <EditLocationModal
        currentLocation={location}
        temporaryLocation={temporaryLocation}
        setTemporaryLocation={setTemporaryLocation}
        onSave={handleSaveLocation}
      />

      {/* <Section
        subtitle="Your Favorites"
        places={favoritePlaces}
        id="your-favorites"
      /> */}
    </div>
  );
};

export default UserInfo;
