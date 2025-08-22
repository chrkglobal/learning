import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div style={{
      height: "60px",
      background: "#222",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px"
    }}>
      <h2>Admin Portal</h2>

      <div style={{ position: "relative" }}>
        <div 
          onClick={() => setOpen(!open)} 
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <img 
            src="https://i.pravatar.cc/40" 
            alt="User" 
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <span>John Doe ▾</span>
        </div>

        {open && (
          <div style={{
            position: "absolute",
            right: 0,
            top: "50px",
            background: "#fff",
            color: "#000",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            width: "150px",
            zIndex: 100
          }}>
            <ul style={{ listStyle: "none", padding: "10px", margin: 0 }}>
              <li 
                style={{ padding: "8px", cursor: "pointer" }} 
                onClick={() => navigate("/profile")}
              >
                👤 Profile
              </li>
              <li 
                style={{ padding: "8px", cursor: "pointer" }} 
                onClick={() => navigate("/settings")}
              >
                ⚙️ Settings
              </li>
              <li 
                style={{ padding: "8px", cursor: "pointer", color: "red" }}
                onClick={handleLogout}
              >
                🚪 Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
