import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ColorCard from "./ColorCard";
import "./FeedBackSlider.css";

const FeedBackCardSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate(); // استخدام الـ navigate

  useEffect(() => {
    const storedFeedbacks =
      JSON.parse(localStorage.getItem("userfeedbacks-Guest")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ paddingTop: "80px", paddingBottom: "70px" }}>
      <h1 className="carousel-title">Visitors' Feedback</h1>
      <hr className="custom-hr" />
      <h3 className="feedback-description">
        Here, our visitors share their thoughts and experiences with us. Read
        what they have to say about their journey!
      </h3>
      <button
        className="custom-button"
        onClick={() => navigate("/UserFeedback")}
      >
        Share Your Feedback
      </button>
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
