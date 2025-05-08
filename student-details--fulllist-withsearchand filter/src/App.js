import { useState, useEffect } from 'react';
import { studentList } from './data.js';
import "./App.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [searchItem, setSearchItem] = useState('')
  const [selectedValue, setSelectedValue] = useState('ID');
  const [Student, setStudent] = useState(studentList);

  const [filteredStudent, setFilteredStudent] = useState(studentList);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }


  const SearchStudent = (e) => {
    // console.log(selectedValue, searchItem, studentList.filter(stud => stud.ID == searchItem))
    if (selectedValue === 'ID') {
      setFilteredStudent(studentList.filter(stud => stud.ID == searchItem));
      console.log(selectedValue, searchItem, studentList.filter(stud => stud.ID == searchItem))
    } else {
      setFilteredStudent(studentList.filter(stud => stud.name == searchItem));
      console.log(selectedValue, searchItem, studentList.filter(stud => stud.name == searchItem))
    }
  }

  const Resetfilter = () => {
    setFilteredStudent(studentList);
  }

  let students = studentList[index];

  return (
    <>
      <div className='gallery-container'>
        <table border="1" width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', width: '10%' }}>
                <h3>
                  {index + 1} of {studentList.length}
                </h3>
              </td>
              <td style={{ textAlign: 'center', width: '10%' }}>
                <select style={{ width: "100px" }} defaultValue="ID" onChange={e => setSelectedValue(e.target.value)} value={selectedValue}
                >
                  <option value="ID">ID</option>
                  <option value="Name">Name</option>

                </select>
              </td>
              <td style={{ textAlign: 'right', padding: '5px', width: '10%' }}>
                <input type="text"
                  value={searchItem}
                  onChange={handleInputChange}
                  placeholder='Type to search' />
                <button value={searchItem} onClick={SearchStudent}>Go</button>
                <button onClick={Resetfilter}>Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table border="1" width="100%" cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Student ID</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Student Name</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>SurName</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Student Image</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Marks-1</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Marks-2</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Marks-3</th>
            </tr>
          </thead>
          <tbody>
            {/*   {filteredUsers.map(user => ( */}
            {filteredStudent.map((students, i) => (
              <tr key={i}>
                <td>{students.ID}</td>
                <td>{students.name}</td>
                <td>{students.surname}</td>
                <td> <img
                  src={students.url}
                  alt={students.alt}
                /></td>
                <td>{students.marks1}</td>
                <td>{students.marks2}</td>
                <td>{students.marks3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div >
    </>
  );
}
