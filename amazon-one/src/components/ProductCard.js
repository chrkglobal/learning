import React from 'react';

function ProductCard({ product, changeView }) {
  return (
    <div className='image-container' onClick={() => changeView(product)}>
      <img src={product.image} alt={product.title} style={{ height: 100 }} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
