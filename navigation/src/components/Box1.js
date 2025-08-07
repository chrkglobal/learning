import React from 'react';

export default function Box1(props,showBox) {
    
  return (
   <div className='box'>
        <button onClick={() => props.showBox("Box2")}>view  Box2</button>
        <h1>Box 1</h1>
    </div>
  )
}
