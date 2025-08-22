import { useEffect, useState } from "react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function Reports() {
  const [salesData, setSalesData] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // 🔹 Sample data (can be replaced with API later)
    setSalesData([
      { month: "Jan", sales: 4000, revenue: 2400 },
      { month: "Feb", sales: 3000, revenue: 1398 },
      { month: "Mar", sales: 5000, revenue: 2800 },
      { month: "Apr", sales: 4780, revenue: 3908 },
      { month: "May", sales: 5890, revenue: 4800 },
      { month: "Jun", sales: 4390, revenue: 3800 },
      { month: "Jul", sales: 6490, revenue: 5200 },
    ]);

    setTopProducts([
      { id: 1, name: "Laptop", sold: 120 },
      { id: 2, name: "Smartphone", sold: 95 },
      { id: 3, name: "Headphones", sold: 80 },
      { id: 4, name: "Smartwatch", sold: 60 },
    ]);
  }, []);

  return (
    <div className="container mt-4">
      <h1>📊 Reports Dashboard</h1>

      {/* Sales & Revenue Chart */}
      <div className="card p-3 mt-4 shadow-sm">
        <h5>📈 Monthly Sales & Revenue</h5>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#007bff" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#28a745" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Products */}
      <div className="card p-3 mt-4 shadow-sm">
        <h5>🏆 Top Selling Products</h5>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topProducts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sold" fill="#17a2b8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Section */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 text-center bg-primary text-white shadow-sm">
            <h5>Total Sales</h5>
            <h3>12,345</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center bg-success text-white shadow-sm">
            <h5>Total Revenue</h5>
            <h3>$89,430</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center bg-warning text-dark shadow-sm">
            <h5>New Customers</h5>
            <h3>320</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
