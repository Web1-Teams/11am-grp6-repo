import React from "react";
import "./BoxWeather.css";
import Weather from "./Weather";

export default function BoxWeather() {
  return (
    <div className="box-container">
      <div className="box-video">
        <video autoPlay loop muted>
          <source src="/Video/weather.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="box-weather">
        <Weather />
      </div>
    </div>
  );
}
