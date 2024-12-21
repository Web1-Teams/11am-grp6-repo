import React from "react";

import Carousel from "./Carousel";

import "./Section.css";

const Section = ({ subtitle, places, updatePlaceState, id }) => {
  return (
    <div>
      <div class="red-line"></div>
      <h3 className="section-header">{subtitle}</h3>
      <Carousel className ="slide" places={places} updatePlaceState={updatePlaceState} carouselId={id} />
    </div>
  );
};

export default Section;
