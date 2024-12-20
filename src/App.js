import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PlacePage from "./pages/PlacePage";
import AddPlace from "./pages/AddPlace";
import Calendar from "./pages/Calendar/Calendar.js";
import Login from "./pages/Login";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Load places from localStorage
    const storedPlaces = JSON.parse(localStorage.getItem("places"));
    if (storedPlaces) {
      setPlaces(storedPlaces);
    } else {
      setPlaces([]); // Initialize with an empty array if no places exist
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
      <NavBar BrandName="VisitMe" i1="Home" i2="Categories" i3="Contact" />
      <Routes>
        <Route path="/" element={<HomePage places={places} />} />
        <Route path="/add-place" element={<AddPlace onAddPlace={handleAddPlace} />} />
        <Route
          path="/place/:id"
          element={<PlacePage places={places} updatePlaceRating={updatePlaceRating} />}
        />
        <Route path="/calendar" element={<Calendar places={places} />} />
        <Route path="/login" element={<Login places={places} />} />
      </Routes>
    </Router>
  );
}

export default App;
