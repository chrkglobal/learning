// src/components/Layout.js
import { Layout, Menu } from "antd";
import { UserOutlined, TeamOutlined, PlusCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function AppLayout({ items }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div style={{ color: "white", padding: 20, fontWeight: "bold" }}>School Portal</div>
        <Menu theme="dark" mode="inline">
             <Menu.Item key="0" icon={<HomeOutlined />}>
  <Link to="/">Dashboard</Link>
</Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/students">Students</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PlusCircleOutlined />}>
            <Link to="/add-student">Add Student</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            <Link to="/teachers">Teachers</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PlusCircleOutlined />}>
            <Link to="/add-teacher">Add Teacher</Link>
          </Menu.Item>
         
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", paddingLeft: 20 }}>
          <h2>School Admin Portal</h2>
        </Header>
        <Content style={{ margin: 20, padding: 20, background: "#fff" }}>
          {items}
        </Content>
      </Layout>
    </Layout>
  );
}
