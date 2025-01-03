import React from "react";
import './PlacePageSlider.css';
const PlacePageSlider = ({ images }) => {
  return (

    <div id="place_page_slider" className="carousel carousel-dark slide suhad-carousel" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators ssh-carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#place_page_slider"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}  
            style={{
              color: "#fff",
              cursor: "pointer",
              width: "4rem",
              height: "0.5rem",
              borderRadius: "4px",
            }}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner ssh-carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ssh-carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="5000"
          >
            <img
              src={image || "./img/place_silder_default_img.jpg"} // Fallback to default image
              alt={`Slide ${index + 1}`}
              className="place-page-image d-block w-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacePageSlider;