import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img1 from "../img/2222.png";
import img2 from "../img/333.png";
import img3 from "../img/image.png";

function Curasel({ id, currentIndex, onNext, onPrev }) {
  const images = [img1, img2, img3];

  return (
    <div id={`carousel-${id}`} className="carousel slide">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#carousel-${id}`} // استخدام المعرّف الفريد
            data-bs-slide-to={index}
            className={currentIndex === index ? "active" : ""}
            aria-current={currentIndex === index ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${id}`} // استخدام المعرّف الفريد
        data-bs-slide="prev"
        onClick={onPrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${id}`} // استخدام المعرّف الفريد
        data-bs-slide="next"
        onClick={onNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Curasel;
