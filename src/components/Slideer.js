import "./Slideer.css";

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
        {/* Video Slide */}
        <div className="carousel-item active" data-bs-interval="10000">
          <iframe
            className="grp6-img d-block w-100"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hkcClOK11MI?autoplay=1&mute=1&loop=1&playlist=hkcClOK11MI&controls=0&showinfo=0&rel=0&modestbranding=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute", // لتغطية الخلفية بشكل كامل
              top: "0",
              left: "0",
              zIndex: "-1", // التأكد من أن الفيديو خلف المحتوى
            }}
          />
        </div>

        {/* Slide 2 with Caption */}
        <div className="carousel-item" data-bs-interval="2900">
          <img
            src="https://www.kenduncan.com/wp-content/uploads/1970/01/PSX0025.jpg"
            className="grp6-img d-block w-100"
            alt="Slide 2"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            className="carousel-caption"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "900",
                margin: "0",
                color: "#fff",
                textShadow: "0 0 5px rgba(128, 0, 0, 0.4)",
                padding: "0.5rem",
                display: "inline-block",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Smartest Vacation Planner
            </h1>
            <hr className="custom-hr" style={{ width: "80%" }}></hr>
            <p
              style={{
                fontSize: "1.3rem",
                marginTop: "0.5rem",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              <span
                style={{
                  color: "#800020",
                  fontWeight: "800",
                  fontSize: "1.8rem",
                  fontFamily: "Josefin Sans, sans-serif",
                  backgroundColor: "rgba(0, 0, 0, 0.59)",
                  padding: "0.4rem",
                  borderRadius: "10px",
                  margin: "0 0.5rem",
                }}
              >
                VisitMe
              </span>
              Trips, Tales & Trust
            </p>
          </div>
        </div>

        {/* Other Image Slides from Google Links */}
        {[
          "https://via.placeholder.com/800x400?text=Image+1",
          "https://via.placeholder.com/800x400?text=Image+2",
          "https://via.placeholder.com/800x400?text=Image+3",
          "https://th.bing.com/th?id=OIF.oafBr5pG0%2bF7Kj0wkVflVw&w=308&h=175&c=7&r=0&o=5&dpr=1.2&pid=1.7",
        ].map((image, index) => (
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
