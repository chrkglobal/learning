// src/pages/AddStudent.js
import { Form, Input, InputNumber, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await axios.post("http://localhost:5000/students", values);
    message.success("Student added successfully!");
    navigate("/students");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="class" label="Class" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <InputNumber min={5} max={20} />
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}
