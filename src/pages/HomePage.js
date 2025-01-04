import React from "react";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";
import Section from "../components/Section";
import Slideer from "../components/Slideer/Slideer";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";
import MarqueeIcons from "../components/IconsScrolls/MarqueeIcons";
import BoxWeather from "../components/WeatherContainer/BoxWeather";
import SearchBar from "../components/SearchBar/SearchBar";
import FeedBackCardSlider from "../components/FeedBackSection/FeedBackCardSlider";

const HomePage = ({ places, updatePlaceState }) => {
  const storedPlaces = JSON.parse(localStorage.getItem("places")) || [];
  const newPlaces = [...places].reverse().slice(0, 6); // Last 6 places
  const topRatedPlaces = [...places]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6); // Top 6 rated places
  const favoritePlaces = places
    .filter((place) => place.isHeartClicked)
    .slice(0, 6); // First 6 favorites


  const filteredPlaces = storedPlaces
    .filter((place) => place["Open 24/7"])
    .slice(0, 7);

  const filteredForChildrenPlaces = storedPlaces.filter(
    (place) =>
      place["family only"] === true ||
      place["play ground for children"] === true
  );
  return (
    <div className="grp6-homepage">
     <NavBar BrandName="VisitMe" i1="Home" i2=" Calendar" i3=" My Favorites" />
      <SearchBar />

      <section>
        <Slideer />
      </section>
      <section>
        <CategoryBar />
      </section>
      <section>
        <Section
          subtitle="New Places"
          places={newPlaces}
          updatePlaceState={updatePlaceState}
          id="new-places"
        />
        <Section
          subtitle="Top Rated"
          places={topRatedPlaces}
          updatePlaceState={updatePlaceState}
          id="top-rated"
        />
        <Section
          subtitle="Your Favorites"
          places={favoritePlaces}
          updatePlaceState={updatePlaceState}
          id="your-favorites"
        />
        <Section
          subtitle="Open 24/7"
          places={filteredPlaces}
          updatePlaceState={updatePlaceState}
          id="open-247"
        />
        <Section
          subtitle="Recommended"
          places={places.slice(0, 6)} // First 6 places
          updatePlaceState={updatePlaceState}
          id="recommended"
        />
        <Section
          subtitle="Suitable For Children"
          places={filteredForChildrenPlaces}
          updatePlaceState={updatePlaceState}
          id="recommended"
        />
      </section>
      <section>
        <BoxWeather />
      </section>
      

      <section>
        <FeedBackCardSlider />
      </section>
<section>
        <MarqueeIcons />
      </section>
      <section>
        <Footer BrandName="visit me ">
          <Footer_cat
            c1="resturents"
            c1tag1="family type"
            c1tag2="locations"
            c1tag3="generic"
            c1tag4="best sellers"
            c1tag5="help"
          />
          <Footer_cat
            c1="Archaeological Sites"
            c1tag1="picturs"
            c1tag2="locations"
            c1tag3="more info"
            c1tag4="most visited"
            c1tag5="help"
          />
          <Footer_cat
            c1="Amusement Parks"
            c1tag1="childesh"
            c1tag2="locations"
            c1tag3="reviews"
            c1tag4="more info"
            c1tag5="help"
          />
          <Footer_cat
            c1="Parks"
            c1tag1="more info"
            c1tag2="locations"
            c1tag3="photos"
            c1tag4="intertetment"
            c1tag5="help"
          />
          <Footer_cat
            c1="Cafés"
            c1tag1="family type"
            c1tag2="locations"
            c1tag3="pics"
            c1tag4="best sellers"
            c1tag5="help"
          />
          <Footer_cat
            c1="Play Centers"
            c1tag1="support"
            c1tag2="locations"
            c1tag3="know more "
            c1tag4="reviews"
            c1tag5="help"
          />
        </Footer>
      </section>
    </div>
  );
};

export default HomePage;
