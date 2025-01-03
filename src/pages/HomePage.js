import React from "react";
import NavBar from "../components/NavBar";
import CategoryBar from "../components/CategoryBar";
import Section from "../components/Section";
import Slideer from "../components/Slideer";
import Footer from "../components/Footer";
import Footer_cat from "../components/Footer_cat";


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

        <NavBar BrandName="VisitMe" i1="Home" i2=" Calendar" i3=" My Favorites"/>
      <SearchBar/>
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

export default HomePage;
