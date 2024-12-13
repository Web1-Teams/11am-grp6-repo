import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Card from "./components/Card";
import Slider from "./components/Slider";
import "./App.css";

const cardList = [
  { id: 1, title: "Hulk Burger", location: "NNU Street", rating: 2 },
  { id: 2, title: "Pizza Mania", location: "City Center", rating: 4.1 },
  { id: 3, title: "Sushi World", location: "Ocean Avenue", rating: 4.9 },
  { id: 4, title: "Taco Palace", location: "Downtown", rating: 5 },
  { id: 5, title: "Hulk Burger", location: "NNU Street", rating: 2 },
  { id: 6, title: "Pizza Mania", location: "City Center", rating: 4.1 },
  { id: 7, title: "Sushi World", location: "Ocean Avenue", rating: 4.9 },
  { id: 8, title: "Taco Palace", location: "Downtown", rating: 5 },
  { id: 9, title: "Hulk Burger", location: "NNU Street", rating: 2 },
  { id: 10, title: "Pizza Mania", location: "City Center", rating: 4.1 },
  { id: 11, title: "Sushi World", location: "Ocean Avenue", rating: 4.9 },
  { id: 12, title: "Taco Palace", location: "Downtown", rating: 5 },
  { id: 13, title: "Hulk Burger", location: "NNU Street", rating: 2 },
  { id: 14, title: "Pizza Mania", location: "City Center", rating: 4.1 },
  { id: 15, title: "Sushi World", location: "Ocean Avenue", rating: 4.9 },
  { id: 16, title: "Taco Palace", location: "Downtown", rating: 5 },
];

function App() {
  const [indices, setIndices] = useState(Array(cardList.length).fill(0));

  const handleNext = (id) => {
    setIndices((prevIndices) =>
      prevIndices.map((index, i) => (i === id ? (index + 1) % 3 : index))
    );
  };

  const handlePrev = (id) => {
    setIndices((prevIndices) =>
      prevIndices.map((index, i) =>
        i === id ? (index === 0 ? 2 : index - 1) : index
      )
    );
  };

  return (
    <div>
      <NavBar BrandName="eATMe" i1="Home" i2="Calender" i3="Something Else3" />
      <Slider />

      <div className="mt-5">
        <div className="row justify-content-center">
          {cardList.map((card, idx) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-5 d-flex justify-content-center"
              key={card.id}
            >
              <Card
                title={card.title}
                location={card.location}
                rating={card.rating}
                currentIndex={indices[idx]}
                onNext={() => handleNext(idx)}
                onPrev={() => handlePrev(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
