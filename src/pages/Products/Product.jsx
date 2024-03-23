import React from 'react'

//BreakCrumbLink Component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'

//Product page CSS
import './Product.scss'


import CategoriesButton from '../../common/CategoriesButton/CategoriesButton'
import ProductCom from '../../common/ProductCom/ProductCom'
import { ProductConsumer } from '../../Context/ContextProvider'



const Product = () => {
  const allProducts = ProductConsumer();
  return (
    <>
      <BreadCrumbLink pageName={"Product"} />
      <div className='ms-3 product-container'>
        <CategoriesButton />
        <ProductCom data={allProducts} h1="All"/>
      </div>
    </>
  )
}

export default Product