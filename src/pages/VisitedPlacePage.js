import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";
import "./VisitedPlacePage.css";
import FavNav from "../components/FavNav";

const VisitedPlacePage = () => {
  const [places, setPlaces] = useState([]); // تحميل الأماكن من localStorage
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "restaurant",
    "archaeological-site",
    "park",
    "cafe",
    "play-center",
  ];

  // تحميل الأماكن من localStorage عند فتح الصفحة
  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("places")) || [];
    setPlaces(storedPlaces);
  }, []);

  // تصفية الأماكن بناءً على إذا كانت Visited (isCheckClicked) والتصنيف المحدد
  const filteredPlaces = places.filter((place) => {
    if (!place.isCheckClicked) return false; // استثناء الأماكن غير الـ "Visited"
    if (selectedCategory === "") return true; // إذا لم يتم تحديد تصنيف، عرض جميع الأماكن الـ "Visited"
    return place.category === selectedCategory; // عرض الأماكن التي تتبع التصنيف المحدد
  });

  return (
    <div className="Visited-body">
      <NavBar BrandName="VisitMe" i2="Calendar" i3="My Favorites" />
      <FavNav
        categories={categories}
        onCategorySelect={(category) => setSelectedCategory(category)}
      />
      <div className="Title">Visited Places</div>
      <div className="visited-places-container">
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
          <p className="no-visited-places">
            No visited places found for this category.
          </p>
        )}  
      </div>
      <Footer BrandName="VisitMe">
        <Footer_cat c1="Restaurants" c1tag1="Family Type" c1tag2="Locations" c1tag3="Generic" c1tag4="Best Sellers" c1tag5="Help" />
        <Footer_cat c1="Archaeological Sites" c1tag1="Pictures" c1tag2="Locations" c1tag3="More Info" c1tag4="Most Visited" c1tag5="Help" />
        <Footer_cat c1="Parks" c1tag1="More Info" c1tag2="Locations" c1tag3="Photos" c1tag4="Entertainment" c1tag5="Help" />
        <Footer_cat c1="Cafes" c1tag1="Family Type" c1tag2="Locations" c1tag3="Pictures" c1tag4="Best Sellers" c1tag5="Help" />
        <Footer_cat c1="Play Centers" c1tag1="Support" c1tag2="Locations" c1tag3="Know More" c1tag4="Reviews" c1tag5="Help" />
      </Footer>
    </div>
  );
};

export default VisitedPlacePage;
