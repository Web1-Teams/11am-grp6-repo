import "./Slideer.css";
import img1 from "../img/slide1 (1).jpg";
import img2 from "../img/quds.jpg";
import img3 from "../img/img-home.jpg";
import img4 from "../img/decoration.jpg";
import video from "../img/videoplayback.mp4";

const Slideer = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {[...Array(5).keys()].map((index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
            style={{
              color: "#fff",
              cursor: "pointer",
              width: "3rem",
              height: "0.5rem",
            }}
          ></button>
        ))}
      </div>

      <div className="carousel-inner" style={{ scrollBehavior: "smooth" }}>
        <div className="carousel-item active" data-bs-interval="5500">
          <video
            className="grp6-img d-block w-100"
            width="100%"
            height="100%"
            controls
            autoPlay
            loop
            muted
            style={{
              objectFit: "cover",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Slide 2 with Caption */}
        <div className="carousel-item" data-bs-interval="2900">
          <img
            src={img1}
            className="grp6-img d-block w-100"
            alt="Slide 2"
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>

        {[img2, img3, img4].map((image, index) => (
          <div className="carousel-item" key={index} data-bs-interval="2900">
            <img
              src={image}
              className="grp6-img d-block w-100"
              alt={`Slide ${index + 3}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideer;
