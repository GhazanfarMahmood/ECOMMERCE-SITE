import React from 'react'

import "./PorductCom.scss"

const ProductCom = ({data}) => {
  return (
    <>
        

<div className="product-container ms-3">
      <h1>Popular <span>Products</span></h1>
      <div className="product-card">
        {data.length > 0 ? (data.map((products) =>{
          return (
          <div key={products.id} className='product-item'>   
            <img src={products.image} alt={products.title} />
            <h3>{(products.title).slice(0, 30)}...</h3>
            <p>Price: <span>${products.price}</span></p>
            <div className="btn-gap">
            <button>Add To Cart</button>
            <button>Description</button>
            </div>
          </div>)
        })) : (<div className='loader'></div>)} 
      </div>
      </div></>
  )
}

export default ProductCom