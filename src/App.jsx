// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import StudentList from "./Components/StudentList";
import TeacherList from "./Components/TeacherList";
import Login from "./Components/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/teachers" element={<TeacherList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
