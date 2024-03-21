import React, { useState } from "react";

// ProductCategories CSS
import "./ProductCategories.scss";

import { TbCategoryPlus } from "react-icons/tb";
import { ProductConsumer } from "../../../Context/ContextProvider";
import ProductCom from "../../../common/ProductCom/ProductCom";
import CategoriesButton from "./CategoriesButton";

const ProductCategories = () => {
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
    <div className="product-cate-container">
      <div className="product-cate-card">
        <h3>
          Categories <TbCategoryPlus />
        </h3>
        <CategoriesButton onclick={handleCategoryClick} selectedProduct={selectedProduct}/>
      </div>
      <ProductCom data={filteredProducts} h1={'All'} />
    </div>
  );
};

export default ProductCategories;
