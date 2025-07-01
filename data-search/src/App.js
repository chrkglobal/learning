import { Employees } from './Components/Employeedetails';
import './App.css';
import { useState } from 'react';

function App() {

  const [EmployeeDetails, setEmployeesDetails] = useState(Employees)
  const [SearchEmp, setSearchEmployee] = useState('');
  const [SelectedEmployee, setSelectedEmployee] = useState('ID');


  function handleInputChange(e) {
    const searchTerm = e.target.value;
    setSearchEmployee(searchTerm)
    console.log("searchTerm", searchTerm)
  }

  // function handleSelectChange(e){
  //   setSelectedEmployee(e.target.value);
  // }

  function reSet() {
    setEmployeesDetails(Employees)
  }

  function delete_Row(index) {
    setEmployeesDetails(EmployeeDetails.filter((dee, i) => i !== index));
    console.log(setEmployeesDetails);
  }

  function searchEmployee() {
    console.log("SelectedEmployee", SelectedEmployee);
    if (SelectedEmployee === "ID") {
      setEmployeesDetails(Employees.filter(emp => emp.id == SearchEmp))
    } else {
      setEmployeesDetails(Employees.filter(emp => emp.LAST_NAME == SearchEmp))
    }
  }

  return (
    <div className="App" style={{ margin: '0px auto' }}>
      <table style={{ marginTop: '20px' }} width="50%" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td>
              <select onChange={(value) => setSelectedEmployee(value)}>
                <option value="ID">ID</option>
                <option value="LAST_NAME">LAST NAME</option>
              </select>
            </td>
            <td></td>
            <td>Search: <input type='text' onChange={handleInputChange} /><input type='button' value="Search" onClick={searchEmployee} /></td>
            <td><input type='button' value="Reset" onClick={reSet} /></td>
          </tr>
        </tbody>
      </table>
      <table border="1" width="50%" cellPadding="0" cellSpacing="0" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeDetails.map((EmployeeDetail, i) => (
            <tr key={EmployeeDetail.id}>
              <td>{EmployeeDetail.id}</td>
              <td>{EmployeeDetail.FIRST_NAME}</td>
              <td>{EmployeeDetail.LAST_NAME}</td>
              <td>{EmployeeDetail.EMAIL}</td>
              <td>{EmployeeDetail.PHONE_NUMBER}</td>
              <td>{EmployeeDetail.SALARY}</td>
              <td><button onClick={() => delete_Row(i)}>Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
