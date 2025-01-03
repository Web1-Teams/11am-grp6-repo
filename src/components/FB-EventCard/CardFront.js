import React from "react";
import "./EventCard.css";
// import "./front.css";
const CardFront = ({
  eventName,
  eventDate,
  eventLocation,
  eventImage,
  onFlip,
  eventDescription,
}) => {
  const [eventMonth, eventDay] = eventDate.split("-").slice(1); // استخراج الشهر واليوم
  return (
    <div className="hz-front btn-hz-n">
      <span class="span-hz"></span>
      <span class="span-hz"></span>
      <span class="span-hz"></span>
      <span class="span-hz"></span>
      <div className="hz-image-container">
        <img src={eventImage} alt="Event" className="hz-event-image" />
        <div className="hz-event-date-location">
          <div className="hz-event-date">
            <span className="hz-date-day">{eventDay}</span>
            <span className="hz-date-month">{eventMonth}</span>
          </div>
          {/* <div className="hz-event-location">
            <i className="fa-solid fa-map-location-dot hz-icon"></i>
            <span className="hz-location-text">{eventLocation}</span>
          </div> */}
        </div>
        <div className="hz-event-name-blur">
          <h2 className="hz-event-name">{eventName}</h2>
        </div>
      </div>
      <div className="hz-event-description">
        <p>{eventDescription}</p>
      </div>
      <button className="hz-flip-button" onClick={onFlip}>
        More Details
      </button>
    </div>
  );
};

export default CardFront;
