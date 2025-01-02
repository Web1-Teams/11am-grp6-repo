import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, name, locationname, rating = 0 }) => {
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
    </div>
  );
};

export default Card;
