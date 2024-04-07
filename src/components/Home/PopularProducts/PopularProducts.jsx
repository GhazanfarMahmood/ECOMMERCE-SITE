import React, {useContext} from 'react'

// Data from Context Provider

import  { ProductContext }  from '../../../Context/ContextProvider';

// Product component for showing
import ProductCom from '../../../common/ProductCom/ProductCom';


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