import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsersCog,
  FaUniversity,
} from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: 120,
      icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
      color: "bg-blue-100",
    },
    {
      title: "Total Teachers",
      value: 25,
      icon: <FaChalkboardTeacher className="text-purple-600 text-3xl" />,
      color: "bg-purple-100",
    },
    {
      title: "Departments",
      value: 6,
      icon: <FaUniversity className="text-green-600 text-3xl" />,
      color: "bg-green-100",
    },
    {
      title: "Admins",
      value: 3,
      icon: <FaUsersCog className="text-yellow-600 text-3xl" />,
      color: "bg-yellow-100",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-5 rounded-2xl shadow-md ${stat.color} flex items-center justify-between transition hover:scale-[1.02]`}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <div>{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
