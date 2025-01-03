// src/components/EventCard/EventCard.jsx
import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import "./EventCard.css";

const EventCard = ({
  eventName,
  eventDate,
  eventLocation,
  eventImage,
  eventDescription,
  sponsors,
  ticketPrice,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="hz-container ">
      <div className={`hz-card ${isFlipped ? "hz-flipped" : ""}`}>
        <CardFront
          eventName={eventName}
          eventDate={eventDate}
          eventLocation={eventLocation}
          eventImage={eventImage}
          onFlip={handleFlip}
          eventDescription={eventDescription}
        />
        <CardBack
          eventDescription={eventDescription}
          eventDate={eventDate}
          eventLocation={eventLocation}
          sponsors={sponsors}
          ticketPrice={ticketPrice}
          onFlip={handleFlip}
        />
      </div>
    </div>
  );
};

export default EventCard;
