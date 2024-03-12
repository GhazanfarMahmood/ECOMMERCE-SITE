import React from 'react'

//CSS
import './PopularProducts.scss'

// Data from Context Provider
import { ProductConsumer } from '../../../Context/ContextProvider'

const PopularProducts = () => {
    const productList = ProductConsumer();
    const limitedProductList = productList.slice(0, 5);
 
  return (
    <>
    <div className="popular-product-container ms-3">
      <h1>Popular <span>Products</span></h1>
      <div className="popular-products">
        {limitedProductList.map((products) =>{
          return (
          <div key={products.id} className='popular-product-item'>   
            <img src={products.image} alt={products.title} />
            <h3>{(products.title).slice(0, 30)}...</h3>
            <p>Price: <span>${products.price}</span></p>
            <div className="btn-gap">
            <button>Add To Cart</button>
            <button>Description</button>
            </div>
          </div>)
        })} 
      </div>
      </div>
    </>
  )
}

export default PopularProducts