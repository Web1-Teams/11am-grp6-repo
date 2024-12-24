import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);
    
  const handleSearchToggle = () => {
    setIsSearching((prev) => !prev);
  };
  return (
    <div className={`search-container ${isSearching ? "active" : ""}`}>
    <button className="search-button" onClick={handleSearchToggle}>
      {isSearching ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-search"></i>
      )}
    </button>
    {isSearching && (
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
    )}
  </div>
    
  );
};

export default SearchBar;