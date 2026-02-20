exports.addUser = (req, res) => {
  const { name, email } = req.body;

  // check duplicate email
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email],
      (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "User added successfully" });
      }
    );
  });
};
