
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import { categoryTags } from "../pages/AddPlace"; 
import "./CategoryPage.css";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";


const CategoryPage = () => {
  const { categoryName } = useParams();
  const [activeTags, setActiveTags] = useState([]);

 
  const storedData = JSON.parse(localStorage.getItem("places")) || [];
  const places = Array.isArray(storedData) ? storedData : [];
  
  const tags = categoryTags[categoryName] || [];

  // Filter places based on category and active tags
  const filteredPlaces = places.filter((place) => {
    if (
      place.category &&
      place.category.toLowerCase().trim() === categoryName.toLowerCase().trim()
    ) {
      return activeTags.every((tag) => place[tag]); // Ensure all active tags are true
    }
    return false;
  });


  const toggleTag = (tag) => {
    setActiveTags((prevActiveTags) =>
      prevActiveTags.includes(tag)
        ? prevActiveTags.filter((t) => t !== tag)
        : [...prevActiveTags, tag]
    );
  };
  
  return (
    <div className="all-container">
      <NavBar BrandName="VisitMe" i1="Home" i2="Calendar" i3="My Favorites" />

      <SubNavBar tags={tags} activeTags={activeTags} toggleTag={toggleTag} />

      <div className="category-page container py-4">
        <h1 className="cat-text mb-4">{categoryName}s</h1>
        {filteredPlaces.length > 0 ? (
          <div className="row">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
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
          <p className="text">No places found in this category.</p>
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

export default CategoryPage;
