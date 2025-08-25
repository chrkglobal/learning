// src/pages/Dashboard.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Statistic } from "antd";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students").then(res => setStudents(res.data));
    axios.get("http://localhost:5000/teachers").then(res => setTeachers(res.data));
  }, []);

  // group students by class
  const studentsByClass = students.reduce((acc, student) => {
    acc[student.class] = (acc[student.class] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(studentsByClass).map(cls => ({
    class: cls,
    count: studentsByClass[cls]
  }));

  return (
    <div>
      <h2>School Dashboard</h2>

      {/* Summary Cards */}
      <Row gutter={16} style={{ marginBottom: 20 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Students"
              value={students.length}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Teachers"
              value={teachers.length}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Bar Chart */}
      <Card title="Students per Class">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="class" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#1890ff" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
