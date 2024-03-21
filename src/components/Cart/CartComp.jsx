import React from 'react'

// Cart css
import './Cart.scss';
import { NavLink } from 'react-router-dom';

const CartComp = () => {
  return (
    <div className='Cart-container'>
        <h1>Cart <span>Page</span></h1>
        <h2>No products have been added yet.</h2>
        <p>For Shopping Go To Product Section:👇👇</p>
        <NavLink to={'/product'} className='btn'>Product</NavLink>
    </div>
  )
}

export default CartComp