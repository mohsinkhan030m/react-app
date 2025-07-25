// Layout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
