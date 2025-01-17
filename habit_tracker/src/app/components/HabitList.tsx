"use client";
import React, { useState, useEffect } from 'react';

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

  const fetchHabits = async () => {
    const response = await fetch('/api/habits');
    const data = await response.json();
    setHabits(data);
  };

  const addHabit = async () => {
    if (newHabit.trim()) {
      const response = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Date.now(), name: newHabit, completedDays: 0, weeklyGoal }),
      });
      const data = await response.json();
      setHabits([...habits, data]);
      setNewHabit('');
      setWeeklyGoal(0);
    }
  };

  const deleteHabit = async (id: number) => {
    await fetch('/api/habits', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const markAsCompleted = async (id: number) => {
    const habit = habits.find(habit => habit.id === id);
    if (habit) {
      const updatedHabit = { ...habit, completedDays: habit.completedDays + 1 };
      await fetch('/api/habits', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedHabit),
      });
      setHabits(habits.map(habit => habit.id === id ? updatedHabit : habit));
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

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