import './PlacePageSlider.css';

const PlacePageSlider = ({ images }) => {
    return (
        <div id="place_page_slider" className="carousel carousel-dark slide" data-bs-ride="carousel">
            {/* Carousel Indicators */}
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
                            backgroundColor: "#fff",
                            cursor: "pointer",
                            width: "4rem",
                            height: "0.5rem",
                            borderRadius: "4px",
                        }}
                    ></button>
                ))}
            </div>

            {/* Carousel Images */}
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

            {/* Carousel Controls */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#place_page_slider"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#place_page_slider"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default PlacePageSlider;
