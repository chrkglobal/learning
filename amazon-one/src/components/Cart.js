import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
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