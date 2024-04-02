import React, { useContext } from 'react'

import './Cart.scss'

const CartComp = ({data}) => {
  
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export default CartComp