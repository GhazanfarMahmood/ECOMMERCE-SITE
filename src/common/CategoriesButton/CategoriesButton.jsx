import React, {useState} from 'react'

import './CategoriesButton.scss';

import {TbCategoryPlus } from 'react-icons/tb'
import { ProductConsumer } from '../../Context/ContextProvider';

const CategoriesButton = () => {
    const allProducts = ProductConsumer();
    
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const productByCategories = (category) => {
      if (!category) return allProducts;
  
      return allProducts.filter((product) => product.category === category);
    };
  
    const handleCategoryClick = (category) => {
      setSelectedProduct(category);
    };
  
    const filteredProducts = selectedProduct
      ? productByCategories(selectedProduct)
      : allProducts;


  return (
    <div className="Cate-button-container">
    <div className="Cate-button-card">
      <h3>
        Categories <TbCategoryPlus />
      </h3>    <button
        onClick={() => handleCategoryClick(null)}
        className={!selectedProduct && "newClass"}
      >
        All
      </button>
      <button
        onClick={() => handleCategoryClick("men's clothing")}
        className={selectedProduct === "men's clothing" && "newClass"}
      >
        Men's Category
      </button>
      <button
        onClick={() => handleCategoryClick("women's clothing")}
        className={selectedProduct === "women's clothing" && "newClass"}
      >
        Women's Category
      </button>
      <button
        onClick={() => handleCategoryClick("jewelery")}
        className={selectedProduct === "jewelery" && "newClass"}
      >
        jewellery
      </button>
      <button
        onClick={() => handleCategoryClick("electronics")}
        className={selectedProduct === "electronics" && "newClass"}
      >
        Electronics
      </button>
    </div>
  </div>
  )
}

export default CategoriesButton