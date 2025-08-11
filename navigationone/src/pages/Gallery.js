import { useEffect, useState } from 'react';

export default function Gallery({props, products}) {




    return (
        <div className='box'>
            <h1>Gallery</h1>
            <div className='product-container'>
                {products.map((product, index) => (
                    <div className='product-box' key={index}>
                        <img src={product.image} />
                        </div>
                ))}
            </div>
        </div>
    );
}
