import React from 'react';
import HabitList from '../components/HabitList';

export default function HabitsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Habits</h1>
      <HabitList />
    </div>
  );
};