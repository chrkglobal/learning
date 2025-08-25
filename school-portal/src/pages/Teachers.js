// src/pages/Students.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Space, Popconfirm, message, Modal, Form, Input, InputNumber } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function Teachers() {
  const [Teachers, setTeachers] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [form] = Form.useForm();

  const fetchTeachers = async () => {
    const res = await axios.get("http://localhost:5000/Teachers");
    setTeachers(res.data);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/Teachers/${id}`);
    message.success("Student deleted");
    fetchTeachers();
  };

  // open edit modal
  const handleEdit = (student) => {
    setEditingStudent(student);
    form.setFieldsValue(student);
    setIsModalVisible(true);
  };

  const handleUpdate = async () => {
    const values = await form.validateFields();
    await axios.put(`http://localhost:5000/Teachers/${editingStudent.id}`, values);
    message.success("Student updated successfully!");
    setIsModalVisible(false);
    fetchTeachers();
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Class", dataIndex: "class", key: "class" },
    { title: "Age", dataIndex: "age", key: "age" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} type="primary" onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => deleteStudent(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Teachers List</h2>
      <Table dataSource={Teachers} columns={columns} rowKey="id" />

      <Modal
        title="Edit Student"
        visible={isModalVisible}
        onOk={handleUpdate}
        onCancel={() => setIsModalVisible(false)}
        okText="Update"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="class" label="Class" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true }]}>
            <InputNumber min={5} max={20} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
