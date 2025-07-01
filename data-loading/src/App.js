import React, { useState } from 'react';
import { Employees } from './Components/Employeedetails';
import './App.css';

function App() {
  const [Employeedetails, setEmployeedetails] = useState(Employees);
  const[searchItem, setSearchItem] = useState('');
  const [selectedValue, setSelectedValue] = useState('ID');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }

   const handleSelectChange = (e) => {
    // const selectedValue = e.target.value;
    setSelectedValue(e.target.value);
  }

const SearchEmployee = (e) => {
  console.log(searchItem, selectedValue )
    if (selectedValue == 'ID') {
      setEmployeedetails(Employees.filter(emp => emp.id == searchItem));
    } else {
      setEmployeedetails(Employees.filter(emp => emp.FIRST_NAME == searchItem));
    } 
    setSearchItem("");
  }
  
 
   function delete_row (index) {
     setEmployeedetails(Employeedetails.filter((m, i) => i !== index));
     console.log(Employeedetails);
   }
 
   function Reset() {
     setEmployeedetails(Employees); 
   }




  return (
    <div className="App">

      
      <div>
        <div style={{textAlign:'right', float:'right', width:'100%'}}>
        <table border="0" width='100%'>
          <tr ><td style={{textAlign:'center'}}><h2>Employees Details</h2></td>
            <td style={{width:'2%', textAlign:'center'}}>
              <select onChange={handleSelectChange}>
              <option value="ID">ID</option>
              <option value="Name">Name</option>
              </select>
            </td>
            <td style={{width:'12%', textAlign:'center'}}>
              <input type='text' placeholder='Search Employee' value={searchItem} onChange={handleInputChange} />
            </td>
            <td style={{width:'5%', textAlign:'center'}}>
              <button onClick={SearchEmployee}>Search</button>
            </td>
            <td style={{width:'5%', textAlign:'center'}}>
              <button onClick={Reset}> Reset </button>
            </td>
          </tr>
        </table>
        </div>
        <table border="1" width="100%">
          <thead>
            <th style={{ width: '10%' }}>ID</th>
            <th style={{ width: '10%' }}>FIRST_NAME</th>
            <th style={{ width: '10%' }}>LAST_NAME</th>
            <th style={{ width: '10%' }}>EMAIL</th>
            <th style={{ width: '10%' }}>PHONE_NUMBER</th>
            <th style={{ width: '10%' }}>HIRE_DATE</th>
            <th style={{ width: '10%' }}>SALARY</th>
            <th style={{ width: '10%' }}>DEPARTMENT_ID</th>
            <th style={{ width: '10%' }}>Image</th>
            <th style={{ width: '10%' }}>Actions</th>
          </thead>
          <tbody>
            {Employeedetails.map((emplayee, i) => (
              <tr key={emplayee.id}>
                <td>{emplayee.id}</td>
                <td>{emplayee.FIRST_NAME}</td>
                <td>{emplayee.LAST_NAME}</td>
                <td>{emplayee.EMAIL}</td>
                <td>{emplayee.PHONE_NUMBER}</td>
                <td>{emplayee.HIRE_DATE}</td>
                <td>{emplayee.SALARY}</td>
                <td>{emplayee.DEPARTMENT_ID}</td>
                <td className='img-col'><img
                  src={emplayee.Image}
                  alt={emplayee.alt}
                />
                </td>
                <td><button onClick={() => delete_row(i)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
