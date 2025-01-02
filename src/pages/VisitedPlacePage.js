import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";
import "./VisitedPlacePage.css";

const VisitedPlacePage = () => {
  const [visitedPlaces, setVisitedPlaces] = useState([]);

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("places")) || [];
    const filteredPlaces = storedPlaces.filter((place) => place.isCheckClicked);
    setVisitedPlaces(filteredPlaces);
  }, []);

  return (
    <div className="Visited-body">

      <NavBar BrandName="VisitMe" i2="Calendar" i3="My Favorites" />
      <div className="Title">Visited Places</div>
      <div className="visited-places-container">
        {visitedPlaces.length > 0 ? (
          visitedPlaces.map((place) => (
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
            No visited places yet. Start exploring and mark places as visited!
          </p>
        )}
      </div>
      <Footer BrandName="Visit Me">
                <Footer_cat
                    c1="Restaurants"
                    c1tag1="Family Type"
                    c1tag2="Locations"
                    c1tag3="Generic"
                    c1tag4="Best Sellers"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Archaeological Sites"
                    c1tag1="Pictures"
                    c1tag2="Locations"
                    c1tag3="More Info"
                    c1tag4="Most Visited"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Amusement Parks"
                    c1tag1="Childish"
                    c1tag2="Locations"
                    c1tag3="Reviews"
                    c1tag4="More Info"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Parks"
                    c1tag1="More Info"
                    c1tag2="Locations"
                    c1tag3="Photos"
                    c1tag4="Entertainment"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Cafés"
                    c1tag1="Family Type"
                    c1tag2="Locations"
                    c1tag3="Pictures"
                    c1tag4="Best Sellers"
                    c1tag5="Help"
                />
                <Footer_cat
                    c1="Play Centers"
                    c1tag1="Support"
                    c1tag2="Locations"
                    c1tag3="Know More"
                    c1tag4="More Info"
                    c1tag5="Help"
                />
            </Footer>
    </div>
  );
};

export default VisitedPlacePage;