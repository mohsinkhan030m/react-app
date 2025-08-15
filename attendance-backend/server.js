const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "attendance_system",
});

db.connect((err) => {
  if (err) return console.error("❌ DB connection failed:", err);
  console.log("✅ Connected to MySQL Database");
});

// ------------------ Students ------------------
app.get("/students", (req, res) => {
  db.query("SELECT id, name, profile FROM students", (err, results) => {
    if (err) return res.status(500).send("Database error");
    res.json(results);
  });
});

// ------------------ Attendance ------------------
app.post("/attendance", (req, res) => {
  const { student_id, date, status } = req.body;
  if (!student_id || !date || !status)
    return res.status(400).json({ message: "All fields required" });

  const checkSql = "SELECT * FROM attendance WHERE student_id = ? AND date = ?";
  db.query(checkSql, [student_id, date], (err, results) => {
    if (err) return res.status(500).json({ message: "DB error" });

    if (results.length > 0) {
      db.query(
        "UPDATE attendance SET status = ? WHERE student_id = ? AND date = ?",
        [status, student_id, date],
        (err2) => {
          if (err2) return res.status(500).json({ message: "DB error" });
          res.json({ message: "Attendance updated" });
        }
      );
    } else {
      db.query(
        "INSERT INTO attendance (student_id, date, status) VALUES (?, ?, ?)",
        [student_id, date, status],
        (err3, result) => {
          if (err3) return res.status(500).json({ message: "DB error" });
          res.json({ message: "Attendance added", id: result.insertId });
        }
      );
    }
  });
});

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
