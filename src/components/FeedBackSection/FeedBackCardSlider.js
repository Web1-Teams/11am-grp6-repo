import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ColorCard from "./ColorCard";
import "./FeedBackSlider.css";

const FeedBackCardSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFeedbacks = async () => {
      let storedFeedbacks =
        JSON.parse(localStorage.getItem("userfeedbacks")) || [];

      if (storedFeedbacks.length === 0) {
        try {
          const response = await fetch("/userfeedbacks.json");
          if (response.ok) {
            const jsonData = await response.json();
            storedFeedbacks = jsonData;
            localStorage.setItem("userfeedbacks", JSON.stringify(jsonData));
          } else {
            console.error("Error fetching feedbacks.json:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching feedbacks.json:", error);
        }
      }

      setFeedbacks(storedFeedbacks);
    };

    loadFeedbacks();
  }, []);

  const settings = {
    infinite: false,
    slidesToShow: 3.7,
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
            feedbacks.map((userfeedbacks, index) => (
              <ColorCard key={index} userfeedbacks={userfeedbacks} />
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
