"use client";
import React, { useState } from 'react';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div >
      <main >
        <NavBar />
        <h1>Habit Tracker</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
