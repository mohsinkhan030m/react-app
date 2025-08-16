import React, { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [profile, setProfile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("roll_number", rollNumber);
    formData.append("class", studentClass);
    if (profile) formData.append("profile", profile);

    try {
      const res = await fetch("http://localhost:5000/students", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("✅ Student added successfully!");
        setName("");
        setRollNumber("");
        setStudentClass("");
        setProfile(null);
      } else {
        const data = await res.json();
        alert("❌ Failed: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-lg shadow-md max-w-md mx-auto mt-6"
    >
      <h2 className="text-xl font-bold text-center">➕ Add Student</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="text"
        placeholder="Class"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfile(e.target.files[0])}
        className="w-full"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;
