"use client";
import React, { useState } from 'react';

interface Habit {
  id: number;
  name: string;
  completedDays: number;
  weeklyGoal: number;
}

export default function HabitList() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState<string>('');
  const [weeklyGoal, setWeeklyGoal] = useState<number>(0);

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { id: Date.now(), name: newHabit, completedDays: 0, weeklyGoal }]);
      setNewHabit('');
      setWeeklyGoal(0);
    }
  };

  const deleteHabit = (id: number) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const markAsCompleted = (id: number) => {
    setHabits(habits.map(habit => habit.id === id ? { ...habit, completedDays: habit.completedDays + 1 } : habit));
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Habits</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="border p-2 mr-2"
          placeholder="New Habit"
        />
        <input
          type="number"
          value={weeklyGoal}
          onChange={(e) => setWeeklyGoal(Number(e.target.value))}
          className="border p-2 mr-2"
          placeholder="Weekly Goal"
        />
        <button onClick={addHabit} className="bg-blue-500 text-white p-2">Add Habit</button>
      </div>
      <ul>
        {habits.map(habit => (
          <li key={habit.id} className="mb-2 flex justify-between items-center">
            <span>{habit.name} - {habit.completedDays} days completed / {habit.weeklyGoal} days goal</span>
            <div>
              <button onClick={() => markAsCompleted(habit.id)} className="bg-green-500 text-white p-2 mr-2">Complete</button>
              <button onClick={() => deleteHabit(habit.id)} className="bg-red-500 text-white p-2">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};