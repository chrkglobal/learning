import React,{useEffect} from "react";
import { Link } from "react-router-dom";

function Product({product, updateview}) {
// const {product, changeview} = props;

 function showCarts(){
  console.log("444444444444444", product);
    updateview("productsdetails", product);
    console.log("hello");
  }

  return (
    // <Link to={`/product/${product.id}`}>
    <div className="product-container">
      <div className="product" onClick={showCarts}>
        <img src={product.image} alt={product.title} className="image" />
        <h3>{product.title}</h3>
        <p>₹{product.price}</p>
        <Link>View Details</Link>
      </div>
    </div>
  );
}

export default Product;

