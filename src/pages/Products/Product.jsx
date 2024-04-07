import React from 'react'

//UseContext hooks from react
import { useContext } from 'react'

//BreakCrumbLink Component
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'

//Product page CSS
import './Product.scss'

// Categories Button Imported
import CategoriesButton from '../../common/CategoriesButton/CategoriesButton'

//Product Component
import ProductCom from '../../common/ProductCom/ProductCom'

//ContextProvider from Context file
import {  ProductContext } from '../../Context/ContextProvider'



const Product = () => {
  
const { selectedCategory, handleCategoryClick, products } = useContext(ProductContext);

const filteredProducts = products.filter((product) => !selectedCategory || product.category === selectedCategory);


  return (
    <>
      <BreadCrumbLink pageName={"Product"} />
      <div className='ms-3 product-container'>
        <CategoriesButton selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick}  />
        <ProductCom data={filteredProducts} h1="All"/>
      </div>
    </>
  )
}

export default Product