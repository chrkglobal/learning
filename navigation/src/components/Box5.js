import React from 'react';

export default function Box5(props,showBox) {
    
  return (
    <div className='box'>
        <button onClick={() => props.showBox("Box6")}>view  Box6</button>
        <h1>Box 5</h1>
    </div>
  )
}
