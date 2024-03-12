import React from 'react'

//CSS
import './NewlyArrival.scss'

//Data from Api
import { ProductConsumer } from '../../../Context/ContextProvider'

const NewlyArrival = () => {
     const newArrivalProducts = ProductConsumer();
     const limitedArrival = newArrivalProducts.slice(newArrivalProducts.length - 5 , newArrivalProducts.length -1)
  return (
    <>
    <div className='new-arrival-container ms-3'>
      <h1>Latest <span>Products</span></h1>
      <div className="new-arrival-card">
        {limitedArrival.length > 0 ? (limitedArrival.map((product) =>{
           return(
           <div key={product.id} className='new-arrival-item'>
            <img src={product.image} alt={product.title} />
           <h3>{(product.title).slice(0, 30)}...</h3>
           <p>Price: <span>${product.price}</span></p>
           <div className="btn-gap">
            <button>Add To Cart</button>
            <button>Description</button>
            </div>
           </div>)
        })) : (<div className='loader'></div>)}
      </div>
    </div>
    </>
  )
}

export default NewlyArrival