"use client";
import React, { useState, useEffect } from "react";

interface Habit {
  id: number;
  name: string;
  completedDays: number;
  weeklyGoal: number;
  completedWeeks?: number;
}

export default function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [habitName, setHabitName] = useState("");
  const [weeklyGoal, setWeeklyGoal] = useState<number | "">("");

  // Fetch habits from the database on load
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/habits");
        if (!response.ok) throw new Error("Failed to fetch habits.");
        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchHabits();
  }, []);

  // Add a new habit to the database
  const handleAddHabit = async () => {
    if (!habitName || !weeklyGoal) {
      alert("Please provide both habit name and goal days.");
      return;
    }

    const newHabit: Omit<Habit, "id"> = {
      name: habitName,
      completedDays: 0,
      weeklyGoal: Number(weeklyGoal),
    };

    try {
      const response = await fetch("http://localhost:3000/api/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHabit),
      });

      if (!response.ok) throw new Error("Failed to add habit.");

      const createdHabit: Habit = await response.json();
      setHabits((prev) => [...prev, createdHabit]);

      setHabitName("");
      setWeeklyGoal("");
    } catch (error) {
      console.error("Error adding habit:", error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Form Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Add a New Habit</h2>
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Habit Name:</label>
            <input
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
              placeholder="Enter habit name"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Weekly Goal (Days):</label>
            <input
              type="number"
              value={weeklyGoal}
              onChange={(e) => setWeeklyGoal(Number(e.target.value))}
              placeholder="Enter goal days"
              className="w-full p-2 border rounded-lg"
              min={1}
              max={7}
            />
          </div>
          <button
            onClick={handleAddHabit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Habit
          </button>
        </div>
      </div>

      {/* Habit List */}
      <div className="space-y-6">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="p-4 bg-gray-100 shadow rounded-lg flex justify-between items-center"
          >
            {/* Name and Progress */}
            <div className="flex items-center">
              <h3 className="text-lg font-bold mr-4">{habit.name}</h3>
              <div className="flex space-x-2">
                {Array.from({ length: habit.weeklyGoal }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full ${
                      index < habit.completedDays ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 