import React from 'react';

export default function Box3(props,showBox) {
    
  return (
    <div className='box'>
        <button onClick={() => props.showBox("Box4")}>view  Box4</button>
        <h1>Box 3</h1>
    </div>
  )
}
