import { useState } from 'react';
import { studentList } from './data.js';
import "./App.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [searchItem, setSearchItem] = useState('')
  const [selectedValue, setSelectedValue] = useState('ID');



  function handleNextClick() {
    if (index == studentList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(studentList.length - 1);
    }
  }


  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }



  const SearchStudent = (e) => {
    const searchTerm = e.target.value;
    console.log("searchTerm", searchTerm);
    for (var i = 0; i < studentList.length; i++) {
      // console.log(studentList.at(i).name);
      if(selectedValue == "ID"){
        if (studentList.at(i).ID == searchTerm) {
          setIndex(i);
          return;
        }
      }else{
      
      if (studentList.at(i).name == searchTerm) {
        setIndex(i);
        return;
      }
    }
    }
    alert("sorry");
  }

  let students = studentList[index];

  return (
    <>
      <div className='gallery-container'>
        <table border="1" width="100%">
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', width: '10%' }}>
                <h3>
                  {index + 1} of {studentList.length}
                </h3>
              </td>

              <td style={{ textAlign: 'left', width: '10%' }}>
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
              </td>
            </tr>
          </tbody>
        </table>
        <table border="1" width="100%">
          <thead>
            <tr>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Student ID</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Student Name</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>SurName</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Student Image
              </th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Marks-1</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Marks-2</th>
              <th style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>Marks-3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}><i>{students.ID} </i></td>
              <td style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}><i>{students.name} </i></td>
              <td style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}><i>{students.surname} </i></td>
              <td style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}>
                <img
                  src={students.url}
                  alt={students.alt}
                />
              </td>
              <td style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}><i>{students.marks1} </i></td>
              <td style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}><i>{students.marks2} </i></td>
              <td style={{ textAlign: 'center', fontSize: "12px", padding: '5px', width: '10%' }}><i>{students.marks3} </i></td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={handlePreviousClick}>
          Previes
        </button>
        <button onClick={handleNextClick}>
          Next
        </button>
      </div >
    </>
  );
}
