import React, { useEffect, useState } from "react";
import { getUsers } from "./api/userApi";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<ToastContainer position="top-right" />


function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>React Node MySQL CRUD</h2>

      <UserForm
        selectedUser={selectedUser}
        refreshUsers={fetchUsers}
        clearSelection={() => setSelectedUser(null)}
      />

      <UserList
        users={users}
        refreshUsers={fetchUsers}
        onEdit={setSelectedUser}
      />
    </div>
  );
}

export default App;
