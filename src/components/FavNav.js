import React from "react";
import "./FavNav.css";

const FavNav = ({ categories, onCategorySelect }) => {
  return (
    <>
    

    <div className="fav-nav">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className="fav-nav-item"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
        <li className="fav-nav-item" onClick={() => onCategorySelect("")}>
          All Categories
        </li>
      </ul>
    </div>
  
   </> 
  );
};

export default FavNav;
