import React, { useEffect, useState } from "react";

const AttendanceCards = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:5000/students");
      const data = await res.json();
      setStudents(data.map((s) => ({ ...s, status: "P" })));
    } catch (err) {
      console.error("⚠️ Could not load students", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const handleSubmit = async () => {
    for (const student of students) {
      await fetch("http://localhost:5000/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id: student.id,
          date: new Date().toISOString().split("T")[0],
          status: student.status,
        }),
      });
    }
    alert("✅ Attendance submitted!");
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        📋 Mark Attendance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
          >
            <img
              src={
                student.profile
                  ? `http://localhost:5000${student.profile}`
                  : `https://i.pravatar.cc/150?u=${student.id}`
              }
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h3 className="text-lg font-semibold mb-2">{student.name}</h3>
            <div className="flex space-x-2">
              {["P", "A", "Late"].map((statusOption) => (
                <button
                  key={statusOption}
                  className={`px-3 py-1 rounded-full font-medium text-white ${
                    student.status === statusOption
                      ? statusOption === "P"
                        ? "bg-green-500"
                        : statusOption === "A"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                      : "bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => handleStatusChange(student.id, statusOption)}
                >
                  {statusOption}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default AttendanceCards;
