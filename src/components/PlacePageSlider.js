import default_img from "./img/place_silder_default_img.jpg";
import './PlacePageSlider.css';
const Place_slider = () => {
    

return (


  <div id="place_page_slider" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button
          type="button"
          data-bs-target="#place_page_slider"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "4rem",
            height: "0.5rem",
          }}
        ></button>
  <button
          type="button"
          data-bs-target="#place_page_slider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "4rem",
            height: "0.5rem",
            borderRadius:'4px'
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#place_page_slider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{
            color: "#fff",
            cursor: "pointer",
            width: "4rem",
            height: "0.5rem",
          }}
        ></button>
  </div>

  <div class="carousel-inner">

    <div class="carousel-item active" data-bs-interval="10000">
    <img
      src={default_img}
   
       className="place-page-image d-block w-100" />

    </div>

    <div class="carousel-item" data-bs-interval="2000">
       <img
      src={default_img}

       className="place-page-image d-block w-100" />

    </div>
    <div class="carousel-item">
    <img
      src={default_img}

       className="place-page-image d-block w-100" />

    </div>
  </div>
 
</div>
)



}

export default Place_slider;
