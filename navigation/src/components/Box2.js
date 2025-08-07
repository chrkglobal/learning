import React from 'react';

export default function Box2(props,showBox) {
     
  return (
   <div className='box'>
        <button onClick={() => props.showBox("Box3")}>view  Box3</button>
        <h1>Box 2</h1>
    </div>
  )
}
