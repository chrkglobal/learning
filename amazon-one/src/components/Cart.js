import React from "react";
import { Link } from "react-router-dom";

function Cart({ products, cartItems, changeview }) {
  //  const { cartItems, changeview } = props;
  function showProducts(){
    changeview("products");
    console.log("hello")
  }
  { console.log("11111111111111111", );}
  return (
   
    <div>
      <Link onClick={showProducts}>Product Details</Link>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item, idx) => (
          <div key={idx}>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;