import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export const categoryTags = {
  "park": [
    "have a parking",
    "suitable for people with special needs",
    "suitable for old people",
    "internet",
    "foods and drinks",
    "family only",
    "family section",
    "entrance fee",
    "suitable for barbecue",
    "play ground for children",
    "Open 24/7",
  ],
  "play-center": [
    "have a parking",
    "bowling",
    "billiard",
    "VR",
    "card games",
    "board games",
    "cyber",
    "suitable for people with special needs",
    "foods and drinks",
    "Open 24/7",
  ],
  "archaeological-site": [
    "have a parking",
    "suitable for people with special needs",
    "foods and drinks",
    "internet",
    "there will be physical activity",
    "suitable for children",
    "suitable for old people",
    "markets",
    "entrance fee",
    "antique souvenirs shop",
    "Open 24/7",
  ],
  "cafe": [
    "sweets",
    "family only",
    "family section",
    "suitable for work and study",
    "shows matches",
    "suitable for people with special needs",
    "have a parking",
    "card games",
    "Open 24/7",
  ],
  "amusement park": [
    "water park",
    "cinema",
    "playing park",
    "have a parking",
    "foods and drinks",
    "Open 24/7",
  ],
  "restaurant": [
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
    "home made dishes",
    "Open 24/7",
  ],
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

  const isValidURL = (url) => {
    const pattern = new RegExp(
      "^(https?://)?(www.)?[a-zA-Z0-9-]+(\\.[a-zA-Z]{2,})+(:[0-9]+)?(/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$",
      "i"
    );
    return pattern.test(url);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    const initialTags = categoryTags[selectedCategory]?.reduce(
      (acc, tag) => ({ ...acc, [tag]: false }),
      {}
    );
    setTags(initialTags || {});
  };

  const handleTagChange = (tag) => {
    setTags((prevTags) => ({
      ...prevTags,
      [tag]: !prevTags[tag],
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
      rating: Math.floor(Math.random() * 21) + 80,
      isHeartClicked: false,
      isCheckClicked: false,
      ...tags,
    };

    onAddPlace(newPlace);
    navigate("/HomePage");
  };

  return (
    <>
      <nav>
        <NavBar BrandName="VisitMe" i1="Home" i2="Calendar" i3="My Favorites" />
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <div className="addplace_body p-1">
        <div
          className="container mt-5 p-3"
          style={{ fontFamily: "Arial, sans-serif", color: "#800020" }}
        >
          <div
            className="shadow p-5 rounded-3 mb-4 "
            style={{
              backgroundColor: "#F8F0F3",
              border: "1px solid #4A1A2C",
            }}
          >
            <h2
              className="text-center mb-4"
              style={{ color: "#800020", fontStyle: "strong" }}
            >
              Add New Place
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  for="name"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter place name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ borderColor: "#4A1A2C" }}
                />
              </div>

              <div className="mb-3">
                <label
                  for="image"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Image URL 1:
                </label>
                <input
                  type="text"
                  id="image"
                  className="form-control"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Enter image URL"
                  style={{ borderColor: "#4A1A2C" }}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  for="image"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Image URL 2:
                </label>
                <input
                  type="text"
                  id="image"
                  className="form-control"
                  value={image2}
                  onChange={(e) => setImage2(e.target.value)}
                  placeholder="Optional"
                  style={{ borderColor: "#4A1A2C" }}
                />
              </div>
              <div className="mb-3">
                <label
                  for="image"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Image URL 3:
                </label>
                <input
                  type="text"
                  id="image"
                  className="form-control"
                  value={image3}
                  onChange={(e) => setImage3(e.target.value)}
                  placeholder="Optional"
                  style={{ borderColor: "#4A1A2C" }}
                />
              </div>

              <div className="mb-3">
                <label
                  for="location"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Location (Google Maps URL):
                </label>
                <input
                  type="url"
                  id="location"
                  className="form-control"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="https://maps.google.com/..."
                  style={{ borderColor: "#4A1A2C" }}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  className="form-label"
                  for="locationName"
                  style={{ fontWeight: "bold" }}
                >
                  Location Name:{" "}
                </label>

                <input
                  id="locationName"
                  className="form-control"
                  type="text"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  placeholder="e.g., City Center, Downtown"
                  style={{ borderColor: "#4A1A2C" }}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  for="category"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Category:
                </label>
                <select
                  className="form-select"
                  value={category}
                  onChange={handleCategoryChange}
                  style={{ borderColor: "#4A1A2C" }}
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

                {category && (
                  <div className="text-center">
                    <h3>Select Tags:</h3>
                    <div className="d-flex flex-wrap justify-content-center">
                      {categoryTags[category]?.map((tag, index) => {
                        const checkboxId = `checkbox-${index}`; // Unique ID for each checkbox
                        return (
                          <div key={tag} className="m-2">
                            <input
                              id={checkboxId} // unique ID for each checkbox
                              type="checkbox"
                              className="me-1"
                              checked={tags[tag] || false}
                              onChange={() => handleTagChange(tag)}
                            />
                            <label
                              className="d-flex align-items-center"
                              for={checkboxId} //The choosen label with coorect the checkbox
                            >
                              {tag}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label
                  for="description"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Short Description:
                </label>
                <textarea
                  id="description"
                  className="form-control"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write a short description about the place..."
                  required
                  style={{ borderColor: "#4A1A2C" }}
                >
                  {" "}
                </textarea>
              </div>

              <div className="mb-3">
                <label
                  for="longDescription"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Long Description:
                </label>
                <textarea
                  id="longDescription"
                  className="form-control"
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                  placeholder="Write a detailed description about the place..."
                  rows="5"
                  style={{ borderColor: "#4A1A2C" }}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: "#4A1A2C", color: "white" }}
              >
                Add Place
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPlace;
