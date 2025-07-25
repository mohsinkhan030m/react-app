// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-white shadow-md rounded-md px-6 py-4 mb-6 flex justify-between items-center">
      <h3 className="text-lg font-semibold text-blue-800">Admin Panel</h3>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Logout
      </button>
    </div>
  );
};

export default Topbar;
