import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // simple redirect
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <TextField label="Name" variant="outlined" type="text" placeholder="Username" required />
        <TextField label="Password"  type="password" placeholder="Password" variant="outlined" />

        

        {/* <input type="text" placeholder="Username" required style={{ display: "block", margin: "10px 0" }} />
        <input type="password" placeholder="Password" required style={{ display: "block", margin: "10px 0" }} /> */}


        <Button type="submit" variant="contained" color="primary">Login</Button>
        {/* <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button> */}
      </form>
    </div>
  );
}
