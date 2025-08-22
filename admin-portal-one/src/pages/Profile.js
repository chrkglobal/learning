import React, { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    role: "Admin"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    alert("✅ Profile updated successfully!");
    // In real project: send `formData` to backend API
  };

  return (
    <div className="container">
      <h1>👤 My Profile</h1>

      {/* Profile Card */}
      <div className="row mt-4">
        <div className="col-md-12">
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        marginBottom: "20px"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img 
            src="https://i.pravatar.cc/100" 
            alt="User Avatar" 
            style={{ borderRadius: "50%", marginRight: "20px" }}
          />
          <div>
            <h2>{formData.name}</h2>
            <p>{formData.role}</p>
            <p>{formData.email}</p>
          </div>
        </div>
      </div>
     

      {/* Edit Form */}
       
        
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
      }}>
        <h3>Edit Profile</h3>
        <div style={{ marginBottom: "10px" }}>
          <label>Name</label><br />
          <input 
            className="profile-input"
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email</label><br />
          <input 
           className="profile-input"
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Phone</label><br />
          <input 
           className="profile-input"
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button 
          onClick={handleSave} 
          style={{
            padding: "10px 20px",
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Save Changes
        </button>
      </div>
</div>
</div>

    </div>
  );
}
