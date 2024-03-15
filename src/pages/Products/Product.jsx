import React from 'react'

//BreakCrumbLink Component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'
import ProductSection from '../../components/Products/ProductSection/ProductSection'
import ProductCateogries from '../../components/Products/ProductCateogries/ProductCateogries'

const Product = () => {
  return (
    <>
      <BreadCrumbLink pageName={"Product"} />
      <div className='ms-3'>
        <ProductCateogries />
         <ProductSection />
      </div>
    </>
  )
}

export default Product