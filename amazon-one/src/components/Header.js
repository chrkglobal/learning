import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="header">
      <Link to="/">Home</Link> |{" "}
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </div>
  );
}

export default Header;