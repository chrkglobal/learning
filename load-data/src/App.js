import React, { useState } from 'react';
import './App.css';
import { students } from './data/student-data.js';
import { Button, Input, Drawer, Upload } from 'antd';
// import { Input } from "antd";


function App() {
  const [filteredStudent, setFilteredStudent] = useState(students);
  const [index, setIndex] = useState(0);
  const [searchItem, setSearchItem] = useState('')
  const [selectedValue, setSelectedValue] = useState('ID');


  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);



  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }



  const SearchStudent = (e) => {
    if (selectedValue === 'ID') {
      setFilteredStudent(students.filter(stud => stud.ID == searchItem));
    } else {
      setFilteredStudent(students.filter(stud => stud.name == searchItem));
    }
  }

  function delete_row(index) {
    setFilteredStudent(filteredStudent.filter((v, i) => i !== index));
  }

  function Resetfilter() {
    setFilteredStudent(students);
  }

  function addStudent() {
    alert("added Student");
  }

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  // let Newstudents = students[index];
  return (
    <div className="App">
      <Drawer
        closable
        destroyOnHidden
        title={<p>Loading Drawer</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
        width={400} 
      >
        {/* <Button type="primary" style={{ marginBottom: 16 }} onClick={showLoading}>
          Reload
        </Button> */}
        <br />
        <label> ID</label>
        <Input type='text' onChange={handleInputChange} style={{ marginBottom: 10, marginTop: '10px' }} />

        Profile Image
        <Input type='text' onChange={handleInputChange} style={{ marginBottom: 10, marginTop: '10px' }} />

        Name
        <Input type='text' onChange={handleInputChange} style={{ marginBottom: 10, marginTop: '10px' }} />
        Gender
        <Input type='text' onChange={handleInputChange} style={{ marginBottom: 10, marginTop: '10px' }} />
        Physics
        <Input type='text' onChange={handleInputChange} style={{ marginBottom: 10, marginTop: '10px' }} />
        Maths
        <Input type='text' onChange={handleInputChange} style={{ marginBottom: 10, marginTop: '10px' }} />
        English
        <Input type='text' onChange={handleInputChange} style={{ marginBottom: 10, marginTop: '10px' }} />
        <br />
        <Button type="primary" onChange={handleInputChange} style={{ marginBottom: 16, marginTop: '10px' }} onClick={addStudent}>
          Add Student
        </Button>
      </Drawer>




      <div className='list-names'>
        <div style={{ textAlign: "right" }}>
          <select style={{ width: "100px", padding: '1px', marginRight: '5px' }} defaultValue="ID" onChange={e => setSelectedValue(e.target.value)} value={selectedValue}
          >
            <option value="ID">ID</option>
            <option value="Name">Name</option>

          </select>{""}
          <Input type="text"
            style={{ width: "200px", padding: '1px', marginRight: '5px' }}
            value={searchItem}
            onChange={handleInputChange}
            placeholder='Type to search' />
          <Button type="primary" style={{ marginRight: '5px' }} value={searchItem} onClick={SearchStudent}>Go</Button>
          <Button color="default" variant="outlined" onClick={Resetfilter}>Reset</Button>
        </div>
        <br />
        <table width="100%" border="1" scroll={1024} cellPadding={0} cellSpacing={0}>
          <thead>
            <th style={{ width: '5%' }}>ID</th>
            <th style={{ width: '5%' }}>Profile Image</th>
            <th style={{ width: '13%' }}>Name</th>
            <th style={{ width: '10%' }}>Gender</th>
            <th style={{ width: '10%' }}>Physics</th>
            <th style={{ width: '10%' }}>Maths</th>
            <th style={{ width: '10%' }}>English</th>
            <th style={{ width: '8%' }}>Actions</th>

          </thead>
          <tbody>
            {filteredStudent.map((student, i) => (
              <tr className='profile-image-col' key={i}>
                <td>{student.ID}</td>
                <td className='profile-image'><img
                  src={student.url}
                  alt={student.name}
                  title={student.name}
                /></td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.physics}</td>
                <td>{student.maths}</td>
                <td>{student.english}</td>
                <td style={{ textAlign: 'center' }}>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHacAXLPwMya9vE2YPIUzxMom-VnbsOFT14w&s' onClick={showLoading} style={{ width: '16px', height: '16px', cursor: 'pointer' }} />{" "}
                  <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' style={{ width: '16px', height: '16px', cursor: 'pointer' }} />{" "}
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkacyAvoVRDoG8XGAERKKlOCaWb_JFdHQbwg&s'
                    alt='Delete' title='Delete' style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    onClick={() => delete_row(i)}
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default App;