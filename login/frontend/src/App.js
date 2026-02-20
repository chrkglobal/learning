import { useState } from "react";
import { Routes } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import '../src/Studentdetails';

 
// import ReactDOM from 'react-dom/client';

import './App.css'; // The path should be relative to the component file

function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/Studentdetails"); // redirect

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

     

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    

    <div className="login-container">

      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="../../Studentdetails" element={<Studentdetails />} /> */}
    </Routes>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-input-text"
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          className="form-input-text"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;
