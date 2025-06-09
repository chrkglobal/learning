const express = require('express');
const cors = require('cors');

    const bodyParser = require('body-parser');
    const app = express();
    const port = 3000;

    app.use(cors());
    app.use (bodyParser.json());

    // Sample in-memory data (replace with a database later)
    let students = [
      { id: 1, name: 'John Doe', grade: 'A' },
      { id: 2, name: 'Jane Smith', grade: 'B' },
     { id: 3, name: 'Jane wills', grade: 'B' },
    ];

    // GET all students
    app.get('/students', (req, res) => {
      res.json(students);
    });

    // GET a single student by ID
    app.get('/students/:id', (req, res) => {
      const studentId = parseInt(req.params.id);
      const student = students.find((s) => s.id === studentId);
      if (student) {
        res.json(student);
      } else {
        res.status(404).send('Student not found');
      }
    });

    // POST a new student
    app.post('/students', (req, res) => {
      const newStudent = req.body;
      newStudent.id = students.length + 1;
      students.push(newStudent);
      res.status(201).json(newStudent);
    });

    // PUT (update) an existing student
    app.put('/students/:id', (req, res) => {
        const studentId = parseInt(req.params.id);
        const updatedStudent = req.body;
        const index = students.findIndex(s => s.id === studentId);
        if (index !== -1) {
            students[index] = {...students[index], ...updatedStudent};
            res.json(students[index]);
        } else {
            res.status(404).send('Student not found');
        }
    });

    // DELETE a student
    app.delete('/students/:id', (req, res) => {
      const studentId = parseInt(req.params.id);
      students = students.filter(s => s.id !== studentId);
      res.send("Student deleted");
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
