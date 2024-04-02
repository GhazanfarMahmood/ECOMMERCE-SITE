import React, { useContext, useEffect, useState } from 'react'

//CrumbLink component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'
import CartComp from '../../components/Cart/CartComp'
import { ProductContext } from '../../Context/ContextProvider'

const Cart = () => {
  const {cartItems }=  useContext(ProductContext);
 
  return (
    <>
    <div className='ms-3'>
      <BreadCrumbLink pageName={"Cart"} />
    
         
            {cartItems.map((product) => {
              return (
                <div key={product.id}>
                  <h1>{product.title}</h1>
                </div>
              );
            } )}
      </div>
    </>
  )
}

export default Cart