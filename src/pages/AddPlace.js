import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

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
      <>
      <nav>
        <NavBar BrandName="VisitMe" i1="Home" i2="Calendar" i3="My Favorites" />
      </nav>
      <br></br><br></br><br></br>
      <div className="addplace_body p-1">
      <div className="container mt-5" style={{ fontFamily: "Arial, sans-serif", color: "#800020" }}>

      
      <div className="shadow p-4 rounded-3 mb-4" style={{ backgroundColor: "#F8F0F3", border: "1px solid #4A1A2C" }}>
        <h2 className="text-center mb-4" style={{ color: "#800020", fontStyle:"strong"}}>Add New Place</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="name" className="form-label" style={{ fontWeight: "bold" }}>Name:</label>
            <input 
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter place name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ borderColor: "#4A1A2C" }} />

          </div>

          <div className="mb-3">
            <label for="image" className="form-label" style={{ fontWeight: "bold" }}>Image URL:</label>
            <input

             type="text" 
             id="image" 
             className="form-control"
             value={image}
             onChange={(e) => setImage(e.target.value)}
             required
             placeholder="Enter image URL" 
             style={{ borderColor: "#4A1A2C" }}
             />

          </div>

          <div className="mb-3">
            <label for="tags" className="form-label" style={{ fontWeight: "bold" }}>Tags (comma separated):</label>
            <input 

               type="text"
               id="tags"
               className="form-control"
               value={tags}
               onChange={(e) => setTags(e.target.value)}
               required
               placeholder="e.g., cafe, park, museum" 
               style={{ borderColor: "#4A1A2C" }} 

               />
          </div>

          <div className="mb-3">
            <label for="location" className="form-label" style={{ fontWeight: "bold" }}>Location (Google Maps URL):</label>
            <input
               
            type="url"
            id="location"
            className="form-control" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="https://maps.google.com/..."
            required 
            style={{ borderColor: "#4A1A2C" }} 

               />
          </div>

          <div className="mb-3">
          
          <label className="form-label" for="LocationName" style={{ fontWeight: "bold" }}>Location Name: </label>
          <input  

            id="LocationName"
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
            <label for="category" className="form-label" style={{ fontWeight: "bold" }}>Category:</label>
        
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ borderColor: "#4A1A2C" }}
            required
          >
            <option value="" hidden disabled selected>
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

          <div className="mb-3">
            <label for="description" className="form-label" style={{ fontWeight: "bold" }}>Short Description:</label>
            <textarea
            
              id="description"
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description about the place..."
              required
              style={{ borderColor: "#4A1A2C" }}
            > </textarea>
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: "#4A1A2C", color: "white" }}>Add Place</button>
        </form>
      </div>
    </div>
    </div>
    
      </>
    );
  
      }
 
  export default AddPlace;

  /*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPlace.css";

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

*/


