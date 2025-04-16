 
 
import './App.css';

import './Mytable';
import MyTable from './Mytable';

const locappData = [
  ["","Name1", "Address", "Middle Name", "Surname", "Actions"] 
];

const locappBody = [
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri" ],
  
];
const locappData1 = [
  ["","Name1", "Address", "Middle Name", "Surname", "Actions"]
];

  const locappBody1 = [
    ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
    ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
    ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
    ["Ramakrishna", "Vara", "Prasad", "Channagiri" ],
    
  ];
  function App() {
    return (
      <div className="App">
    
      <MyTable locData={locappData} locBody={locappBody}/><br />
      <MyTable locData={locappData1} locBody={locappBody1}/>
      </div>
      
    );
}

export default App;
