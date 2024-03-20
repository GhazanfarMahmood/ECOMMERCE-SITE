import React from 'react'

//ProductSection Css
import './ProductSection.scss'
import { ProductConsumer } from '../../../Context/ContextProvider'
import ProductCom from '../../../common/ProductCom/ProductCom'

const ProductSection = () => {
     const allProducts =  ProductConsumer();

  return (
    <>
    <ProductCom data={allProducts}/>
    
    </>
  )
}

export default ProductSection