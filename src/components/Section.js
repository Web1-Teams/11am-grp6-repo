import React from "react";
import Carousel from "./carousel";
import "./Section.css";

const Section = ({ subtitle, places, updatePlaceState, id }) => {
  return (
    <div>
      <h3 className="section-header">{subtitle}</h3>
      <Carousel places={places} updatePlaceState={updatePlaceState} carouselId={id} />
    </div>
  );
};

export default Section;
