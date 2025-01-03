import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SecondaryNavBar from "./components/SecondaryNavBar";
import HomePage from "./pages/HomePage";
import PlacePage from "./pages/PlacePage";
import AddPlace from "./pages/AddPlace";
import Calendar from "./pages/Calendar/Calendar.js";
import Login from "./pages/Login.js";
import Settings from "./pages/Settings/Settings.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import SignUp from "./pages/SignUp.js";
import FavoritesPage from "./pages/FavoritesPage"; 
import CategoryPage from "./pages/CategoryPage"; 
import VisitedPlacePage from "./pages/VisitedPlacePage"; 
import ProfilePage from "./pages/ProfilePage.js";
import UserFeedBack from "./pages/UserFeedBack/UserFeedBack.js";



function App() {
  const [places, setPlaces] = useState([]);

  // Fetch places from localStorage or fallback to API
  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("places"));
    if (storedPlaces && storedPlaces.length > 0) {
      setPlaces(storedPlaces);
    } else {
      fetch("/places.json")
        .then((response) => response.json())
        .then((data) => {
          setPlaces(data);
          localStorage.setItem("places", JSON.stringify(data));
        })
        .catch((error) => console.error("Error loading places:", error));
    }
  }, []);

  // Update localStorage whenever places are updated
  const updateLocalStorage = (updatedPlaces) => {
    localStorage.setItem("places", JSON.stringify(updatedPlaces));
  };

  // Handle adding a new place
  const handleAddPlace = (newPlace) => {
    const updatedPlaces = [...places, newPlace];
    setPlaces(updatedPlaces);
    updateLocalStorage(updatedPlaces);
  };

  // Handle updating a place's rating
  const updatePlaceRating = (id, newRating) => {
    const updatedPlaces = places.map((place) =>
      place.id === id ? { ...place, rating: newRating } : place
    );
    setPlaces(updatedPlaces);
    updateLocalStorage(updatedPlaces);
  };
return (
  <Router>
      <NavBar BrandName="VisitMe" i1="Home" i2="Calendar" i3="My Favorites" />

      <Routes>
        <Route path="/" element={<HomePage places={places} />} />
        <Route
          path="/add-place"
          element={
            <>
              <AddPlace onAddPlace={handleAddPlace} />
              <NavBar
                BrandName="VisitMe"
                i1="Home"
                i2=" Calendar"
                i3=" My Favorites"
              />
              <SecondaryNavBar />
            </>
          }
        />
        <Route
          path="/place/:id"
          element={
            <>
              <PlacePage
                places={places}
                updatePlaceRating={updatePlaceRating}
              />
              <NavBar
                BrandName="VisitMe"
                i1="Home"
                i2=" Calendar"
                i3=" My Favorites"
              />
              <SecondaryNavBar />
            </>
          }
        />
        <Route
          path="/profile-page"
          element={
            <>
              <ProfilePage places={places} />
              <NavBar
                BrandName="VisitMe"
                i1="Home"
                i2=" Calendar"
                i3=" My Favorites"
              />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <Calendar places={places} />
              <NavBar
                BrandName="VisitMe"
                i1="Home"
                i2=" Calendar"
                i3=" My Favorites"
              />
            </>
          }
        />
        <Route path="/login" element={<Login places={places} />} />
        <Route path="/favorites" element={<FavoritesPage places={places} />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route
          path="/visited-places"
          element={
            <>
              <VisitedPlacePage />
              <NavBar
                BrandName="VisitMe"
                i1="Home"
                i2="Calendar"
                i3="My Favorites"
              />
              <SecondaryNavBar />
            </>
          }
        />
        <Route path="/settings" element={<Settings />} />{" "}
        {/* This should be here, not inside another <Routes> */}
        <Route path="/about-us" element={<AboutUs places={places} />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
    

  );
}

export default App;