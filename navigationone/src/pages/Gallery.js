import React, { useEffect, useState } from 'react';

export default function Gallery() {
    const [products, setProducts] = useState([]);


useEffect(() => {
  fetch('https://fakestoreapi.in/api/products/')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);

    return (
        <div className='box'>
            <h1>Gallery</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.id}</li>
                ))}
            </ul>
        </div>
    );
}
