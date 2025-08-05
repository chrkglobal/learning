import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, changeView }) {
  return (
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} changeView={changeView} />
      ))}
    </div>
  );
}

export default ProductList;
