"use client";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'calendar-range': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        months?: string;
        min?: string;
        max?: string;
        children?: React.ReactNode;
      };
      'calendar-month': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        offset?: string;
      };
    }
  }
}

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