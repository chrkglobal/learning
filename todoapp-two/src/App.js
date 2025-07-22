import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function onChangeHandler(e) {
    setTask("");
    setTask(e.target.value);
    console.log(setTaskList);
  }

  function alert(index) {
    alert('Hi', index)
  }

  function addTask() {
    if (task === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    }
    console.log("3333333333333", task);
    setTaskList([...taskList, newTask])
    setTask('');

  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((t) => t.id !== id));
    
  };



  return (
    <div className="App">
      <div className='form-container'>
        <input type='text' onChange={onChangeHandler} value={task} className='task-input' />
        <button className='add-task-button' onClick={addTask}>Add Task</button>
      </div>
      <div>
        <table border="1" width="50%" cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Task</th>
              <th>Task Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((taskItem, index) => (
              <tr key={taskItem.index}>
                <td>
                  {taskItem.index}
                </td>
                <td>
                  {taskItem.id}
                </td>
                <td>
                  {taskItem.text}
                </td>
                <td>
                  <button className='add-task-button' onClick={() => deleteTask(taskItem.id)}>Delete Task</button>
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
