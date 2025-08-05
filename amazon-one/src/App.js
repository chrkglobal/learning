import React, { useState, useEffect } from "react";
import '../../amazon-one/src/App.css';
import Home from "./pages/Home";
import Product from "./components/Product";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [viewPage, setViewPage] = useState("products");
  const [products, setProducts] = useState([]);
  const [carts, setcarts] = useState([]);
  const [vproduct, setVProduct] = useState();

  function updateview(currentview, vproduct) {
    setViewPage(currentview);
    setVProduct(vproduct);

    console.log("currentview", currentview)
     console.log("xxxxxxxx", vproduct)
  }

 function changeview(currentview) {
    setViewPage(currentview);
    
    console.log("currentview1", currentview)
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);



  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(pata => setcarts(pata));
  }, []);




  return (
    <div>
      <Header changeview={changeview} />
      {
      viewPage == "products" &&
        products.map((product) => (
          <Product product={product} updateview={updateview} />
        )) 

      }
      {
         viewPage == "carts" && <Cart cartItems={carts} changeview={changeview} />
      }

      {
         viewPage == "productsdetails" && <ProductDetails product={vproduct} changeview={changeview} />
      }
       
      
    </div>
  );
}

export default App;
