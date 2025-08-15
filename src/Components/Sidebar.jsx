import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaHome,
  FaUserPlus,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-800 text-white min-h-screen px-6 py-8 shadow-xl flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          🎓 UniPanel
        </h2>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                isActive ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"
              }`
            }
          >
            <FaHome /> Dashboard
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                isActive ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"
              }`
            }
          >
            <FaUserGraduate /> Students
          </NavLink>

          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                isActive ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"
              }`
            }
          >
            <FaChalkboardTeacher /> Teachers
          </NavLink>

          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                isActive ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"
              }`
            }
          >
            🗒 Attendance
          </NavLink>
        </nav>
      </div>

      {/* Add Student Link */}
      <NavLink
        to="/add-student"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
            isActive ? "bg-blue-600 font-semibold" : "hover:bg-blue-700"
          }`
        }
      >
        <FaUserPlus /> Add Student
      </NavLink>
    </aside>
  );
};

export default Sidebar;
