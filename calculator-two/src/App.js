import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [oprator, setOprator] = useState('');
  const [oldValue, setOldValue] = useState();



function handleInputChange(e){
setValue(e.target.value)
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
    setValue(0);
  }



  return (
    <div className="App">
      <div className='calc-container'>
        <div className='calc-input'>
          <input type='text' value={value} className='input-value' onChange={handleInputChange} />
          </div>
        <div>
          <input type='button' value="C" className='button' onClick={clear} />
          <input type='button' value="()" className='button' onClick={opratorClick} />
          <input type='button' value="%" className='button' onClick={opratorClick} />
          <input type='button' value="/" className='button' onClick={opratorClick} />
        </div>
        <div>
          <input type='button' value="7" className='button' onClick={setButtonValue} />
          <input type='button' value="8" className='button' onClick={setButtonValue}  />
          <input type='button' value="9" className='button' onClick={setButtonValue}  />
          <input type='button' value="*" className='button' onClick={opratorClick} />
        </div>
        <div>
          <input type='button' value="4" className='button' onClick={setButtonValue}  />
          <input type='button' value="5" className='button' onClick={setButtonValue}  />
          <input type='button' value="6" className='button' onClick={setButtonValue}  />
          <input type='button' value="-" className='button' onClick={opratorClick} />
        </div>
        <div>
          <input type='button' value="1" className='button' onClick={setButtonValue}  />
          <input type='button' value="2" className='button' onClick={setButtonValue}  />
          <input type='button' value="3" className='button' onClick={setButtonValue}  />
          <input type='button' value="+" className='button' onClick={opratorClick} />
        </div>
        <div>
          <input type='button' value="+/-" className='button' onClick={setButtonValue} />
          <input type='button' value="0" className='button' onClick={setButtonValue} />
          <input type='button' value="." className='button' onClick={setButtonValue} />
          <input type='button' value="=" className='button' onClick={onEqualClick} />
        </div>
      </div>
    </div>
  );
}


export default App;
