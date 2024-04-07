import React from 'react'

// stars from react icons
import { FaStar, FaStarHalfAlt,  FaRegStar  } from "react-icons/fa";

const StarsCom = ({data}) => {
 const ratingStar =  Array.from({length : 5}, (_, index) =>{
let number = index + 0.5;
return (
    <span key={index}>
        {data >= index + 1 ?(<FaStar className='star-icon' />) : (data >= number ) ? (<FaStarHalfAlt className='star-icon' />)  : <FaRegStar className='star-icon' /> }
    </span>
)
  })

  return (
    <div>
        {ratingStar}
    </div>
  )
}

export default StarsCom