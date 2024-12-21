import React from "react";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";
import Section from "../components/Section";
import Slideer from "../components/Slideer";

const HomePage = ({ places, updatePlaceState }) => {
  const newPlaces = [...places].reverse().slice(0, 6); // Last 6 places
  const topRatedPlaces = [...places]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6); // Top 6 rated places
  const favoritePlaces = places
    .filter((place) => place.isHeartClicked)
    .slice(0, 6); // First 6 favorites

  return (
    <div className="grp6-homepage">
      <nav>
        <NavBar BrandName="VisitMe" i1="Visited" i2="Calendar" i3="My Favorites" />
      </nav>
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
          subtitle="Recommended"
          places={places.slice(0, 6)} // First 6 places
          updatePlaceState={updatePlaceState}
          id="recommended"
        />
      </section>
    </div>
  );
};

export default HomePage;
