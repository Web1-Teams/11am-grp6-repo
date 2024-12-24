import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image,image2,image3, name, locationname, rating = 0 }) => {
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
    </div>
  );
};

export default Card;


