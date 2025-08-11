import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import { useEffect, useState } from 'react';

function App() {
  const [componentname, setComponentName] = useState("Home");
  const [products, setProducts] = useState([]);


  useEffect(() => {
  fetch('https://fakestoreapi.in/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);


  function showPage(value){
    setComponentName(value)
  }
  {console.log("Products",products)}
  return (
    
    <div className="App">
      <div>
        <Buttons showPage={showPage} />
        {componentname == "Home" && <Home />}
        {componentname == "AboutUs" && <AboutUs />}
        {componentname == "ContactUs" && <ContactUs />}
        {componentname == "Gallery" && <Gallery products={products.products} />}
      </div>
    </div>
  );
}

export default App;
