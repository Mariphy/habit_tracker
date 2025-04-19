import CustomCalendar from "../components/Calendar";
import NavBar from "../components/NavBar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

export default function CalendarPage() {
  const session = getServerSession(options);
  if (!session) {   
    redirect("/api/auth/signin?callbackUrl=/calendar");
  }
  return (
    <div>
      <NavBar />
      <CustomCalendar />
    </div>
  );
}