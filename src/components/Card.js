import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import Grp6Popup from "./ShareItem/Grp6Popup";
import CopyLink from "./ShareItem/CopyLink";


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

const Card = ({ id, image,image2,image3, name, locationname, rating = 0 }) => {
  const [isShareClicked, setIsShareClicked] = useState(false);


  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/place/${id}`);
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

  const updateLocalStorage = (updatedPlace) => {
    const storedState = JSON.parse(localStorage.getItem("places")) || [];
    const updatedState = storedState.map((item) =>
      item.id === updatedPlace.id ? { ...item, ...updatedPlace } : item
    );
    localStorage.setItem("places", JSON.stringify(updatedState));
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    const newHeartState = !isHeartClicked;
    setIsHeartClicked(newHeartState);
    updateLocalStorage({ id, isHeartClicked: newHeartState, isCheckClicked });
  };

  const handleCheckClick = (e) => {
    e.stopPropagation();
    const newCheckState = !isCheckClicked;
    setIsCheckClicked(newCheckState);
    updateLocalStorage({ id, isHeartClicked, isCheckClicked: newCheckState });
  };

  const renderStars = () => {
    const totalStars = 5;
    const starPercentage = (rating / 100) * totalStars; // Rating value in terms of stars

    return Array.from({ length: totalStars }, (_, index) => {
      const fillAmount = Math.min(1, Math.max(0, starPercentage - index));
      const gradient = `linear-gradient(to right, #f39c12 ${fillAmount * 100}%, #ccc ${fillAmount * 100}%)`;

      return (
        <div
          key={index}
          className="star-container"
          style={{
            position: "relative",
            width: "20px",
            height: "20px",
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: gradient,
              position: "absolute",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#ccc", // Default gray for unfilled areas
              position: "absolute",
              zIndex: -1,
            }}
          ></div>
        </div>
      );
    });
  };

  return (
    <div className="place" onClick={handleCardClick}>
      <img src={image} alt={name} className="place-image" />
      <h2 className="place-name">{name}</h2>
      <div className="place-location">
        <span>{locationname}</span>
      </div>
      <div className="place-rating">{renderStars()}</div>
      <div className="place-buttons">
        <button
          className={`circular-btn ${isHeartClicked ? "active" : ""}`}
          onClick={handleHeartClick}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
        <button
          className={`circular-btn ${isCheckClicked ? "active-check" : ""}`}
          onClick={handleCheckClick}
        >
          <i className="fa-solid fa-circle-check"></i>
        </button>
        <button
          className={`circular-btn ${isShareClicked ? "active-share" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsShareClicked(!isShareClicked);
          }}
        >
          <i className="fa-solid fa-link"></i>
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
