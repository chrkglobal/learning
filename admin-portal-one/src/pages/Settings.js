import React, { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    reports: true,
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handlePasswordChange = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("❌ New password and confirm password do not match");
      return;
    }
    alert("✅ Password changed successfully!");
    // In real app, send to backend API
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h1>⚙️ Settings</h1>

      {/* Account Settings */}
      <section style={sectionStyle}>
        <h3>Account Settings</h3>
        <div style={{ marginBottom: "10px" }}>
          <label>Old Password</label><br />
          <input 
            type="password" 
            value={passwords.oldPassword} 
            onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>New Password</label><br />
          <input 
            type="password" 
            value={passwords.newPassword} 
            onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Confirm Password</label><br />
          <input 
            type="password" 
            value={passwords.confirmPassword} 
            onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle} onClick={handlePasswordChange}>Change Password</button>
      </section>

      {/* Theme & Preferences */}
      <section style={sectionStyle}>
        <h3>Preferences</h3>
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input 
            className="profile-input"
              type="checkbox" 
              checked={darkMode} 
              onChange={() => setDarkMode(!darkMode)} 
            /> Enable Dark Mode
          </label>
        </div>
        <div>
          <label>Language</label><br />
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)} 
            style={inputStyle}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </section>

      {/* Notifications */}
      <section style={sectionStyle}>
        <h3>Notifications</h3>
        <div className="container">
        <label>
          <input 
          className="profile-input"
            type="checkbox" 
            checked={notifications.email} 
            onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
          /> Email Alerts
        </label><br />

        <label>
          <input 
          className="profile-input"
            type="checkbox" 
            checked={notifications.push} 
            onChange={() => setNotifications({ ...notifications, push: !notifications.push })}
          /> Push Notifications
        </label><br />

        <label>
          <input 
          className="profile-input"
            type="checkbox" 
            checked={notifications.reports} 
            onChange={() => setNotifications({ ...notifications, reports: !notifications.reports })}
          /> Weekly Reports
        </label>
</div>
      </section>
    </div>
  );
}

// 🔹 Simple reusable styles
const sectionStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  marginBottom: "20px"
};

const inputStyle = {
  width: "95%",
  padding: "8px",
  marginTop: "5px"
};

const buttonStyle = {
  padding: "10px 20px",
  background: "#222",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
