import React, { useState } from "react";
//import SecondaryNavBar from "../components/SecondaryNavBar";
import FavNav from "../components/FavNav";
import Card from "../components/Card";
import "./FavoritesPage.css";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";


const FavoritesPage = ({ places }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Predefined categories with true names
  const categories = [
    "restaurant",
    "archaeological-site",
    "amusement park",
    "park",
    "cafe",
    "play-center",
  ];

  const filteredPlaces = places.filter(
    (place) =>
      place.isHeartClicked &&
      (selectedCategory === "" || place.category === selectedCategory)
  );

  return (
    <div className="favorites-page">
      {/* Secondary Navbar
       <SecondaryNavBar />
        */}
     

      {/* Favorites Navbar */}
      <FavNav
        categories={categories}
        onCategorySelect={(category) => setSelectedCategory(category)}
      />
      <h1 className="fav-text">Your Favorites</h1>

      {/* Display filtered places */}
      <div className="favorites-grid">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <Card
              key={place.id}
              id={place.id}
              image={place.image}
              name={place.name}
              locationname={place.locationname}
              rating={place.rating}
            />
          ))
        ) : (
          <p className="no-favorites">No favorites found for this category.</p>
        )}
      </div>
      <Footer BrandName="Visit Me">
                <Footer_cat c1="Restaurants" c1tag1="Family Type" c1tag2="Locations" c1tag3="Generic" c1tag4="Best Sellers" c1tag5="Help" />
                <Footer_cat c1="Archaeological Sites" c1tag1="Pictures" c1tag2="Locations" c1tag3="More Info" c1tag4="Most Visited" c1tag5="Help" />
                <Footer_cat c1="Amusement Parks" c1tag1="Childish" c1tag2="Locations" c1tag3="Reviews" c1tag4="More Info" c1tag5="Help" />
                <Footer_cat c1="Parks" c1tag1="More Info" c1tag2="Locations" c1tag3="Photos" c1tag4="Entertainment" c1tag5="Help" />
                <Footer_cat c1="Cafes" c1tag1="Family Type" c1tag2="Locations" c1tag3="Pictures" c1tag4="Best Sellers" c1tag5="Help" />
                <Footer_cat c1="Play Centers" c1tag1="Support" c1tag2="Locations" c1tag3="Know More" c1tag4="Reviews" c1tag5="Help" />
            </Footer>
    </div>
  );
};

export default FavoritesPage;
