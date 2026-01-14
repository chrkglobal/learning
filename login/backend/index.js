const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

  const db = require("./db");
const con = null;

app.use(cors());
app.use(bodyParser.json());

// Dummy user (replace with DB later)
const USER = {
  email: "admin@example.com",
  password: "123456",
};

const connectToDatabase = require('./db');

async function validateUsers(username, password) {
  const db = await connectToDatabase();
qry =  "SELECT count(*) as cnt FROM rk.users where username = '"+username+"' and password = '"+password+"'";
console.log(qry);
  const [rows] = await db.execute(
   qry
  );

  console.log("11111111",rows);

  return rows[0].cnt;
  
  await db.end();
 
}

app.get("/sayHello" ,async (req, res) => {
  console.log("hello world!");
 
  return res.json({
      success: true,
      message: "Hello World",
      token: "dummy-jwt-token",
    });
});

app.get("/marks" ,async (req, res) => {
  console.log("hello world!");
 
  return res.json({
      success: true,
      message: "Maark list will be coming soon",
      token: "dummy-jwt-token",
    });
});
// Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;


 const ret = await validateUsers(email, password);
console.log("result", ret);
  if (ret==1) {
    return res.json({
      success: true,
      message: "Login successful",
      token: "dummy-jwt-token",
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
