import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    ).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateofLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag.push(
        <li key={`current-${i}`} className={isToday}>
          {i}
        </li>
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayofMonth + 1}
        </li>
      );
    }

    return liTag;
  };

  const handlePrevNext = (direction) => {
    let newMonth = currMonth + (direction === "prev" ? -1 : 1);
    if (newMonth < 0 || newMonth > 11) {
      const newDate = new Date(currYear, newMonth, date.getDate());
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
    } else {
      setCurrMonth(newMonth);
    }
  };

  return (
    <>
      <div className="body-calendar">
        {/*<div className="racer">
          <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
            <div className="container-fluid">
              <h1 id="h1style">Calendar</h1>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav" id="astyle">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home Page
                  </a>
                  <a className="nav-link active" href="#">
                    Events
                  </a>
                  <a className="nav-link active" href="#">
                    Schedule your day
                  </a>
                </div>
              </div>
            </div>
          </nav>*/}

        <div className="box">
          <header>
            <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
            <div className="icon">
              <span
                id="prev"
                className="material-symbols-rounded"
                onClick={() => handlePrevNext("prev")}
              >
                <i className="fa-solid fa-chevron-left fa-2xl"></i>
              </span>
              <span
                id="next"
                className="material-symbols-rounded"
                onClick={() => handlePrevNext("next")}
              >
                <i className="fa-solid fa-chevron-right fa-2xl"></i>
              </span>
            </div>
          </header>

          <div className="calendar">
            <ul className="weeks">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="days">{renderCalendar()}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
