import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SecondaryNavBar from "./components/SecondaryNavBar";
import HomePage from "./pages/HomePage";
import PlacePage from "./pages/PlacePage";
import AddPlace from "./pages/AddPlace";
import Calendar from "./pages/Calendar/Calendar.js";
import Login from "./pages/Login";
import VisitedPlacePage from "./pages/VisitedPlacePage"; // Import VisitedPlacePage
import UserFeedBack from "./pages/UserFeedBack/UserFeedBack.js";


function App() {
  const [places, setPlaces] = useState([]);

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
    <Router>
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
                i2="Calendar"
                i3="My Favorites"
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
        <Route path="/calendar" element={<Calendar places={places} />} />
        <Route path="/login" element={<Login places={places} />} />
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
         <Route
          path="/feedback"
          element={
            <>
              <UserFeedBack/>
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
      </Routes>
    </Router>
    
  );
}

export default App;