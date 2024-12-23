import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import Grp6Popup from "./Grp6Popup";
import CopyLink from "./CopyLink";

// Popup Component with Close Button
const Popup = ({ children, onClose }) => {
  return (
    <>
      {/* Background overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 999,
          pointerEvents: "none", // إضافة هذه السطر لمنع التفاعل
        }}
        onClick={onClose} // Close Popup when clicking outside
      ></div>

      {/* Popup container */}
      <div
        style={{
          width: "90%",
          height: "80%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          padding: "20px",
          zIndex: 999,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-10px",
            right: "20px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "50px", // Larger button
            color: "#800020", // Color of the button
            cursor: "pointer",
          }}
        >
          &times; {/* Close symbol */}
        </button>
        {children}
      </div>
    </>
  );
};

const Card = ({ id, image, name, locationname, rating = 0 }) => {
  const [isShareClicked, setIsShareClicked] = useState(false); // State for Popup
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/place/${id}`); // Navigate to PlacePage with the place ID
  };

  const [isHeartClicked, setIsHeartClicked] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const place = storedState.find((item) => item.id === id);
    return place?.isHeartClicked || false;
  });

  const [isCheckClicked, setIsCheckClicked] = useState(() => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const place = storedState.find((item) => item.id === id);
    return place?.isCheckClicked || false;
  });

  // Function to update localStorage
  const updateLocalStorage = (updatedPlace) => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const updatedState = storedState.map((item) =>
      item.id === updatedPlace.id ? { ...item, ...updatedPlace } : item
    );
    localStorage.setItem("places", JSON.stringify(updatedState));
  };

  // Handlers for toggling states
  const handleHeartClick = (e) => {
    e.stopPropagation(); // Prevent card click
    const newHeartState = !isHeartClicked;
    setIsHeartClicked(newHeartState);
    updateLocalStorage({ id, isHeartClicked: newHeartState, isCheckClicked });
  };

  const handleCheckClick = (e) => {
    e.stopPropagation(); // Prevent card click
    const newCheckState = !isCheckClicked;
    setIsCheckClicked(newCheckState);
    updateLocalStorage({ id, isHeartClicked, isCheckClicked: newCheckState });
  };

  return (
    <div className="place" onClick={handleCardClick}>
      {/* Card Image */}
      <img src={image} alt={name} className="place-image" />

      {/* Card Name */}
      <h2 className="place-name">{name}</h2>

      {/* Location */}
      <div className="place-location">
        <span>{locationname}</span>
      </div>

      {/* Card Rating */}
      <div className="place-rating">
        <span>{`Rating: ${rating}%`}</span>
      </div>

      {/* Buttons */}
      <div className="place-buttons">
        {/* Heart Button */}
        <button
          className={`circular-btn  ${isHeartClicked ? "active" : ""}`}
          onClick={handleHeartClick} // Use defined function
        >
          <i class="fa-solid fa-heart"></i>
        </button>

        {/* Visited Button */}
        <button
          className={`circular-btn   ${isCheckClicked ? "active-check" : ""}`}
          onClick={handleCheckClick} // Use defined function
        >
          <i class="fa-solid fa-circle-check"></i>
        </button>

        {/* Share Button */}
        <button
          className={`circular-btn  ${isShareClicked ? "active-share" : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            setIsShareClicked(!isShareClicked);
          }}
        >
          <i class="fa-solid fa-link"></i>
        </button>
      </div>

      {/* Popup for Share */}
      {isShareClicked && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="popup-container"
        >
          <Popup onClose={() => setIsShareClicked(false)}>
            <div>
              <h5 style={{ fontWeight: "700" }}>Share Modal</h5>
              <hr />
              <h6 style={{ fontWeight: "600" }}>Share this Link Via</h6>
              <Grp6Popup shareUrl={`${window.location.origin}/place/${id}`} />
              <div style={{ position: "relative", height: "200px" }}></div>
              <CopyLink link={`${window.location.origin}/place/${id}`} />
            </div>
          </Popup>
        </div>
      )}
    </div>
  );
};

export default Card;
