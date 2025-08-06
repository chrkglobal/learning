import React from 'react'

export default function ProductDetails({product, changeView}) {
  return (
    // onClick={() => changeView(product)}
    <div> 

          <div key={product.id} className='single-product-container'>
            <p className='product-id'>{product.id}</p>
            <img src={product.image} />
            <p className='one-line-truncate'>{product.title}</p>
            <p className='two-line-truncate'>{product.description}</p>
            <div className='price-rating-container'>
            <p className='price'>Price: {product.price}</p>
            <p className='rating'>
              {/* Rating: <span>{products.rating.count}</span> */}
              <span>Rating: {product.rating.rate}</span>
            </p>
            </div>
            <div className='view-prod-details-button'>
                <button onClick={changeView} className='view-prod-details-button'>Add To Cart</button></div>
          </div> 
    </div>
  )
}


