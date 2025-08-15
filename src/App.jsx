import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import StudentList from "./Components/StudentList";
import TeacherList from "./Components/TeacherList";
import AttendanceCards from "./Components/AttendanceCards";
import AddStudent from "./Components/AddStudent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />{" "}
          {/* Login replace with Dashboard */}
          <Route
            element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/attendance" element={<AttendanceCards />} />
            <Route path="/add-student" element={<AddStudent />} />{" "}
            {/* Separate Add Student page */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
