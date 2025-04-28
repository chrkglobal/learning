import React, { useState } from "react";


function SwapValue() {
  const [input1, setInput1] = useState("Ramakrishna");
  const [input2, setInput2] = useState("Channagiri");

  const swapValues = () => {
    setInput1(input2);
    setInput2(input1);
  };

  return (

    <div className="row">
      <div className="col-3">
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button width="30%" style={{ marginTop: '30px', width: '20%' }} onClick={swapValues}>Swap</button>
      </div>

    </div>


  );
}

export default SwapValue;

