import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import NavBar from './components/NavBar';
import Calendar from './components/Calendar';

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <div >
      <main >
        <NavBar />
        <h1 className="text-4xl font-bold text-gray-800 text-center my-4">Habit Tracker</h1>
        { session ? (
          <Calendar />

        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to access the Habit Tracker</h2>
          </div>
        )}
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
