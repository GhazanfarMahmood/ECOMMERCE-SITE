import React from 'react'

// Error page Css
import './ErrorPageCom.scss'

// NavLink is imported from react-router-dom
import { NavLink } from 'react-router-dom'

const ErrorPageCom = () => {
  return (
    <>
    <div className='error-page-container ms-3'>
        <h1>404</h1>
        <h3>UH OH!You are Lost</h3>
        <p>Back to Home Page, Click Here! 👇👇👇</p>
        <NavLink className='btn' to={'/'}>Home</NavLink>
    </div>
    </>
  )
}

export default ErrorPageCom