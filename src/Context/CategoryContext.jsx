
import React, { createContext, useState } from 'react';

export const ProductCategoryContext = createContext();

export const ProductCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <ProductCategoryContext.Provider value={{ selectedCategory, handleCategoryClick }}>
      {children}
    </ProductCategoryContext.Provider>
  );
};