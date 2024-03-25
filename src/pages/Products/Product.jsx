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

//Category Context from context file
import { ProductCategoryContext } from '../../Context/CategoryContext'

//ContextProvider from Context file
import { ProductConsumer } from '../../Context/ContextProvider'



const Product = () => {
  const allProducts = ProductConsumer();
  
const { selectedCategory, handleCategoryClick } = useContext(ProductCategoryContext);

const filteredProducts = allProducts.filter((product) => !selectedCategory || product.category === selectedCategory);


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