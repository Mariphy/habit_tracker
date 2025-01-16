"use client";
import 'cally/dist/index.css';
import '../types/cally';
import React from "react";
import { useEffect } from "react";

export const Calendar: React.FC = () => {
  useEffect(() => {
    import("cally"); // Dynamically import the Cally library
  }, []);

  return (
    <calendar-range months="1">
      <calendar-month></calendar-month>
      <calendar-month offset="1"></calendar-month>
    </calendar-range>
  );
};

export default Calendar;