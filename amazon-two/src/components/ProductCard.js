import React from 'react'

export default function ProductCard({products, changeView}) {

function showDetails(product){
  changeView("details", product);
}

  return (
    // onClick={() => changeView(product)}


    <div>
      {products.map(product => (

          <div key={product.id} className='single-product-container'>
            <p className='product-id'>{product.id}</p>
            <img src={product.image} />
            <p className='one-line-truncate'>{product.title}</p>
            <p className='two-line-truncate'>{product.description}</p>
            <div className='price-rating-container'>
            <p className='price'>Price: {product.price}</p>
            <p className='rating'>
              {/* Rating: <span>{product.rating.count}</span> */}
              <span>Rating: {product.rating.rate}</span>
            </p>
            </div>
            <div className='view-prod-details-button'><button onClick={()=>showDetails(product)} className='view-prod-details-button'>View Product Details</button></div>
          </div>

        ))}
    </div>
  )
}


