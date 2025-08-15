const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

// MySQL connection
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

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ------------------ Students ------------------

// Get all students
app.get("/students", (req, res) => {
  db.query(
    "SELECT id, name, roll_number, class, profile FROM students",
    (err, results) => {
      if (err) {
        console.error("❌ Error fetching students:", err); // ye add karo
        return res.status(500).send("Database error");
      }
      res.json(results);
    }
  );
});

// Add new student with profile upload
app.post("/students", upload.single("profile"), (req, res) => {
  const { name, roll_number, class: studentClass } = req.body;
  let profile = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !roll_number || !studentClass)
    return res.status(400).json({ message: "All fields required" });

  db.query(
    "INSERT INTO students (name, roll_number, class, profile) VALUES (?, ?, ?, ?)",
    [name, roll_number, studentClass, profile],
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB error" });
      res.json({ message: "Student added", id: result.insertId });
    }
  );
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
