import React from "react";
import Product from "../components/Product";

function Home({product, changeview}) {
  return (
    <div className="home">
        <div className="product-container">
            {product.map((prod) => (
                <Product key={prod.id} product={prod} />
            ))}
      </div>
    </div>
  );
}

export default Home;