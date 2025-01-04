import { Link } from "react-router-dom";
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
   
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-section">

      <div class="about-section-modern">
  <h1 class="about-title">About Us</h1>
  <p class="about-description">
    Looking for your next adventure or just tired of the same old routine? Our website is your ultimate guide to exploring hidden gems and must-visit spots in town! Whether you're a tourist, an expat, or even a local who hasn't discovered the best places yet, we've got you covered. From exciting attractions to cozy hangouts, let us help you make every moment unforgettable!
  </p>
  <div className="buttons">
  <Link  to ="/homepage">
  <button className="explore-button">Explore Now</button>
  </Link>
  <Link  to ="/team-page">
  <button className="explore-button">Our Team</button>
  </Link></div>
</div>

      </div>
    </div>
  );
};

export default AboutUs;
