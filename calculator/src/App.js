
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [oprator, setoprator] = useState("");
  // console.log(oldValue);


  function opratorClick(e) {
    setoprator(e.target.value);
    setOldValue(value);
    setValue(0);
  }

  function onEquals() {
    if (oprator === '+') setValue(Number(oldValue) + Number(value));
    if (oprator === '-') setValue(Number(oldValue) - Number(value));
    if (oprator === '/') setValue(Number(oldValue) / Number(value));
    if (oprator === '*') setValue(Number(oldValue) * Number(value));
  }



  const handleInputChange = (event) => {
    setValue(event.target.value);
  }

  function setButtonValue(event) {

    if (value == 0) {
      if (value == event.target.value) { }
      else {
        setValue(event.target.value);
      }
    } else {
      setValue(value + event.target.value);
    }
  }

  function clear() {
    setValue(0);
    // console.log(value);
  }

  return (
    <div className="App">
      <div className='calc-container'>
        <input type='text' value={value} className='value-box' />
        <div className='line-div'>
          <button type='button' className='button' onClick={clear}>C</button>
          <button type='button' className='button' onClick={opratorClick}>()</button>
          <button type='button' className='button' onClick={opratorClick}>%</button>
          <button type='button' className='button' value='/' onClick={opratorClick}>/</button>
        </div>
        <div className='line-div'>
          <button type='button' className='button' value='7' onClick={setButtonValue}>7</button>
          <button type='button' className='button' value='8' onClick={setButtonValue}>8</button>
          <button type='button' className='button' value='9' onClick={setButtonValue}>9</button>
          <button type='button' className='button' value='*' onClick={opratorClick}>X</button>
        </div>
        <div className='line-div'>
          <button type='button' className='button' value='4' onClick={setButtonValue}>4</button>
          <button type='button' className='button' value='5' onClick={setButtonValue}>5</button>
          <button type='button' className='button' value='6' onClick={setButtonValue}>6</button>
          <button type='button' className='button' value='-' onClick={opratorClick}>-</button>
        </div>
        <div className='line-div'>
          <button type='button' className='button' value='1' onClick={setButtonValue}>1</button>
          <button type='button' className='button' value='2' onClick={setButtonValue}>2</button>
          <button type='button' className='button' value='3' onClick={setButtonValue}>3</button>
          <button type='button' className='button' value='+' onClick={opratorClick}>+</button>
        </div>
        <div className='line-div'>
          <button type='button' className='button' value='+/-' onClick={opratorClick}>+/-</button>
          <button type='button' className='button' value='0' onClick={setButtonValue}>0</button>
          <button type='button' className='button' value='.' onClick={setButtonValue}><b>.</b></button>
          <button type='button' className='button' value='=' onClick={onEquals} >=</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
