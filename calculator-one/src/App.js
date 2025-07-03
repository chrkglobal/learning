import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
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
      if (value === event.target.value) { }
      else {setValue(event.target.value) }
    } else {
      console.log("Hiiiiiiiiiii",value.toString().indexOf('.'));
      if(event.target.value == '.' && value.toString().indexOf('.') > 0 ){
        console.log("hello",value.toString().indexOf('.'));
      } 
      else{
        setValue(value + event.target.value);
      }
      
    }
  }

 

  function opratorClick(e){
    setOprator(e.target.value)
    setOldValue(value);
    setValue(0);
  }



  function onEqualClick(){
     if (oprator === '+') setValue(Number(oldValue) + Number(value));
     if (oprator === '-') setValue(Number(oldValue) - Number(value));
     if (oprator === '*') setValue(Number(oldValue) * Number(value));
     if (oprator === '/') setValue(Number(oldValue) / Number(value));
     console.log(oldValue, value);
  }






  return (
    <div className="App">
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
  );
}

export default App;
