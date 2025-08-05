import React from 'react';

function ProductDetails({ product, changeView }) {
  if (!product) return null;

  return (
    <div className='product-details-box' style={{ padding: 20 }}>
      <button onClick={() => changeView(null)}>🔙 Back</button>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ height: 200 }} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetails;
