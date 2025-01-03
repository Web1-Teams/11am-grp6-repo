import React from "react";
import "./SubNavBar.css";

const SubNavBar = ({ tags, activeTags, toggleTag }) => {
  return (
    <div className="sub-navbar">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`subnav-tag ${activeTags.includes(tag) ? "active" : ""}`}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default SubNavBar;
