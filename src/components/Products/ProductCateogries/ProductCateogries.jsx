import React from 'react'

//ProductCategories CSS
import './ProductCategories.scss'

import { TbCategoryPlus } from "react-icons/tb";
import { ProductConsumer } from '../../../Context/ContextProvider';
import ProductCom from '../../../common/ProductCom/ProductCom';

const ProductCateogries = () => {
  const AllProduct = ProductConsumer();

  
  const WomenCategory = () =>{
   
    
  
     
      // console.log(AllProduct.map((product) =>(
      //   product.category."electronics";
      // )));
  
  }

  return (
    <>
    <div className="product-cate-container">

      <div className="product-cate-card">
      <h3>Categories <TbCategoryPlus /></h3> 
      <button >All</button>
      <button>Men's Category</button>
      <button onClick={WomenCategory}>Women's Category</button>
      <button>Jewelery</button>
      <button>Electronics</button>
      </div>
      <ProductCom data={AllProduct} />
    </div>
    </>
  )
}

export default ProductCateogries