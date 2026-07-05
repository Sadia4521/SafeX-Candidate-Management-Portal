import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import CandidateDirectory from "./pages/CandidateDirectory";
import Groups from "./pages/Groups";
import WeeklyTasks from "./pages/WeeklyTasks";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1">

          <Header />

          <div className="p-8">

            <Routes>

              <Route
                path="/"
                element={<Navigate to="/candidates" replace />}
              />

              <Route
                path="/candidates"
                element={<CandidateDirectory />}
              />

              <Route
                path="/groups"
                element={<Groups />}
              />
              <Route
                  path="/tasks"
                  element={<WeeklyTasks />}
              />

            </Routes>

          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}