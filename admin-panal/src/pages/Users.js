import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, EditIcon } from "@mui/material";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ravi", email: "ravi@example.com" },
    { id: 2, name: "Sneha", email: "sneha@example.com" },
    { id: 3, name: "Ramakrishna", email: "rk.channagiri@gmail.com" },
  ]);

  const addUser = () => {
    const name = prompt("Enter name:");
    const email = prompt("Enter email:");
    setUsers([...users, { id: users.length + 1, name, email }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <div style={{flex:1}}>
        <Header />
        <div style={{padding:'20px'}}>
        <h2>Users</h2>
        <Button variant="contained" color="primary" onClick={addUser}>Add User</Button>
        <table border="1" cellPadding="10" style={{marginTop:"20px", width:'100%'}}>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td style={{textAlign:'center'}}>
                    <Button startIcon={<DeleteIcon />} variant="contained" color="primary"  onClick={() => deleteUser(u.id)}>Delete</Button>{" "}
                    <Button  variant="contained" color="primary" >Edit</Button>
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
      </div>
    </div>
  );
}
