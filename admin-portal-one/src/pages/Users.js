import React, { useState, useEffect } from 'react';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // sample API
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);
//     fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(data =>console.log);

  return (
    <div>
    <div>👥 Users Management Page</div>
    <table class="table table-striped table-bordered table-hover">
        <thead class="table-dark">
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                <button type='button' className='btn btn-primary'>Edit</button>{" "}
                <button type='button' className='btn btn-outline-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  )
}
