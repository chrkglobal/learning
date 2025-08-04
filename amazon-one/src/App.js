import React, { useState, useEffect } from "react";
import '../../amazon-one/src/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./components/Product";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [viewPage, setViewPage] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function changeview(props) {
    setViewPage(false);
  }
  
  return (
    <div>
      <Header />
      {viewPage ?
        products.map((product) => (
          <Product product={product} changeview={changeview} />
        ))
        :
        <Cart changeview={changeview} />
      }
    </div>
  );
}

export default App;
