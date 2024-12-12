import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addplace.css";

const AddPlace = ({ onAddPlace }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [locationName, setLocationName] = useState("");
  const [category, setCategory] = useState(""); // New category state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlace = {
      id: Date.now(),
      category,
      name,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
      location,
      locationname: locationName,
      description,
      rating: Math.floor(Math.random() * 21) + 80, // Random rating between 80-100
      isHeartClicked: false,
      isCheckClicked: false,
    };

    onAddPlace(newPlace); // Pass new place to parent state
    navigate("/"); // Redirect to homepage
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
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tags (comma separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
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
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="park">Park</option>
            <option value="restaurant">Restaurant</option>
            <option value="amusement park">Amusement Park</option>
            <option value="ancient place">Ancient Place</option>
            <option value="gaming place">Gaming Place</option>
            <option value="cafe">Cafe</option>
          </select>
        </div>
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
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default AddPlace;
