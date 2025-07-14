import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
    const [oprator, setOprator] = useState('');
  const [oldValue, setOldValue] = useState();

function handleInputChange(e){
  setValue(e.target.value);
}

function setButtonValue(event) {
    if (value === 0) {
      if (value === event.target.value) {
      } else {
        setValue(event.target.value);
      }
    } else {
      if (event.target.value === '.' && value.toString().includes('.')) {
        return;
      } else {
        setValue(value + event.target.value);
      }
    }
  }

   function opratorClick(e) {
    setOprator(e.target.value);
    setOldValue(value);
    setValue(0);
  }

   function onEqualClick() {
    if (oprator === '+') setValue(Number(oldValue) + Number(value));
    if (oprator === '-') setValue(Number(oldValue) - Number(value));
    if (oprator === '*') setValue(Number(oldValue) * Number(value));
    if (oprator === '/') setValue(Number(oldValue) / Number(value));
  }

  function clear(){
    setValue(0)
  }





  return (
    <div className="App">
       <div>
        <input type='text' className='inpput-text' value={value} onChange={handleInputChange} />
       </div>
       <div className='devider'>
        <button type='button' value="C" title={value} className='button' onClick={clear} >C</button>
        <button type='button' value="()" className='button' onClick={opratorClick} >()</button>
        <button type='button' value="%" className='button' onClick={opratorClick} >%</button>
        <button type='button' value="/" className='button' onClick={opratorClick} >/</button>
       </div>
       <div className='devider'>
        <button type='button' value="7" className='button' onClick={setButtonValue}>7</button>
        <button type='button' value="8" className='button' onClick={setButtonValue} >8</button>
        <button type='button' value="9" className='button' onClick={setButtonValue} >9</button>
        <button type='button' value="X" className='button' onClick={opratorClick} >X</button>
       </div>
       <div className='devider'>
        <button type='button' value="4" className='button' onClick={setButtonValue} >4</button>
        <button type='button' value="5" className='button' onClick={setButtonValue} >5</button>
        <button type='button' value="6" className='button' onClick={setButtonValue} >6</button>
        <button type='button' value="-" className='button' onClick={opratorClick} >-</button>
       </div>
       <div className='devider'>
        <button type='button' value="1" className='button' onClick={setButtonValue} >1</button>
        <button type='button' value="2" className='button' onClick={setButtonValue} >2</button>
        <button type='button' value="3" className='button' onClick={setButtonValue} >3</button>
        <button type='button' value="+" className='button' onClick={opratorClick} >+</button>
       </div>
       <div className='devider'>
        <button type='button' value="00" className='button'onClick={setButtonValue} >00</button>
        <button type='button' value="0" className='button' onClick={setButtonValue} >0</button>
        <button type='button' value="." className='button' onClick={setButtonValue} ><b>.</b></button>
        <button type='button' value="=" className='button' onClick={onEqualClick} >=</button>
       </div>
    </div>
  );
}

export default App;
