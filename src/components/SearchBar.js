import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="grp-6-container container-fluid">
      <form>
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Search for Destination, restaurant ..."
            type="text"
          />
          <button className="btn btn-dark" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
