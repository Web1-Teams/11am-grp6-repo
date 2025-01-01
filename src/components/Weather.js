import React, { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {
  const apiKey = "2c6685537dadb8d9bcc90a3336150ca3";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [city, setCity] = useState("Nablus");  // وضع القيمة الافتراضية هنا
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clouds":
        return "../images/clouds.png";
      case "Clear":
        return "../images/clear.png";
      case "Rain":
        return "../images/rain.png";
      case "Drizzle":
        return "../images/drizzle.png";
      case "Mist":
        return "../images/mist.png";
      default:
        return "../images/clouds.png";
    }
  };

  const checkweather = async () => {
    if (!city) return;

    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (err) {
      console.error("Error fetching weather data :", err);
      setError(true);
    }
  };

  // استخدام useEffect لتحميل البيانات للمدينة الافتراضية عند تحميل المكون
  useEffect(() => {
    checkweather();
  }, [city]); // سيتم استدعاء checkweather عند تغيير قيمة المدينة

  return (
    <>
      <div className="we-card">
        <div className="we-search">
          <input
            type="text"
            placeholder="Enter city name"
            spellCheck="false"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={checkweather}>
            <img src="../images/search.png" alt="" />
          </button>
        </div>

        {error && (
          <div className="we-error">
            <p>Invalid City Name</p>
          </div>
        )}

        {weatherData && (
          <div className="weather show">
            <img
              src={getWeatherIcon(weatherData.weather[0].main)}
              className="weather-icon"
              alt="Weather Icon"
            />
            <h1 className="temp">{Math.round(weatherData.main.temp)}°c</h1>
            <h2 className="city">{weatherData.name}</h2>
            <div className="we-details">
              <div className="we-col">
                <img src="../images/humidity.png" alt="Humidity" />
                <div>
                  <p className="humidity">{weatherData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="we-col">
                <img src="../images/wind.png" alt="Wind Speed" />
                <div>
                  <p className="wind">{weatherData.wind.speed} Km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
