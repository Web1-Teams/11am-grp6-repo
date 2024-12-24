import { Link } from "react-router-dom";
import React from "react";
import "./AboutUs.css";
import Reema from"./img-team/Reema.jpg"
import Wassem from"./img-team/Wassem.jpg"
import Hamza from"./img-team/Hamza.jpg"
import Hamza2 from"./img-team/Hamza2.jpg"
import Suhad from"./img-team/Suhad.jpg"
import Ashour from"./img-team/Ashour.jpg"
import Dareen from "./img-team/Dareen2006.jpg"
const AboutUs = () => {
   
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-section">
      <div class="about-section-modern">
  <h1 class="about-title">About Us</h1>
  <p class="about-description">
    Looking for your next adventure or just tired of the same old routine? Our website is your ultimate guide to exploring hidden gems and must-visit spots in town! Whether you're a tourist, an expat, or even a local who hasn't discovered the best places yet, we've got you covered. From exciting attractions to cozy hangouts, let us help you make every moment unforgettable!
  </p>
  <Link  to ="/">
  <button className="explore-button">Explore Now</button>
  </Link>
</div>

      </div>

      <h2 className="aboutUs-teamHeading">Our Team</h2>
      <div className="aboutUs-row">
        {/* Reema */}
        <div className="aboutUs-column">
          <div className="aboutUs-card">
            <img
              src={Reema}
              alt="Reema"
              className="aboutUs-image"
             
            />
            <div className="aboutUs-cardContainer">
              <h2>Remaa Saleh </h2>
           
              <p>
              Computer science student who wants to be the best version of herself</p>
              <p> remaayosef68@gmail.com</p>
              <p>
              <a href="mailto:remaayosef68@gmail.com">
                <button className="aboutUs-button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        
{/*Dareen*/}
<div className="aboutUs-column">
          <div className="aboutUs-card">
            <img
              src={Dareen}
              alt="Dareen"
              className="aboutUs-image"
            />
            <div className="aboutUs-cardContainer">
              <h2>Dareen Abu Aisheh</h2>
            
              <p>An innovative thinker who adapts, learns, and collaborates to create impact.</p>
              <p>dareenabuaisheh2006@gmail.com</p>
              <p>
                <a href="mailto:dareenabuaisheh2006@gmail.com">
                <button  className="aboutUs-button">Contact</button></a>
              </p>
            </div>
          </div>
        </div>
        {/*Suhad */}
        <div className="aboutUs-column">
          <div className="aboutUs-card">
            <img
              src={Suhad}
              alt="Suhad"
              className="aboutUs-image"
            />
            <div className="aboutUs-cardContainer">
              <h2>Suhad Shaheen</h2>
              <p>Passionate and driven individual with a love for programming</p>
              <p>suhadsh.12@gmail.com </p>
              <p>
              <a href="mailto:suhadsh.12@gmail.com">
                <button className="aboutUs-button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Hamza Zarour*/}
        <div className="aboutUs-column">
          <div className="aboutUs-card">
            <img
              src={Hamza}
              alt="Hamza"
              className="aboutUs-image"
            />
            <div className="aboutUs-cardContainer">
              <h2>Hamza Zarour</h2>

              <p>A dedicated Computer Science student with a strong focus on honing practical skills, utilizing advanced technology.</p>
              <p>hamzazarour@gmail.com </p>
              <p>
              <a href="mailto:hamzazarour@gmail.com">
                <button className="aboutUs-button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/*Wassem*/}
        <div className="aboutUs-column">
          <div className="aboutUs-card">
            <img
              src={Wassem}
              alt="Wassem"
              className="aboutUs-image"
            />
            <div className="aboutUs-cardContainer">
              <h2>Wassem Qaneer</h2>
             
              <p> Leads the membership committee in the "Entrepreneurs" association.</p>
              <p>qnyrwsym5@gmail.com</p>
              <p>
              <a href="mailto:qnyrwsym5@gmail.com">
                <button className="aboutUs-button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/*Ashour*/}
        <div className="aboutUs-column">
          <div className="aboutUs-card">
            <img
              src={Ashour}
              alt="Ashour"
              className="aboutUs-image"
            />
            <div className="aboutUs-cardContainer">
              <h2>Ashour Jarrar</h2>
          
              <p>The godparent of el basta</p>
              <p>ashour.joas@gmail.com</p>
              <p>
              <a href="mailto:ashour.joas@gmail.com">
                <button className="aboutUs-button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/*Hamza Nasser*/ }
        <div className="aboutUs-column">
          <div className="aboutUs-card">
            <img
              src={Hamza2}
              alt="Hamza"
              className="aboutUs-image"
            />
            <div className="aboutUs-cardContainer">
              <h2>Hamza Nasser</h2>
              
              <p>
              A person who loves programming and playing chess ♟</p>
              <p>s12324183@stu.najah.edu</p>
              <p>
              <a href="mailto:s12324183@stu.najah.edu">
                <button className="aboutUs-button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
