"use client";
import React, { useEffect, createElement } from "react";

export const Calendar: React.FC = () => {
  useEffect(() => {
    import("cally"); // Dynamically import the Cally library
  }, []);

  return (
    <div>
      {createElement('calendar-range', { months: "1" }, 
        createElement('calendar-month', null),
        createElement('calendar-month', { offset: "1" })
      )}
    </div>
  );
};

export default Calendar;