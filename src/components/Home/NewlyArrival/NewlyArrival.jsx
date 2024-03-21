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
    <div className="ms-3">
    <ProductCom data={limitedArrival} h1={"Latest"}/>
    </div>
    </>
  )
}

export default NewlyArrival