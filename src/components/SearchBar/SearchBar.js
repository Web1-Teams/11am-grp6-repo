import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import "./SearchBar.css";

const fetchResults = () => {
  const storedResults = JSON.parse(localStorage.getItem("places"));
  return storedResults || [];
};

const SearchBar = () => {
  const navigate = useNavigate(); // إنشاء دالة navigate
  const [mainCategory, setMainCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    // تحميل النتائج من localStorage عند أول تحميل للمكون
    const fetchedResults = fetchResults();
    setResults(fetchedResults);
  }, []);

  const handleCategoryChange = (e) => {
    setMainCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    const filteredResults = fetchResults().filter((item) => {
      const matchesCategory = !mainCategory || item.category === mainCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setResults(filteredResults);
    setIsDropdownVisible(e.target.value.length > 0);
  };

  const handleIconClick = () => {
    searchInputRef.current.focus();
  };

  // معالج النقر على النتيجة
  const handleResultClick = (id) => {
    navigate(`/place/${id}`); // توجيه المستخدم إلى صفحة المكان بناءً على ID
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{position: "relative" }}>
      <div className="search-container">
        <select
          className="SelectSearch"
          value={mainCategory}
          onChange={handleCategoryChange}
        >
          <option className="OptionSearch" value="">
            All
          </option>
          {[
            "park",
            "gaming place",
            "ancient place",
            "cafe",
            "amusement park",
            "restaurant",
          ].map((category) => (
            <option className="SearchOption" key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div style={{ position: "relative", width: "100%" }}>
          <input
            type="text"
            id="search-input"
            ref={searchInputRef}
            placeholder="Search Site"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="search-icon" onClick={handleIconClick}>
            <i className="fa fa-search" />
          </span>

          {isDropdownVisible && (
            <div className="search-dropdown" ref={dropdownRef}>
              {results.length > 0 ? (
                results.map((item, index) => (
                  <div
                    key={index}
                    className="search-result"
                    onClick={() => handleResultClick(item.id)} // إضافة معالج النقر هنا
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="result-image"
                    />
                    <div className="result-details">
                      <h4 className="result-name">{item.name}</h4>
                      <p className="result-location">{item.locationname}</p>
                      <p className="result-rating">Rating: {item.rating}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">No results found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
