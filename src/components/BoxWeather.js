import React from "react";
import "./BoxWeather.css"; // تأكد من أن ملف CSS موجود
import Weather from "./Weather";

export default function BoxWeather() {
  return (
    <>
    <div className="box-weather">
      <Weather />
      <hr style={{color:"#800020"}}></hr>
      <h5 style={{fontWeight:"700"}}>weather is often the one that ruins an outing, right?</h5>
      <br />
      <p style={{fontWeight:"600"}}>But here, you can check the weather before you head out. Now, you can know the weather of the city you're living in</p>
    </div>
    
    </>
  );
}
