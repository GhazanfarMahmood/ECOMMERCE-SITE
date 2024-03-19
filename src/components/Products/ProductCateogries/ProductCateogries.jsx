import React from 'react'

//ProductCategories CSS
import './ProductCategories.scss'

const ProductCateogries = () => {
  return (
    <>
    <div className="product-cate-container">
      <div className="product-cate-card">
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