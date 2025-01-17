import React from "react";

interface Habit {
  id: number;
  name: string;
  completedDays: number;
  weeklyGoal: number;
  completedWeeks?: number;
}

export default async function HabitList() {
  

  const response = await fetch('http://localhost:3000/api/habits');
  const habits: Habit[] = await response.json();

  return (
    <div className="space-y-6">
      {habits.map((habit) => (
        <div
          key={habit.id} 
          className="p-4 bg-gray-100 shadow rounded-lg"
        >
          
          <div className="flex space-x-2 mb-4">
            <h3 className="text-lg font-bold">{habit.name}</h3>
            {Array.from({ length: habit.weeklyGoal }).map((_, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full ${
                  index < habit.completedDays ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <p>Completed Days: {habit.completedDays}</p>
          <p>Weekly Goal: {habit.weeklyGoal}</p>
          {habit.completedWeeks !== undefined && (
            <p>Completed Weeks: {habit.completedWeeks}</p>
          )}
        </div>
      ))}
    </div>
  );
}

 