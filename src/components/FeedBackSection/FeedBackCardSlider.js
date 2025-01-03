import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ColorCard from "./ColorCard";
import "./FeedBackSlider.css";

const CardSlider = () => {
  const settings = {
    infinite: true, // تأكد من تمكين الـ infinite إذا أردت التمرير بشكل دائري
    slidesToShow: 3, // إظهار 3 كاردات بشكل افتراضي
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    draggable: true,
    speed: 150,
    touchMove: true,
    adaptiveHeight: true,
    focusOnSelect: false,
    swipeToSlide: true,
    touchThreshold: 10,
    dragging: true,
    dots: true,
    dotClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1163,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1139,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1094,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <h1 className="carousel-title">Visitors' FeedBack</h1>
      <hr className="custom-hr"></hr>
      <h3 className="feedback-description">
        Here, our visitors share their thoughts and experiences with us. Read
        what they have to say about their journey!
      </h3>

      <div className="carousel-container">
        <Slider {...settings}>
          <ColorCard />
          <ColorCard />
          <ColorCard />
          <ColorCard />
          <ColorCard />
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
