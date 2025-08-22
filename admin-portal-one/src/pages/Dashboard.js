import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  // Dummy chart data
  const data = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 7000 },
    { month: "May", revenue: 6000 },
    { month: "Jun", revenue: 8000 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Dashboard</h1>
      <p>Welcome to the admin dashboard. You can track stats and KPIs here.</p>

      {/* Stats Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "30px" }}>
        <StatCard title="Total Users" value="1,245" color="#4CAF50" />
        <StatCard title="Sales" value="325" color="#2196F3" />
        <StatCard title="Revenue" value="$12,450" color="#FF9800" />
        <StatCard title="Active" value="85%" color="#9C27B0" />
      </div>

      {/* Revenue Chart */}
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        marginBottom: "30px"
      }}>
        <h3>Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#2196F3" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Table */}
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
      }}>
        <h3>Recent Activity</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr style={{ background: "#f5f6fa" }}>
              <th style={thStyle}>User</th>
              <th style={thStyle}>Action</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>John Doe</td>
              <td style={tdStyle}>Added a new product</td>
              <td style={tdStyle}>22 Aug, 2025</td>
            </tr>
            <tr>
              <td style={tdStyle}>Jane Smith</td>
              <td style={tdStyle}>Updated settings</td>
              <td style={tdStyle}>21 Aug, 2025</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mike Johnson</td>
              <td style={tdStyle}>Deleted a user</td>
              <td style={tdStyle}>20 Aug, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 🔹 Small reusable card component
function StatCard({ title, value, color }) {
  return (
    <div style={{
      background: color,
      color: "#fff",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ margin: 0 }}>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

// Table styles
const thStyle = { padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" };
const tdStyle = { padding: "10px", borderBottom: "1px solid #eee" };
