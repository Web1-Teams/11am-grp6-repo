import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, name, locationname, rating = 0 }) => {
  const [isShareClicked, setIsShareClicked] = useState(false);

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
          className={`circular-btn heart-btn ${isHeartClicked ? "active" : ""}`}
          onClick={handleHeartClick} // Use defined function
        >
          ❤️
        </button>

        {/* Visited Button */}
        <button
          className={`circular-btn check-btn ${isCheckClicked ? "active" : ""}`}
          onClick={handleCheckClick} // Use defined function
        >
          ✔️
        </button>

        {/* Share Button */}
        <button
          className={`circular-btn share-btn ${isShareClicked ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            setIsShareClicked(!isShareClicked);
          }}
        >
          🔗
        </button>
      </div>
    </div>
  );
};

export default Card;
