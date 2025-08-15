// src/Components/AttendanceCards.jsx
import React, { useEffect, useState } from "react";

const AttendanceCards = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Map frontend button → backend value
  const statusMap = {
    P: "Present",
    A: "Absent",
    Late: "Late",
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:5000/students");
        if (!res.ok) throw new Error("Failed to fetch students");
        const data = await res.json();
        setStudents(
          data.map((student) => ({
            ...student,
            status: "P", // default status
            profile:
              student.profile || `https://i.pravatar.cc/150?u=${student.id}`,
          }))
        );
      } catch (err) {
        console.error(err);
        setError("⚠️ Could not load students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      for (const student of students) {
        const res = await fetch("http://localhost:5000/attendance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            student_id: student.id,
            status: statusMap[student.status],
            date: new Date().toISOString().split("T")[0],
          }),
        });
        if (!res.ok) throw new Error("Submit failed");
      }
      alert("✅ Attendance submitted successfully!");
      // Reset all to default "P"
      setStudents((prev) => prev.map((s) => ({ ...s, status: "P" })));
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit attendance");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        📋 Mark Attendance
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform"
          >
            {/* Profile Image */}
            <img
              src={student.profile}
              alt={student.name}
              className="w-20 h-20 rounded-full mb-3 object-cover border-2 border-blue-500"
            />

            {/* Name */}
            <h3 className="text-lg font-semibold mb-2">{student.name}</h3>

            {/* Status Buttons */}
            <div className="flex space-x-2">
              {["P", "A", "Late"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleStatusChange(student.id, opt)}
                  className={`px-3 py-1 rounded-full font-medium text-white ${
                    student.status === opt
                      ? opt === "P"
                        ? "bg-green-500"
                        : opt === "A"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className={`px-6 py-2 rounded-lg shadow-md text-white ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {submitting ? "Submitting..." : "Submit Attendance"}
        </button>
      </div>
    </div>
  );
};

export default AttendanceCards;
