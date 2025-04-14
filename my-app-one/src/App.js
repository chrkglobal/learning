 
 
import './App.css';

import './Mytable';
import MyTable from './Mytable';

const locappData = [
  ["Name1", "Address", "Middle Name", "Surname"] 
];

const locappBody = [
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"],
  
];
const locappData1 = [
  ["Name1", "Address", "Middle Name", "Surname", "SNo"] 
];

const locappBody1 = [
  ["Ramakrishna", "Vara", "Prasad", "Channagiri"," 0"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri", "1"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri", "2"],
  ["Ramakrishna", "Vara", "Prasad", "Channagiri", "3"],
  
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
