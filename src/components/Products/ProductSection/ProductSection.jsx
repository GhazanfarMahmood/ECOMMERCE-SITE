import React from 'react'

//ProductSection Css
import './ProductSection.scss'
import { ProductConsumer } from '../../../Context/ContextProvider'
import ProductCom from '../../../common/ProductCom/ProductCom'

const ProductSection = () => {
     const allProducts =  ProductConsumer();

  return (
    <>
    <div className="product-sec-container">
    <ProductCom data={allProducts}/>
    </div>
    </>
  )
}

export default ProductSection