import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Buttons from './components/Buttons';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';
import Box5 from './components/Box5';
import Box6 from './components/Box6';

function App() {
  const [compname, setCompname] = useState("Box2");

    function showBox(value) {
    setCompname(value);
    console.log(value);
  }

  return (
    <div className="App">
      {/* <input type='text' onChange={showBox} /> */}
      {/* <button onClick={showBoxTwo}>view 2 Box</button> */}
      <Buttons showBox={showBox}  />
      {compname == "Box1" && <Box1 showBox={showBox} />}
      {compname == "Box2" && <Box2 showBox={showBox} />}
      {compname == "Box3" && <Box3 showBox={showBox} />}
      {compname == "Box4" && <Box4 showBox={showBox} />}
      {compname == "Box5" && <Box5 showBox={showBox} />}
      {compname == "Box6" && <Box6 showBox={showBox} />}
    </div>
  );
}

export default App;
