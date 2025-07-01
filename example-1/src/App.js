import { Employees } from './Components/Employeedetails';
import './App.css';
import { useState } from 'react';

function App() {
  const [Employeedetails, setEmployeedetails] = useState(Employees)


  function searcc
  return (
    <div className="App">
      <table border="0" width="100%" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>
              Select Catogiry: 
              <select>
                <option>ID</option>
                <option>Name</option>
                
              </select>
            </th>
            <th>Search: 
              <input type='text' />
              <input type='button' value="Search" />
            </th>
          </tr>
        </thead>
        <tr>
          <td></td>
        </tr>
      </table>
      <br />
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>HIRE DATE</th>
          </tr>
        </thead>
        <tbody>
          {Employeedetails.map((emp, i) => (
            <tr>
              <td>{emp.id}</td>
              <td>{emp.FIRST_NAME}</td>
              <td>{emp.LAST_NAME}</td>
              <td>{emp.EMAIL}</td>
              <td>{emp.PHONE_NUMBER}</td>
              <td>{emp.HIRE_DATE}</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
