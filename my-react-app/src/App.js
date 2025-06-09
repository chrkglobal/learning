
import { useState } from 'react';
import './App.css';
import { Employee } from "./Data.js";

function App() {
  const [Employ, setEmploy] = useState(Employee);
  return (
    <div className="App">
      <table border="1" width="50%">
        <thead></thead>
        <tbody>
          {Employ.map((Emp, i) => (
            <tr key={Emp.id}>
              <td>{Emp.id}</td>
              <td>{Emp.name}</td>
              <td>{Emp.age}</td>
              <td>{Emp.gender}</td>
              <td>{Emp.designation}</td>
              <td>{Emp.department}</td>
              <td>{Emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
