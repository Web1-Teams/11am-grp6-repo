import React from "react";
import Card from "./Card";
import "./carousel.css";
import "./Card.css";

const Carousel = ({ places, updatePlaceState, carouselId }) => {
  const chunkSize = 3; // Cards per batch
  const placeChunks = Array.from({ length: Math.ceil(places.length / chunkSize) }, (_, index) =>
    places.slice(index * chunkSize, index * chunkSize + chunkSize)
  );

  return (
    <div
      id={`carousel-${carouselId}`}
      className="carousel slide"
      data-bs-touch="true"
      data-bs-wrap="false"
    >
      <div className="carousel-inner">
        {placeChunks.map((chunk, batchIndex) => (
          <div
            className={`carousel-item ${batchIndex === 0 ? "active" : ""}`}
            key={batchIndex}
          >
            <div className="d-flex flex-nowrap overflow-auto">
              {chunk.map((place) => (
                <div className="card-container" key={place.id}>
                  <Card {...place} updatePlaceState={updatePlaceState} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
