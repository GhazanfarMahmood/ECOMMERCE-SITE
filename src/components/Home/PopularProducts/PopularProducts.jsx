import React, {useContext} from 'react'

//CSS
import './PopularProducts.scss'

// Data from Context Provider

import ProductCom from '../../../common/ProductCom/ProductCom';

import  { ProductContext }  from '../../../Context/ContextProvider';

const PopularProducts = () => {
   const {products} = useContext(ProductContext);
    const limitedProductList = products.slice(0, 5);

  return (
    <>
    
      <div className="ms-3">
     <ProductCom data={limitedProductList} h1={"Popular"}/>
     </div>
    </>
  )
}

export default PopularProducts