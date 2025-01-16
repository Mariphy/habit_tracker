import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex-row justify-between items-stretch p-4 bg-gray-800 text-white">
            <div className="flex space-x-4">
                <Link href="/" className="text-white m-4">
                    Home
                </Link>
                <Link href="/habits" className="text-white m-4">
                    Habits
                </Link>
                <Link href="/calendar" className="text-white m-4">
                    Calendar
                </Link>
            </div>
        </nav>
    );
}