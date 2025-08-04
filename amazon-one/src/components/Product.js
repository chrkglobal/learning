import React,{useEffect} from "react";
import { Link } from "react-router-dom";

function Product(props) {
const {product, changeview} = props;

      
  return (
    // <Link to={`/product/${product.id}`}>
    <div className="product">
      <img src={product.image} alt={product.title} className="image" />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <Link onClick={props.changeview}>View Details</Link>
    </div> 
  );
}

export default Product;
