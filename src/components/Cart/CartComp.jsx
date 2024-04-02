import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ContextProvider'

const CartComp = ({data}) => {
  
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export default CartComp