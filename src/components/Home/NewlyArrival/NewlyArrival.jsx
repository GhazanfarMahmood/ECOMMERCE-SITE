import React from 'react'

//CSS
import './NewlyArrival.scss'

//Data from Api
import { ProductConsumer } from '../../../Context/ContextProvider'
import ProductCom from '../../../common/ProductCom/ProductCom';

const NewlyArrival = () => {
     const newArrivalProducts = ProductConsumer();
     const limitedArrival = newArrivalProducts.slice(newArrivalProducts.length - 5 , newArrivalProducts.length -1)
  return (
    <>
    <ProductCom data= {limitedArrival} />
    </>
  )
}

export default NewlyArrival