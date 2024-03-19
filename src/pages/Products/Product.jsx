import React from 'react'

//BreakCrumbLink Component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'
import ProductSection from '../../components/Products/ProductSection/ProductSection'
import ProductCateogries from '../../components/Products/ProductCateogries/ProductCateogries'

//Product page CSS
import './Product.scss'

const Product = () => {
  return (
    <>
      <BreadCrumbLink pageName={"Product"} />
      <div className='ms-3 product-container'>
        <ProductCateogries />
         <ProductSection />
      </div>
    </>
  )
}

export default Product