import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Button, Text } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from "recharts";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", users: 30, sales: 20 },
  { name: "Feb", users: 45, sales: 35 },
  { name: "Mar", users: 60, sales: 50 },
];

const dataone = [
  { month: "Jan", users: 30, sales: 20 },
  { month: "Feb", users: 50, sales: 35 },
  { month: "Mar", users: 70, sales: 55 },
  { month: "Apr", users: 90, sales: 65 },
];

export default function Dashboard() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <div style={{flex:1, }}>
        <Header />
        <div className="body-content-container">
        <h2>Dashboard</h2>


                  <LineChart
                      width={600}
                      height={300}
                      data={dataone}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />

                      {/* Blue line for users */}
                      <Line type="monotone" dataKey="users" stroke="#1976d2" strokeWidth={2} />

                      {/* Green line for sales */}
                      <Line type="monotone" dataKey="sales" stroke="#82ca9d" strokeWidth={2} />
                  </LineChart>



        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#1976d2"/>
          <Bar dataKey="sales" fill="#82ca9d"/>
        </BarChart>

         
        </div>
      </div>
    </div>
  );
}
