import React from 'react';

export default function Box4(props,showBox) {
    
  return (
    <div className='box'>
         <button onClick={() => props.showBox("Box5")}>view  Box5</button>
         <h1>Box 4</h1>
    </div>
  )
}
