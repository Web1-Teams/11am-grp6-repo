import "./CardList.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // مكتبة uuid
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PropTypes from "prop-types";
import CuraselCard from "./CuraselCard";

function CardList({ title, location, rating }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const uniqueId = uuidv4(); // إنشاء معرف فريد لكل بطاقة

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className="card">
      <div className="favorite-icon">
        <i className="fa fa-heart"></i>
      </div>
      <CuraselCard
        id={uniqueId}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <div className="card-title">
        <h4>{title}</h4>
        <div className="details">
          <p>{location}</p>
        </div>
        <div className="rating-box">
          <div className="rating">
            <span className="star">★</span>
            <span className="rating-value">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CardList;
