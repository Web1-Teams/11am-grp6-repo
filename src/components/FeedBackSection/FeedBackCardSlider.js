import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ColorCard from "./ColorCard";
import "./FeedBackSlider.css";

const FeedBackCardSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(
      localStorage.getItem("userfeedbacks-Guest")
    ) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2, // Show 2 cards for screens < 1150px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card for screens < 768px
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <h1 className="carousel-title">Visitors' Feedback</h1>
      <hr className="custom-hr" />
      <h3 className="feedback-description">
        Here, our visitors share their thoughts and experiences with us. Read
        what they have to say about their journey!
      </h3>
      <div className="carousel-container">
        <Slider {...settings}>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <ColorCard key={index} feedback={feedback} />
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#888" }}>
              No feedback available.
            </p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default FeedBackCardSlider;
