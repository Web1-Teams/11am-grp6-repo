import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PlacePage from "./pages/PlacePage";
import AddPlace from "./pages/AddPlace";

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
      <NavBar BrandName="My Places" i1="Home" i2="Categories" i3="Contact" />
      <Routes>
        <Route path="/" element={<HomePage places={places} />} />
        <Route path="/add-place" element={<AddPlace onAddPlace={handleAddPlace} />} />
        <Route
          path="/place/:id"
          element={<PlacePage places={places} updatePlaceRating={updatePlaceRating} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
