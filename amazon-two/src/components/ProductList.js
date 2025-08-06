import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({products}) {
  return (
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} changeView={changeView} />
      ))}
    </div>
  )
}
