import {
  FaUsers,
  FaUserTie,
  FaClipboardList,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-700 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        SafeX
      </h1>

      <nav>

        <ul className="space-y-4">

          {/* Candidate Directory */}

          <li>

            <NavLink
              to="/candidates"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive
                    ? "bg-blue-900"
                    : "hover:bg-blue-800"
                }`
              }
            >
              <FaUsers />

              Candidate Directory

            </NavLink>

          </li>

          {/* Group & Leader View */}

          <li>

            <NavLink
              to="/groups"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive
                    ? "bg-blue-900"
                    : "hover:bg-blue-800"
                }`
              }
            >
              <FaUserTie />

              Group & Leader View

            </NavLink>

          </li>

          {/* Weekly Task Tracker */}

          <li>

            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg ${
                  isActive
                    ? "bg-blue-900"
                    : "hover:bg-blue-800"
                }`
              }
            >
              <FaClipboardList />

              Weekly Task Tracker

            </NavLink>

          </li>

        </ul>

      </nav>

    </aside>
  );
}