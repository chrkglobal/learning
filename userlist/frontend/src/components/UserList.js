import React from "react";
import { deleteUser } from "../api/userApi";
import { toast } from "react-toastify";

function UserList({ users, refreshUsers, onEdit }) {
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    await deleteUser(id);
    toast.success("User deleted");
    refreshUsers();
  };

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>
              <button onClick={() => onEdit(u)}>Edit</button>
              <button onClick={() => handleDelete(u.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
