import React, { useState } from 'react';


function Calc() {
  const [value, setValue] = useState(0);
  const [oprator, setOprator] = useState('');
  const [oldValue, setOldValue] = useState();


  
  function clear() {
    setValue(0);
  }

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function setButtonValue(event) {
    if (value === 0) {
      if (value === event.target.value) {
        // do nothing
      } else {
        setValue(event.target.value);
      }
    } else {
      // prevent multiple dots
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

  return (
    <div>
       <div>
      <input type='text' onChange={handleInputChange} value={value} className='input' />
      <div>
        <div className='divider'>
          <input type='button' value='C' onClick={clear} className='button' />
          <input type='button' value='()' onClick={opratorClick} className='button' />
          <input type='button' value='%' onClick={opratorClick} className='button' />
          <input type='button' value='/' onClick={opratorClick} className='button' />
        </div>
        <div className='divider'>
          <input type='button' value='7' onClick={setButtonValue} className='button' />
          <input type='button' value='8' onClick={setButtonValue} className='button' />
          <input type='button' value='9' onClick={setButtonValue} className='button' />
          <input type='button' value='*' onClick={opratorClick} className='button' />
        </div>
        <div className='divider'>
          <input type='button' value='4' onClick={setButtonValue} className='button' />
          <input type='button' value='5' onClick={setButtonValue} className='button' />
          <input type='button' value='6' onClick={setButtonValue} className='button' />
          <input type='button' value='-' onClick={opratorClick} className='button' />
        </div>
        <div className='divider'>
          <input type='button' value='1' onClick={setButtonValue} className='button' />
          <input type='button' value='2' onClick={setButtonValue} className='button' />
          <input type='button' value='3' onClick={setButtonValue} className='button' />
          <input type='button' value='+' onClick={opratorClick} className='button' />
        </div>
        <div className='divider'>
          <input type='button' value='+/-' onClick={opratorClick} className='button' />
          <input type='button' value='0' onClick={setButtonValue} className='button' />
          <input type='button' value='.' onClick={setButtonValue} className='button' />
          <input type='button' value='=' onClick={onEqualClick} className='button' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default  Calc;
