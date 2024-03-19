import React from 'react'

//ProductCategories CSS
import './ProductCategories.scss'

import { TbCategoryPlus } from "react-icons/tb";

const ProductCateogries = () => {
  return (
    <>
    <div className="product-cate-container">
      <div className="product-cate-card">
      <h3>Categories <TbCategoryPlus /></h3> 
      <button>All</button>
      <button>Men's Category</button>
      <button>Women's Category</button>
      <button>Jewelery</button>
      <button>Electronics</button>
      </div>
    </div>
    </>
  )
}

export default ProductCateogries