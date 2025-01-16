"use client";
import React, { useEffect, createElement } from "react";
import NavBar from "./NavBar";

interface CalendarProps {
  months?: number; 
  minDate?: string; 
  maxDate?: string;
}

export default function Calendar({
  months = 1, 
  minDate = "2023-01-01", 
  maxDate = "2023-12-31", 
  //showWeekNumbers = false, // Default to no week numbers
  //startOfWeek = "Sunday", // Default to Sunday as the start of the week
}: CalendarProps) {
  useEffect(() => {
    import("cally"); // Dynamically import the Cally library
  }, []);

  return (
    <div>
      <NavBar />
      {createElement('calendar-range', { months: months.toString(), minDate, maxDate }, 
        createElement('calendar-month', null),
      )}
    </div>
  );
};