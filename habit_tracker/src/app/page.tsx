"use client";
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Calendar from './components/Calendar';

export default function Home() {
  return (
    <div >
      <main >
        <NavBar />
        <h1 className="text-4xl font-bold text-gray-800 text-center my-4">Habit Tracker</h1>
        <Calendar />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
