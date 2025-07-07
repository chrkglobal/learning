import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;

    setTaskList([...taskList, task]);
    setTask('');
  };

  const handleDelete = (index) => {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);
  };

  return (
    <div className="App">
      <h1>To Do App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add Task</button>

      <ul>

        <table border="1" width="50%" style={{margin:'0px auto'}} cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th className='td' style={{textAlign:'left'}}>Task</th>
               <th  className='td' style={{textAlign:'right'}}>Action</th>
            </tr>
          </thead>
          <tbody>

            {taskList.map((item, index) => (
              <tr key={index}>
                <td className='td' style={{textAlign:'left'}}> {item} </td>
                <td style={{textAlign:'right'}} className='td'>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </ul>
    </div>
  );
}

export default App;
