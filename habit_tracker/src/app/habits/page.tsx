import React from 'react';
import HabitList from '../components/HabitList';
import NavBar from '../components/NavBar';
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function HabitsPage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/habits');
  }
  return (
    <div>
      <NavBar />
      <HabitList />
    </div>
  );
};