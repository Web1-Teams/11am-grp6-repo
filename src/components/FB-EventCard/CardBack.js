import React from "react";
import "./EventCard.css";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const CardBack = ({
  eventDescription,
  sponsors = [],
  ticketPrice,
  eventDate,
  eventLocation,
  onFlip,
}) => {
  const handleJoin = () => {
    // alert('تم الضغط على زر "Purchase Tickets"');
    toast.success("This feature is coming soon in Web 2🚀 — don’t miss it!✨");
  };

  return (
    <div className="hz-back btn-hz-n">
      <div className="hz-back-overlay">
        {/* العنوان */}
        <h3 className="hz-details-title">Event Details</h3>
        <span class="span-hz"></span>
        <span class="span-hz"></span>
        <span class="span-hz"></span>
        <span class="span-hz"></span>
        <div class="the2-children">
          {/* تفاصيل الحدث */}
          <div className="hz-event-details">
            <div className="hz-detail-item">
              <i className="fa-regular fa-calendar hz-icon"></i>
              <span className="hz-detail-text">{eventDate}</span>
            </div>
            <div className="hz-detail-item">
              <i className="fa-solid fa-map-location-dot hz-icon"></i>
              <span className="hz-detail-text">{eventLocation}</span>
            </div>
            <div className="hz-detail-item">
              <i className="fa-solid fa-ticket hz-icon"></i>
              <span className="hz-detail-text">{ticketPrice}</span>
            </div>
          </div>

          {/* قسم الرعاة */}
          <div className="hz-sponsors">
            <h4 className="hz-sponsors-title">Sponsors:</h4>
            <div className="hz-sponsor-logos">
              {Array.isArray(sponsors) && sponsors.length > 0 ? (
                sponsors.map((sponsor, index) => (
                  <div className="hz-sponsor-item" key={index}>
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="hz-sponsor-logo"
                      loading="lazy"
                    />
                    <span className="hz-sponsor-name">{sponsor.name}</span>
                  </div>
                ))
              ) : (
                <p className="hz-no-sponsors">
                  There are no sponsors for this event.
                </p>
              )}
            </div>
          </div>
        </div>
        {/* الأزرار */}
        <div className="hz-buttons">
          <button className="hz-join-button HZ-BOOK " onClick={handleJoin}>
            BOOK NOW!
          </button>

          <button className=" hz-back-arrow" onClick={onFlip}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CardBack;
