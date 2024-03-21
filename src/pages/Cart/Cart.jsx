import React from 'react'

//CrumbLink component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'
import CartComp from '../../components/Cart/CartComp'

const Cart = () => {
  return (
    <>
    <div className='ms-3'>
      <BreadCrumbLink pageName={"Cart"} />
      <CartComp /></div>
    </>
  )
}

export default Cart