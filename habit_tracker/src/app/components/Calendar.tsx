"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarProps {
  minDate?: Date;
  maxDate?: Date;
}

type CalendarValue = Date | [Date, Date]; // Single date or exact range

export default function CustomCalendar({
  minDate = new Date("2021-01-01"),
  maxDate = new Date("2027-12-31"),
}: CalendarProps) {
  const [date, setDate] = useState<CalendarValue>(new Date());

  console.log("Selected date:", date);

  return (
      <div className= "flex justify-center p-8 bg-white">
        <Calendar className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-1/2 lg:w-1/3"
          onChange={(value) => setDate(value as CalendarValue)} 
          value={date}
          minDate={minDate}
          maxDate={maxDate}
          tileClassName="text-xl font-medium hover:bg-blue-100 hover:text-blue-800 rounded-full transition duration-200 ease-in-out"
        />
      </div>
    
  );
}