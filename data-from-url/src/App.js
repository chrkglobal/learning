import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null); // to store the fetched data
  const [loading, setLoading] = useState(true); // to handle loading state
  const [error, setError] = useState(null); // to handle errors

  useEffect(() => {
    fetch('http://localhost:3000/students') // replace with your URL
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

 if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> Student id : {item.id} and grade is :  {item.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;