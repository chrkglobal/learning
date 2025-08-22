import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fake login (you can replace with real auth)
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <h1>🔐 Login Page</h1>
      <button 
        onClick={handleLogin} 
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
}
