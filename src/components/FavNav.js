import React from "react";
import "./FavNav.css";

const FavNav = ({ categories, onCategorySelect }) => {
  // Array of icons in the same order as the categories
  const categoryIcons = [
    <i className="fa-solid fa-utensils fa-xl "></i>,
    <i className="fa-solid fa-building-wheat "></i>,
    <i className="material-symbols-outlined " style={{ fontSize: "28px" }}>attractions</i>,
    <i className="material-symbols-outlined " style={{ fontSize: "28px" }}>nature</i>,
    <i className="fa-solid fa-mug-saucer "></i>,
    <i className="fa-solid fa-puzzle-piece fa-lg "></i>,
  ];

  return (
    <div className="remaa-fav-nav">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            className="remaa-fav-nav-item"
            onClick={() => onCategorySelect(category)}
          >
            {categoryIcons[index]} {/* Icon */}
            <span className="remaa-fav-nav-text">{category}</span> 
          </li>
        ))}
        <li className="remaa-fav-nav-item" onClick={() => onCategorySelect("")}>
        < i className ="fa-solid fa-icons" />
          All Categories 
        </li>
      </ul>
    </div>
  );
};

export default FavNav;
