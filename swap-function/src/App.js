import React, { useState } from "react";

function SwapValue() {
  const [input1, setInput1] = useState("First");
  const [input2, setInput2] = useState("Second");

  const swapValues = () => {
    setInput1(prev => input2);
    setInput2(prev => input1);
  };

  return (
    // <div>
    //   <h2>Swap Input Values</h2>
    //   <input
    //     type="text"
    //     value={input1}
    //     onChange={(e) => setInput1(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     value={input2}
    //     onChange={(e) => setInput2(e.target.value)}
    //   />
    //   <button onClick={swapValues}>Swap</button>
    // </div>
    <h1>Hello</h1>
  );
}

export default SwapValue;
