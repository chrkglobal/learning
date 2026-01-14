import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// REGISTER
export const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, hashed, role || "buyer"], (err, result) => {
    if (err) return res.status(400).json({ error: err.sqlMessage });
    res.json({ message: "User registered successfully" });
  });
};

// LOGIN
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ error: "User not found" });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      message: "Login successful",
      token,
      role: user.role,
      name: user.name,
      email: user.email,
    });
  });
};

// PROFILE
export const getProfile = (req, res) => {
  const userId = req.user.id;
  db.query("SELECT id, name, email, role FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};
