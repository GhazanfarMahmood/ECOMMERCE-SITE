import React from 'react'

//CSS
import './PopularProducts.scss'

// Data from Context Provider
import { ProductConsumer } from '../../../Context/ContextProvider'
import ProductCom from '../../../common/ProductCom/ProductCom';

const PopularProducts = () => {
    const productList = ProductConsumer();
    const limitedProductList = productList.slice(0, 5);
 
  return (
    <>
    
      <div className="ms-3">
     <ProductCom data={limitedProductList} />
     </div>
    </>
  )
}

export default PopularProducts