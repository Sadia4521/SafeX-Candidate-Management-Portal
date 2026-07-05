import { FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import profile from "../assets/profile.jpg";
export default function Header() {

  const location = useLocation();

  let title = "Candidate Directory";

  if (location.pathname === "/groups") {
    title = "Group & Leader View";
  }

  if (location.pathname === "/tasks") {
    title = "Weekly Task Tracker";
  }

  return (

    <header className="bg-white shadow-sm p-6 flex justify-between items-center">

      <div>

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <p className="text-gray-500">
          SafeX Intern Candidate Management Portal
        </p>

      </div>

      <div className="flex items-center gap-4">

        <FaBell className="text-xl" />

        <img
          src={profile}
          alt="Sadia"
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-md"
        />

      </div>

    </header>

  );
}