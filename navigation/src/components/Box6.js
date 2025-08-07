import React from 'react';

export default function Box6(props,showBox) {
    
  return (
    <div className='box'>
        <button onClick={() => props.showBox("Box1")}>view  Box1</button>
        <h1>Box 6</h1>
    </div>
  )
}
