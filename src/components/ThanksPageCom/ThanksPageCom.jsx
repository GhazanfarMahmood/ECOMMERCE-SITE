import React from 'react'

import './ThanksPage.scss'

import { AiFillDollarCircle } from "react-icons/ai"
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