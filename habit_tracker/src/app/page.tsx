"use client";
import React, { useState } from 'react';
import Calendar from './components/Calendar';
import HabitList from './components/HabitList';

export default function Home() {
  const [view, setView] = useState<'calendar' | 'habits'>('calendar');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Habit Tracker</h1>
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setView('calendar')}
            className={`p-2 ${view === 'calendar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setView('habits')}
            className={`p-2 ${view === 'habits' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Habits View
          </button>
        </div>
        {view === 'calendar' ? <Calendar /> : <HabitList />}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
