import React, {useContext} from 'react'

//CSS
import './NewlyArrival.scss'

//Data from Api
import { ProductContext }  from '../../../Context/ContextProvider'

import ProductCom from '../../../common/ProductCom/ProductCom';

const NewlyArrival = () => {
  const { products }  = useContext(ProductContext);
     const limitedArrival = products.slice(products.length - 5 , products.length -1)
  return (
    <>
    <div className="ms-3">
    <ProductCom data={limitedArrival} h1={"Latest"}/>
    </div>
    </>
  )
}

export default NewlyArrival