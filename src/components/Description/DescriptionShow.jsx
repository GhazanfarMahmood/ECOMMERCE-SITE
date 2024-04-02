import React from 'react'
import { useNavigate } from 'react-router-dom'

const DescriptionShow = () => {
    const navigate = useNavigate();

  return (
    <div className='description-show ms-3'>
        <h1>There is no  <span> product</span> to show</h1>
        <p>Back to shop! 👇👇</p>
        <button onClick={() =>{navigate("/product")}}>Back to Shop</button></div>
  )
}

export default DescriptionShow