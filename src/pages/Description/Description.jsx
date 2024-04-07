import React, { useContext } from 'react'

// BreadCrumb Link 
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'

// Context Provider from Product Context
import { ProductContext } from '../../Context/ContextProvider'

// Component of description page
import DescriptionCom from '../../components/Description/DescriptionCom'
import DescriptionShow from '../../components/Description/DescriptionShow'

const Description = () => {
  const {descripItems} = useContext(ProductContext);

  return (
    <>
      <BreadCrumbLink pageName={"Description"} />
    <div className="ms-3">
  
  {descripItems.length > 0 ?(
      descripItems.map((product) =>{
        return <DescriptionCom data={product} key={product.id} />
       
      })) : (<DescriptionShow />) }

    </div>
    </>
  )
}

export default Description