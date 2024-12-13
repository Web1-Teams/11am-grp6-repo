import Card from "./Card";
import "./carousel.css";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="true"
      data-bs-wrap="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex flex-nowrap overflow-auto">
            <div className="card-container">
              <Card name="card 1" />
            </div>
            <div className="card-container">
              <Card name="card 2" />
            </div>
            <div className="card-container">
              <Card name="card 3" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex flex-nowrap overflow-auto">
            <div className="card-container">
              <Card name="card 4" />
            </div>
            <div className="card-container">
              <Card name="card 5" />
            </div>
            <div className="card-container">
              <Card name="card 6" />
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
