import React from 'react';
import HabitList from '../components/HabitList';

const HabitsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Habits</h1>
      <HabitList />
    </div>
  );
};

export default HabitsPage;