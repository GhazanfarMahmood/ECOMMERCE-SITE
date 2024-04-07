import React from 'react'

// Css for thanks page 
import './ThanksPage.scss'

// icon from react icon
import { AiFillDollarCircle } from "react-icons/ai"

// Use Navigate from react-router-dom for navigation
import { useNavigate } from 'react-router-dom'

const ThanksPageCom = () => {
  const navigate = useNavigate();

  return (
    <div className='thank-page-container'>
       <AiFillDollarCircle />
       <h3>Payment Successful</h3>
       <p>Thank you for your payment!</p>
       <button onClick={() => {navigate("/product")}}>Continue Shopping</button>
    </div>
  )
}

export default ThanksPageCom