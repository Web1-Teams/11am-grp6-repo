import './PlacePageSlider.css';

const PlacePageSlider = ({ images }) => {
    return (
        <div id="place_page_slider" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
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

            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        data-bs-interval="3000"
                    >
                        <img
                            src={image}
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
