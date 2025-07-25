import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const teachers = [
  {
    id: 1,
    name: "Dr. Usman Tariq",
    department: "Computer Science",
    email: "usman.tariq@university.edu",
  },
  {
    id: 2,
    name: "Ms. Ayesha Khan",
    department: "Software Engineering",
    email: "ayesha.khan@university.edu",
  },
  {
    id: 3,
    name: "Mr. Kamran Ali",
    department: "Information Technology",
    email: "kamran.ali@university.edu",
  },
  {
    id: 4,
    name: "Prof. Saba Ahmed",
    department: "Artificial Intelligence",
    email: "saba.ahmed@university.edu",
  },
];

const TeacherList = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaChalkboardTeacher className="text-purple-600" />
        Teacher List
      </h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-2xl border">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-purple-700 text-white text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {teachers.map((teacher, index) => (
              <tr
                key={teacher.id}
                className="hover:bg-purple-50 transition-all duration-150"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{teacher.name}</td>
                <td className="px-6 py-4">{teacher.department}</td>
                <td className="px-6 py-4">{teacher.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherList;
