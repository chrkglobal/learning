import React, { useState } from 'react';

    function Product(props) {
      const { product } = props; // Destructure the 'user' prop

      
      return (
       <div className='product-iteam-container' key={product.id}>
            <p className='product-id'>{product.id}</p> 
            <p className='one-line-truncate' style={{marginTop:'40px'}}>{product.title}</p>
            <div className='text-center'><img src={product.image} alt={product.title} title={product.title} /></div>
            <p className='two-line-truncate'>{product.description}</p>
            <p>Category : {product.category}</p>
            <p>Price - <b>{product.price}</b></p>
             <button className='button' onClick= {()=>props.cartItems(product.id)}>Add to Cart</button>
        </div>
      );
    }
  

    export default Product;