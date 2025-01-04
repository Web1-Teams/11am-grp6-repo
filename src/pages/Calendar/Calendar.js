import React, { useState, useEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

function Calendar() {
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("eventCalendar"));
    if (storedEvents) {
      setEvents(storedEvents);
      setAllEvents(storedEvents);
    }
  }, []);

  const handleDateClick = (info) => {
    setShowModal(true);
    setEventData({
      ...eventData,
      start: info.dateStr,
      end: info.dateStr,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSaveEvent = () => {
    if (eventData.title && eventData.start && eventData.end) {
      const newEvent = {
        id: events.length + 1,
        title: eventData.title,
        start: eventData.start,
        end: eventData.end,
        description: eventData.description,
      };

      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      setAllEvents(updatedEvents);

      localStorage.setItem("eventCalendar", JSON.stringify(updatedEvents));

      setShowModal(false);
      setEventData({ title: "", description: "", start: "", end: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleEventSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredEvents = allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query)
    );
    setEvents(filteredEvents);
  };

  return (
    <div className="wa-calendar-page">
      <input
        type="text"
        placeholder="Search events"
        onChange={handleEventSearch}
        className="search-bar"
      />

      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          end: "today prev,next",
          center: "title",
          start: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        editable={true}
        droppable={true}
        eventDrop={(info) => {
          const updatedEvents = events.map((event) =>
            event.id === info.event.id
              ? { ...event, start: info.event.start, end: info.event.end }
              : event
          );
          setEvents(updatedEvents);
          setAllEvents(updatedEvents);
          localStorage.setItem("eventCalendar", JSON.stringify(updatedEvents));
        }}
        height={"85vh"}
        dateClick={handleDateClick}
      />

      {showModal && (
        <div className="wa-se modal">
          <div className="wa modal-content">
            <h2 className="wa-header">Add New Note</h2>
            <div className="wa-body">
              <label className="wa-label">Note Title</label>
              <input
                className="wa-input"
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleInputChange}
                placeholder="Enter event title"
              />
            </div>
            <div>
              <label className="wa-label">Description</label>
              <textarea
                className="wa-textarea"
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                placeholder="Enter event description"
              ></textarea>
            </div>
            <div>
              <label className="wa-label">Start Date</label>
              <input
                className="wa-input"
                type="date"
                name="start"
                value={eventData.start}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="wa-label">End Date</label>
              <input
                className="wa-input"
                type="date"
                name="end"
                value={eventData.end}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button className="wa-button" onClick={handleSaveEvent}>
                Save Note
              </button>
              <button
                className="wa-button"
                id="close"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
