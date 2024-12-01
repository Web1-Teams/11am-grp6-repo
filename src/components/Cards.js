import React from "react";
import CardItem from "./CardItem";
import "../components/Cards.css";
import img9 from "./image/img9.jpg";
import img2 from "./image/img2.jpg";
import img6 from "./image/img6.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src={img2}
              text="Travel through the island of Bali in a private Cruise"
              label="Luxury"
              path="/services"
            />

            <CardItem
              src={img6}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
