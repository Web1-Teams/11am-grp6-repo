import img8 from "./img/img-8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img-home.jpg";
import img11 from "./img/img-1.jpg";
import img12 from "./img/img-4.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "3rem",
            height: "0.5rem",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "3rem",
            height: "0.5rem",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "3rem",
            height: "0.5rem",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "3rem",
            height: "0.5rem",
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide-to="4"
          aria-label="Slide 5"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "3rem",
            height: "0.5rem",
          }}
        ></button>
      </div>

      <div className="carousel-inner" style={{ scrollBehavior: "smooth" }}>
        <div className="carousel-item active" data-bs-interval="2200">
          <img src={img8} className="grp6-img d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={img9} className="grp6-img d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={img10} className="grp6-img d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={img11} className="grp6-img d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item" data-bs-interval="2200">
          <img src={img12} className="grp6-img d-block w-100" alt="Slide 5" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
