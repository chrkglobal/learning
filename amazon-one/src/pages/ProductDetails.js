import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const product = [
    {
  id: 1,
  title: "iPhone 15 Pro Max",
  price: 1299,
//   image: "https://via.placeholder.com/150",
  image: "https://images-cdn.ubuy.co.in/658da0be910005387c5e2673-restored-apple-iphone-15-pro-max-256gb.jpg",
  description: "Apple iPhone 15 Pro Max with 256GB storage."
},
{
  id: 1,
  title: "iPhone 15 Pro Max",
  price: 1299,
//   image: "https://via.placeholder.com/150",
  image: "https://www.designinfo.in/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-256GB-Titanium-Violet-3.webp",
  description: "Apple iPhone 15 Pro Max with 256GB storage."
},
{
    id: 3,
    title: "Apple iPhone 13 (Starlight, 128GB Storage)",
    price:  "44,900",
    image: "https://darlingretail.com/cdn/shop/products/1_7b64958c-304b-43bd-b759-c5366bfa9914_600x.jpg?v=1661581431",
    description: "Apple iPhone 13 features a brilliant combination of 12 MP (wide camera) and 12 MP (ultra-wide camera). Both the cameras take outstanding shots with absolute clarity. Filmmakers use a technique called rack focus - shifting focus from one subject to another - to guide the audience’s attention in their movies. Now iPhone makes it easy for you to bring the same storytelling technique to your videos. "
  },
]
;

function ProductDetails() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{border:'1px solid  #f00'}}>
        <h2>{product.id}</h2>
      <h2>{product.title}</h2>
      <div className="product"><img src={product.image} /></div>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}


export default ProductDetails;
