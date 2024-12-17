import React from "react";
import NavBar from "../components/NavBar";
import "./AddPlace.css"

function AddPlace() {
    return (
      <>
      <nav>
        <NavBar
         BrandName="eATMe"
         i1="Home"
         i2="Something Else2"
         i3="Something Else3"
        />
      </nav>
      <br></br><br></br><br></br>
      <div className="addplace_body p-1">
      <div className="container mt-5" style={{ fontFamily: "Arial, sans-serif", color: "#800020" }}>

      
      <div className="shadow p-4 rounded-3 mb-4" style={{ backgroundColor: "#F8F0F3", border: "1px solid #4A1A2C" }}>
        <h2 className="text-center mb-4" style={{ color: "#800020", fontStyle:"strong"}}>Add New Place</h2>
        <form>
          <div className="mb-3">
            <label for="name" className="form-label" style={{ fontWeight: "bold" }}>Name:</label>
            <input type="text" id="name" className="form-control" placeholder="Enter place name" style={{ borderColor: "#4A1A2C" }} />
          </div>

          <div className="mb-3">
            <label for="image" className="form-label" style={{ fontWeight: "bold" }}>Image URL:</label>
            <input type="text" id="image" className="form-control" placeholder="Enter image URL" style={{ borderColor: "#4A1A2C" }} />
          </div>

          <div className="mb-3">
            <label for="tags" className="form-label" style={{ fontWeight: "bold" }}>Tags (comma separated):</label>
            <input type="text" id="tags" className="form-control" placeholder="e.g., cafe, park, museum" style={{ borderColor: "#4A1A2C" }} />
          </div>

          <div className="mb-3">
            <label for="location" className="form-label" style={{ fontWeight: "bold" }}>Location (Google Maps URL):</label>
            <input type="text" id="location" className="form-control" placeholder="https://maps.google.com/..." style={{ borderColor: "#4A1A2C" }} />
          </div>

          <div className="mb-3">
            <label for="category" className="form-label" style={{ fontWeight: "bold" }}>Category:</label>
            <select id="category" className="form-select" placeHolder="select a category"style={{ borderColor: "#4A1A2C" }}>
              <option value ="" selected disabled hidden>Select a category</option>
              <option value="cafe">Cafe</option>
              <option value="park">Park</option>
              <option value="museum">Museum</option>
              <option value="restaurant">Restaurant</option>
              <option value="shopping">Shopping</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="description" className="form-label" style={{ fontWeight: "bold" }}>Short Description:</label>
            <textarea
              id="description"
              className="form-control"
              rows="3"
              placeholder="Write a short description about the place..."
              style={{ borderColor: "#4A1A2C" }}
            ></textarea>
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