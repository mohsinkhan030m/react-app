import React from "react";
import { FaUserGraduate } from "react-icons/fa";

const students = [
  {
    id: 1,
    name: "Ali Khan",
    roll: "BSIT-001",
    program: "BS IT",
    semester: "5th",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    roll: "BSIT-002",
    program: "BS IT",
    semester: "5th",
  },
  {
    id: 3,
    name: "Zainab Raza",
    roll: "BSCS-005",
    program: "BS CS",
    semester: "3rd",
  },
  {
    id: 4,
    name: "Ahmed Iqbal",
    roll: "BSSE-010",
    program: "BS SE",
    semester: "7th",
  },
];

const StudentList = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaUserGraduate className="text-blue-600" />
        Student List
      </h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-2xl border">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-blue-600 text-white text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Roll No</th>
              <th className="px-6 py-3">Program</th>
              <th className="px-6 py-3">Semester</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => (
              <tr
                key={student.id}
                className="hover:bg-blue-50 transition-all duration-150"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {index + 1}
                </td>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.roll}</td>
                <td className="px-6 py-4">{student.program}</td>
                <td className="px-6 py-4">{student.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
