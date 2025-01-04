import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollTop from "./components/ScrollTop/ScrollTop.js";
import HomePage from "./pages/HomePage";
import PlacePage from "./pages/PlacePage";
import AddPlace from "./pages/AddPlace";
import Calendar from "./pages/Calendar/Calendar.js";
import Login from "./pages/Login";
import FavoritesPage from "./pages/FavoritesPage";
import CategoryPage from "./pages/CategoryPage";
import VisitedPlacePage from "./pages/VisitedPlacePage";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import SignUp from "./pages/SignUp.js";
import ProfilePage from "./pages/ProfilePage.js";
import EventPage from "./pages/EventPage/EventPage.js";
import UserFeedBack from "./pages/UserFeedBack/UserFeedBack.js";
import MyChatBot from "./components/Chatbot/MyChatBot.js";
import TeamPage from "./pages/AboutUs/TeamPage.js";
import SecondaryNavBar from "./components/SecondaryNavBar.js";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("places") || "[]");
    if (storedPlaces.length > 0) {
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

  const updateLocalStorage = (updatedPlaces) => {
    localStorage.setItem("places", JSON.stringify(updatedPlaces));
  };

  const handleAddPlace = (newPlace) => {
    const updatedPlaces = [...places, newPlace];
    setPlaces(updatedPlaces);
    updateLocalStorage(updatedPlaces);
  };

  const updatePlaceRating = (id, newRating) => {
    const updatedPlaces = places.map((place) =>
      place.id === id ? { ...place, rating: newRating } : place
    );
    setPlaces(updatedPlaces);
    updateLocalStorage(updatedPlaces);
  };

  return (
    <>
      <ScrollTop />
      <MyChatBot />
      <Router>
        <NavBar
          BrandName="VisitMe"
          i1="Home"
          i2="Calendar"
          i3=" My Favorites"
        />
        <Routes>
          <Route path="/" element={<HomePage places={places} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/add-place"
            element={
              <>
                <SecondaryNavBar />
                <AddPlace onAddPlace={handleAddPlace} />
              </>
            }
          />
          <Route
            path="/place/:id"
            element={
              <PlacePage
                places={places}
                updatePlaceRating={updatePlaceRating}
              />
            }
          />
          <Route path="/favorites" element={<FavoritesPage places={places} />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/visited-places" element={<VisitedPlacePage />} />
          <Route path="/feedback" element={<UserFeedBack />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/event-page" element={<EventPage />} />
          <Route path="/calendar" element={<Calendar places={places} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team-page" element={<TeamPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user-feedback" element={<UserFeedBack />} />
          <Route path="/homepage" element={<HomePage places={places} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
