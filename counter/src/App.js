import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  function increment(){
    setCounter(counter + 1);
  }
   function decrement(){
    setCounter(counter - 1);
  }

  function reset(){
    setCounter(0)
  }



  return (
    <div className="App">
      <div className='container'>
      <h1> {counter} </h1>
      </div>
      <input type='button' onClick={increment} value="+" className='button' />
      <input type='button' onClick={decrement} value="-" className='button' />
      <input type='button' onClick={reset} value="Reset" className='button' style={{width:'300px'}} />
    </div>
  );
}

export default App;
