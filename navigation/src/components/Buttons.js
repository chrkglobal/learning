import React from 'react';

// import Box1 from './Box1';
// import Box2 from './Box2';
// import Box3 from './Box3';
// import Box4 from './Box4';
// import Box5 from './Box5';
// import Box6 from './Box6';

export default function Buttons(props, showBox) {
  return (
    <div>
         {/* onClick={() => showBox("Box1")} */}
        <button onClick={() => props.showBox("Box1")}>Box 1</button>
        <button onClick={() => props.showBox("Box2")}>Box 2</button>
        <button onClick={() => props.showBox("Box3")}>Box 3</button>
        <button onClick={() => props.showBox("Box4")}>Box 4</button>
        <button onClick={() => props.showBox("Box5")}>Box 5</button>
        <button onClick={() => props.showBox("Box6")}>Box 6</button>
    </div>
  )
}
