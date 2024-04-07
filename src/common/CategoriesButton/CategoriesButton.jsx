import React, {useState} from 'react'

//Categories Icon from react icons
import {TbCategoryPlus } from 'react-icons/tb'

const CategoriesButton = ({selectedCategory, handleCategoryClick}) => {
 

  return (
    <div className="Cate-button-container">
    <div className="Cate-button-card">
      <h3>
        Categories <TbCategoryPlus />
      </h3>    <button
        onClick={() => handleCategoryClick(null)}
        className={!selectedCategory && "newClass"}
      >
        All
      </button>
      <button
        onClick={() => handleCategoryClick("men's clothing")}
        className={selectedCategory === "men's clothing" && "newClass"}
      >
        Men's Category
      </button>
      <button
        onClick={() => handleCategoryClick("women's clothing")}
        className={selectedCategory === "women's clothing" && "newClass"}
      >
        Women's Category
      </button>
      <button
        onClick={() => handleCategoryClick("jewelery")}
        className={selectedCategory === "jewelery" && "newClass"}
      >
        jewellery
      </button>
      <button
        onClick={() => handleCategoryClick("electronics")}
        className={selectedCategory === "electronics" && "newClass"}
      >
        Electronics
      </button>
    </div>
  </div>
  )
}

export default CategoriesButton