import React from 'react';

export default function ProductDetails({ product, changeView }) {

  function showList(product){
  changeView("details", product);
}

  function backToList(){
  changeView("productcard");
  
}


  return (
    <div className='single-product'>
      <div key={product.id} className='single-product-container'>
        {/* <button onClick={backToList} className='backtolist-button'>Back To List</button> */}
        <p className='product-id'>{product.id}</p>
        <img src={product.image} />
        <p className='one-line-truncate'>{product.title}</p>
        <p className='two-line-truncate'>{product.description}</p>
        <div className='price-rating-container'>
          <p className='price'>Price: {product.price}</p>
          <p className='rating'>
            {/* <span>Rating: {product.rating.rate}</span> */}
          </p>
        </div>
        <div className='view-prod-details-button'>
          <button onClick={showList(product)} className='view-prod-details-button'>Add to cart</button></div>
      </div>
    </div>
  )
}


