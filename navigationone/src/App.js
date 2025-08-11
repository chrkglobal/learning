import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import { useState } from 'react';

function App() {
  const [componentname, setComponentName] = useState("Home");

  function showPage(value){
    setComponentName(value)
  }
  return (
    <div className="App">
      <div>
        <Buttons showPage={showPage} />
        {componentname == "Home" && <Home />}
        {componentname == "AboutUs" && <AboutUs />}
        {componentname == "ContactUs" && <ContactUs />}
        {componentname == "Gallery" && <Gallery />}
      </div>
    </div>
  );
}

export default App;
