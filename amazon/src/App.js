
import { useState, useEffect } from 'react';
import './App.css';
import Product from './Components/Product';

function App() {

   const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data)); 
    }, []);


  return (
    <div className="App">
      <div>
      {products.map((product) => (
      <Product product={product} />
      ))}
    </div>
    </div>
  );
}

export default App;
