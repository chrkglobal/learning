import React, { useState, useEffect } from "react";
import { addUser, updateUser } from "../api/userApi";
import { toast } from "react-toastify";

function UserForm({ selectedUser, refreshUsers, clearSelection }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const validate = () => {
    if (!name || !email) {
      setError("All fields required");
      return false;
    }
    if (!email.includes("@")) {
      setError("Invalid email");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      if (selectedUser) {
        await updateUser(selectedUser.id, { name, email });
        toast.success("User updated");
        clearSelection();
      } else {
        await addUser({ name, email });
        toast.success("User added");
      }

      setName("");
      setEmail("");
      refreshUsers();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedUser ? "Edit User" : "Add User"}</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : selectedUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;
