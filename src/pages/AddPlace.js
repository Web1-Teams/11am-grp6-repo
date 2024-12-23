import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlace.css";

const categoryTags = {
  park: [
    "have a parking",
    "suitable for people with special needs",
    "suitable for old people",
    "internet",
    "foods and drinks",
    "family only",
    "family section",
    "entrance fee",
    "suitable for barbecue",
    "play ground for children"
  ],
  "gaming place": [
    "have a parking",
    "bowling",
    "billiard",
    "VR",
    "card games",
    "board games",
    "cyber",
    "suitable for people with special needs",
    "foods and drinks"
  ],
  "ancient place": [
    "have a parking",
    "suitable for people with special needs",
    "foods and drinks",
    "internet",
    "there will be physical activity",
    "suitable for children",
    "suitable for old people",
    "markets",
    "entrance fee",
    "antique souvenirs shop"
  ],
  cafe: [
    "sweets",
    "family only",
    "family section",
    "suitable for work and study",
    "shows matches",
    "suitable for people with special needs",
    "have a parking",
    "card games"
  ],
  "amusement park": ["water park", "cinema"],
  restaurant: [
    "vegetarian food",
    "fast food",
    "traditional dishes",
    "grills",
    "sea food",
    "play ground for children",
    "have a parking",
    "suitable for people with special needs",
    "suitable for old people",
    "family only",
    "family section",
    "home made dishes"
  ]
};

const AddPlace = ({ onAddPlace }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [locationName, setLocationName] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState({});
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // Initialize tag states for the selected category
    const initialTags = categoryTags[selectedCategory]?.reduce(
      (acc, tag) => ({ ...acc, [tag]: false }),
      {}
    );
    setTags(initialTags || {});
  };

  const handleTagChange = (tag) => {
    setTags((prevTags) => ({
      ...prevTags,
      [tag]: !prevTags[tag]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlace = {
      id: Date.now(),
      category,
      name,
      image,
      image2,
      image3,
      location,
      locationname: locationName,
      description,
      longDescription,
      rating: Math.floor(Math.random() * 21) + 80, // Random rating between 80-100
      isHeartClicked: false,
      isCheckClicked: false,
      ...tags // Spread individual tag states
    };

    onAddPlace(newPlace);
    navigate("/");
  };

  return (
    <div className="add-place">
      <h2>Add New Place</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL 1:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL 2:</label>
          <input
            type="text"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
            placeholder="Optional"
          />
        </div>
        <div>
          <label>Image URL 3:</label>
          <input
            type="text"
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
            placeholder="Optional"
          />
        </div>
        <div>
          <label>Location (Google Maps URL):</label>
          <input
            type="url"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="https://maps.google.com/..."
            required
          />
        </div>
        <div>
          <label>Location Name:</label>
          <input
            type="text"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            placeholder="e.g., City Center, Downtown"
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {Object.keys(categoryTags).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {category && (
          <div>
            <h3>Select Tags:</h3>
            {categoryTags[category]?.map((tag) => (
              <div key={tag}>
                <label>
                  <input
                    type="checkbox"
                    checked={tags[tag] || false}
                    onChange={() => handleTagChange(tag)}
                  />
                  {tag}
                </label>
              </div>
            ))}
          </div>
        )}
        <div>
          <label>Short Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a short description about the place..."
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label>Long Description:</label>
          <textarea
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            placeholder="Write a detailed description about the place..."
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default AddPlace;