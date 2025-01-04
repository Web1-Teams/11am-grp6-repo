// src/pages/EventPage/EventPage.jsx
import React from "react";
import EventCard from "../../components/FB-EventCard/EventCard";
import "./EventPage.css";
import { Toaster } from "react-hot-toast";
// import eventImage from"../../components/EventCard/imgs/385895981_122123332418032872_8395541712617587456_n.jpg";
const EventPage = () => {
  // بيانات الفعاليات (يمكن جلبها من API في المستقبل)
  const events = [
    {
      id: 1,
      eventName: "Jericho Food Festival",
      eventDate: "2025-Apr-08",
      eventLocation: "Jericho City Center",
      eventImage: "/event-imgs/food.png",
      eventDescription:
        "Indulge in the finest Palestinian dishes and culinary traditions at the Jericho Food Festival. Enjoy live cooking shows and cultural performances.",
      sponsors: [
        { name: "ArabBank", logo: "/event-imgs/reflect.jpeg" },
        { name: "AnNajah", logo: "/event-imgs/annajah.png" },
      ],
      ticketPrice: "$25 per person.",
    },
    {
      id: 2,
      eventName: "Science and Innovation Fair",
      eventDate: "2025-Feb-25",
      eventLocation: "An-Najah National University",
      eventImage: "/event-imgs/robot.png",
      eventDescription:
        "A platform for students and professionals to showcase their latest scientific and innovative projects. The fair includes interactive demonstrations and competitions.",
      sponsors: [
        { name: "ArabBank", logo: "/event-imgs/arabbank.jpeg" },
        { name: "AnNajah", logo: "/event-imgs/Jawwal.png" },
      ],
      ticketPrice: "$30 per entry",
    },
    {
      id: 3,
      eventName: "Olive Harvest Festival",
      eventDate: "2025-Jul-05",
      eventLocation: "Old City of Nablus",
      eventImage: "/event-imgs/Olive Harvest Festival.jpg",
      eventDescription:
        "Celebrate the olive harvest season in the heart of Nablus. The event features traditional food, folklore performances, and local crafts.",
      sponsors: [
        { name: "Jawwal", logo: "/event-imgs/Jawwal.png" },
        { name: "Paltel", logo: "/event-imgs/paltel.png" },
      ],
      ticketPrice: "$12 per entry",
    },
    {
      id: 4,
      eventName: "Nablus Cultural Night",
      eventDate: "2025-Oct-10",
      eventLocation: "Khan Al-Tujjar, Old City",
      eventImage: "/event-imgs/Nablus Cultural Night.webp",
      eventDescription:
        "Enjoy an enchanting evening of music, poetry, and traditional Palestinian culture at the historic Khan Al-Tujjar.",
      sponsors: [
        { name: "PalBank", logo: "/event-imgs/palestinebank.jpeg" },
        { name: "Reflect", logo: "/event-imgs/reflect.jpeg" },
      ],
      ticketPrice: "$10 per entry",
    },
    {
      id: 5,
      eventName: "Modern Art Exhibition",
      eventDate: "2025-Jun-15",
      eventLocation: "Nablus Art Gallery",
      eventImage: "/event-imgs/Modern Art Exhibition.jpg",
      eventDescription:
        "Discover the latest works by local and international artists at the Modern Art Exhibition in Nablus. Enjoy live performances and art workshops.",
      sponsors: [
        { name: "AnNajah", logo: "/event-imgs/annajah.png" },
        { name: "ArabBank", logo: "/event-imgs/arabbank.jpeg" },
      ],
      ticketPrice: "$15 per entry",
    },
    {
      id: 6,
      eventName: "Traditional Handicrafts Market",
      eventDate: "2025-Oct-20",
      eventLocation: "Nablus Old Souq",
      eventImage: "/event-imgs/Dilli-Haat-1.jpg",
      eventDescription:
        "Explore the vibrant handicrafts market in Nablus, featuring handmade goods, embroidery, and pottery from local artisans.",
      sponsors: [
        { name: "Paltel", logo: "/event-imgs/paltel.png" },
        { name: "Jawwal", logo: "/event-imgs/Jawwal.png" },
      ],
      ticketPrice: "$25 per entry",
    },
    {
      id: 7,
      eventName: "Nablus Film Fest",
      eventDate: "2025-May-21",
      eventLocation: "Nablus Cultural Center, Nablus",
      eventImage: "/event-imgs/Nablus Film Fest.webp",
      eventDescription:
        "A celebration of Palestinian and international cinema with workshops, screenings, and live performances.",
      sponsors: [
        { name: "AnNajah", logo: "/event-imgs/annajah.png" },
        { name: "Paltel", logo: "/event-imgs/paltel.png" },
      ],
      ticketPrice: "$15 per day pass",
    },

    {
      id: 8,
      eventName: "Ramallah Tech Summit",
      eventDate: "2025-Apr-20",
      eventLocation: "Ramallah Convention Center",
      eventImage: "/event-imgs/w3.png",
      eventDescription:
        "Join leaders to discuss the latest in technology and innovation with workshops.",
      sponsors: [
        { name: "ArabBank", logo: "/event-imgs/arabbank.jpeg" },
        { name: "Jawwal", logo: "/event-imgs/Jawwal.png" },
      ],
      ticketPrice: "$22 for full access",
    },
    {
      id: 9,
      eventName: "Nablus Olive Fest",
      eventDate: "2025-Oct-18",
      eventLocation: "Nablus Olive Groves",
      eventImage: "/event-imgs/olivNABLUS.jpg",
      eventDescription:
        "Celebrate the olive harvest with traditional music, dance, and olive oil tastings.",
      sponsors: [
        { name: "Paltel", logo: "/event-imgs/paltel.png" },
        { name: "Reflect", logo: "/event-imgs/reflect.jpeg" },
      ],
      ticketPrice: "$28 per person",
    },
    {
      id: 10,
      eventName: "Jenin Book Fair",
      eventDate: "2025-Mar-18",
      eventLocation: "Jenin Seaport, Jenin City",
      eventImage: "/event-imgs/frfrrfr.jpg",
      eventDescription:
        "Explore a wide range of books, author signings, and literary discussions.",
      sponsors: [
        { name: "AnNajah", logo: "/event-imgs/annajah.png" },
        { name: "ArabBank", logo: "/event-imgs/arabbank.jpeg" },
      ],
      ticketPrice: "$15 for a day pass",
    },
  ];

  return (
    <div className="hz-event-page">
      <h1 className="hz-page-title">NEXT EVENTS </h1>
      <div className="hz-event-cards-container">
        {events.map((event) => (
          <EventCard
            key={event.id}
            eventName={event.eventName}
            eventDate={event.eventDate}
            eventLocation={event.eventLocation}
            eventImage={event.eventImage}
            eventDescription={event.eventDescription}
            sponsors={event.sponsors}
            ticketPrice={event.ticketPrice}
          />
        ))}
      </div>
       <Toaster position="top-center" />
    </div>
  );
};

export default EventPage;
