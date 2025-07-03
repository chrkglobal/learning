import './App.css';
import { useState } from 'react';
import Calc from './components/Calc';

function App() {


  return (
    <div className="App">
      <div>
        <div className='calc-container'><Calc/></div>
        <div className='calc-container'><Calc/></div>
        <div className='calc-container'><Calc/></div>
        <div className='calc-container'><Calc/></div>
      </div>
      <div>
        <div className='calc-container'><Calc/></div>
        <div className='calc-container'><Calc/></div>
        <div className='calc-container'><Calc/></div>
        <div className='calc-container'><Calc/></div>
      </div>


    </div>
  );
}

export default App;
