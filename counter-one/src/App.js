import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1> {counter} </h1>
      <input type='button' value="increase" onClick={increase} />
      <input type='button' value="decrease" onClick={decrement} />
    </div>
  );
}

export default App;
