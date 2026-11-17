import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Pickupform() {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const generateTimeSlots = () => {
    const slots = [];
    let start = 9 * 60 + 30; // Start time in minutes (9:30 AM)
    const end = 21 * 60 + 30; // End time in minutes (9:30 PM)

    while (start <= end) {
      const hours = Math.floor(start / 60);
      const minutes = start % 60;
      const period = hours >= 12 ? "PM" : "AM";
      const adjustedHours = hours % 12 === 0 ? 12 : hours % 12;
      const timeString = `${adjustedHours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${period}`;
      slots.push(timeString);
      start += 15; // Increment by 15 minutes
    }
    return slots;
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const timeSlots = generateTimeSlots();

  const onchange = (change) => {
    console.log(change);
    setDate(change);
  };

  const handleFocus = () => {
    setShowCalendar(true);
  };

  const handleBlur = () => {
    // Delay hiding the calendar to allow date selection
    setTimeout(() => setShowCalendar(false), 400);
  };

  return (
    <>
      <h1 className="flex justify-center text-4xl font-bold mt-20 text-darkgreen">
        Start a Pick Up Order
      </h1>
      <p className="flex justify-center text-gray-400 mt-10">
        We'll contact you within 12 hours from submitting your catering request.
      </p>
      <div className="">
        <form className="  w-90% bg-gray-100 mt-10 m-auto">
          <div className="grid grid-cols-3 gap-4 p-10 ml-10">
            <div>
              <div>
                <label htmlFor="name ">Name*</label>
              </div>
              <input
                className="bg-gray-100 border-2 h-9 w-64 hover:border-black"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <div>
                <label htmlFor="email">Email*</label>
              </div>
              <input
                className="bg-gray-100 border-2 h-9 w-64 hover:border-black"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <div>
                <label htmlFor="date">Select a Date*</label>
              </div>
              <input
                className="bg-gray-100 border-2 h-9 w-64 hover:border-black"
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {showCalendar && (
                <div className="calendar-popup relative">
                  <Calendar
                    className="-z-0 absolute"
                    onChange={onchange}
                    value={date}
                  />
                </div>
              )}
            </div>
            <div>
              <div>
                <label htmlFor="Sandwich">Sandwich</label>
              </div>
              <input
                className="bg-gray-100 border-2 h-9 w-64 hover:border-black"
                type="number"
                placeholder="Name"
              />
            </div>
            <div>
              <div>
                <label htmlFor="Tenderbasket">3 Pc Tender Basket</label>
              </div>
              <input
                className="bg-gray-100 border-2  h-9 w-64 hover:border-black"
                type="number"
                placeholder="Name"
              />
            </div>
            <div>
              <div>
                <label htmlFor="time-select">Choose a Time</label>
              </div>
              <select
                id="time-select"
                className="h-10 text-slate-400"
                value={selectedTime}
                onChange={handleTimeChange}
              >
                <option value="" disabled>
                  Choose a time
                </option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full" style={{gridRow: '3 / span 6', gridColumn: '1 / span 3'}}>
              <div>
                <label htmlFor="orderdetails">Order Details</label>
              </div>
              <textarea
                name="orderdetails"
                className="bg-gray-100 w-100% border-2 border-darkgreen h-56"
                id="order"
              ></textarea>
            </div>
          </div>
          <div className="relative h-32">
            <button className="border-2 border-darkgreen w-64 h-9 my-10 bg-darkgreen text-white hover:bg-slate-100 hover:text-black absolute right-24">
              send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Pickupform;
