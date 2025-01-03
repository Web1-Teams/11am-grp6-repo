import React from "react";
import "./MarqueeIcons.css";

export default function MarqueeIcons() {
  const icons = [
    "fas fa-home",
    "fas fa-mountain",
    "fas fa-gamepad",
    "fas fa-pizza-slice",
    "fas fa-globe",
    "fas fa-plane",
    "fas fa-city",
    "fas fa-building",
    "fas fa-umbrella",
    "fas fa-coffee",
    "fas fa-utensils",
    "fas fa-hamburger",
    "fas fa-bread-slice",
    "fas fa-store",
    "fas fa-ticket-alt",
    "fas fa-circle-notch",
    "fas fa-castle",
    "fas fa-ice-cream",
    "fas fa-apple-alt",
    "fas fa-hotdog",
    "fas fa-film",
    "fa-solid fa-mug-saucer",
    "fa-solid fa-torii-gate",
    "fa-solid fa-utensils",
    "fa-solid fa-city",
    "fa-solid fa-bowl-food",
  ];

  return (
    <div className="marquee">
      <div className="marquee-content">
        {icons.map((icon, index) => (
          <div key={index} className="marquee-icon">
            <i className={icon} style={{ fontSize: "2em" }}></i>
          </div>
        ))}
        {/* تكرار الأيقونات لجعل الحركة مستمرة */}
        {icons.map((icon, index) => (
          <div key={`duplicate-${index}`} className="marquee-icon">
            <i className={icon} style={{ fontSize: "2em" }}></i>
          </div>
        ))}
      </div>
    </div>
  );
}
