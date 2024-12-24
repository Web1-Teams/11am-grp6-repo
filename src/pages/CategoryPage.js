import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card"; // Import Card component
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get the category name from the route

  // Retrieve places from localStorage
  const storedData = JSON.parse(localStorage.getItem("places")) || [];
  const places = Array.isArray(storedData) ? storedData : []; // Ensure it's an array

  // Filter places based on the category name (case-insensitive)
  const filteredPlaces = places.filter(
    (place) =>
      place.category &&
      place.category.toLowerCase().trim() === categoryName.toLowerCase().trim()
  );

  return (
    <div className="category-page container py-4">
      <h1 className="text-center mb-4">{categoryName}</h1>
      {filteredPlaces.length > 0 ? (
        <div className="row">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
            >
              <Card
                id={place.id}
                image={place.image}
                image2={place.image2}
                image3={place.image3}
                name={place.name}
                locationname={place.locationname}
                rating={place.rating}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No places found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
