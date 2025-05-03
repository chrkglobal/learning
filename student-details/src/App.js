import { useState } from 'react';
import { studentList } from './data.js';
import "./App.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [searchItem, setSearchItem] = useState('')
 
  

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
    
    for(var i=0; i < studentList.length; i++ ){
      console.log(studentList.at(i).name);
      if(studentList.at(i).name == searchTerm ){
        setIndex(i);
        break;
      }
    }
    alert("sorry");
  }

  let students = studentList[index];

  return (
    <>
      <div className='gallery-container'>
        <table border="0" width="100%">
          <tbody>
          <tr>
            <td style={{textAlign:'left'}}>
              <h3>
                {index + 1} of {studentList.length}
              </h3>
            </td>
            <td style={{ textAlign: 'right', padding: '5px' }}>
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
              <th>Student ID</th>
              <th>Student Name</th>
              <th>surName</th>
              <th>Student Image
              </th>
              <th>Marks-1</th>
              <th>Marks-2</th>
              <th>Marks-3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i>{students.ID} </i></td>
              <td><i>{students.name} </i></td>
              <td><i>{students.surname} </i></td>
              <td><img
                src={students.url}
                alt={students.alt}
              />
              </td>
              <td><i>{students.marks1} </i></td>
              <td><i>{students.marks2} </i></td>
              <td><i>{students.marks3} </i></td>
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
