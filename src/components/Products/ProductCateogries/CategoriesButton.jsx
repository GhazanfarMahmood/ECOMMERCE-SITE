import React from 'react'

const CategoriesButton = ({onclick, selectedProduct}) => {
    
    
  return (
    <>
    <button
          onClick={() => onclick(null)}
          className={!selectedProduct && "newClass"}
        >
          All
        </button>
        <button
          onClick={() => onclick("men's clothing")}
          className={selectedProduct === "men's clothing" && "newClass"}
        >
          Men's Category
        </button>
        <button
          onClick={() => onclick("women's clothing")}
          className={selectedProduct === "women's clothing" && "newClass"}
        >
          Women's Category
        </button>
        <button
          onClick={() => onclick("jewelery")}
          className={selectedProduct === "jewelery" && "newClass"}
        >
          jewellery
        </button>
        <button
          onClick={() => onclick("electronics")}
          className={selectedProduct === "electronics" && "newClass"}
        >
          Electronics
        </button>
    </>
  )
}

export default CategoriesButton