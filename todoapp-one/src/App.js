import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskInput, settaskInput] = useState();
  // const [index, setIndex] = useState(0);

  const addTask = () => {
    // if (task.trim() === '') return;
    if (task.trim() === "") {
      alert("Text Box should not Empty");
    }
    else {
    setTask({ taskInput });
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  }
};

const deleteTask = (id) => {
  setTasks(tasks.filter((t) => t.id !== id));
};

const toggleTask = (id) => {
  setTasks(
    tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  );
};

return (
  <div className="app" style={{width:'50%', textAlign:'center'}}>
    <div className='form-container'>
      <h2> Todo App</h2><div>Total Rows : {tasks.length}</div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          // id="taskInput"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
    
    <table border="1" width="50%" style={{ margin: '0px auto' }} cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Task List</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((t, ind) => (
          <tr key={t.id}>
            <td>{ind}</td>
            <td><span onClick={() => toggleTask(t.id)}>{t.text}</span></td>
            <td style={{ textAlign: 'right' }}><button onClick={() => deleteTask(t.id)} className='delete-button'>Delete Task</button></td>
          </tr>
        ))
        }
      </tbody>
    </table>
  </div>
);
}

export default App;
