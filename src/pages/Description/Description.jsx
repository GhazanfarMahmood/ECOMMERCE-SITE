import React, { useContext } from 'react'
import BreadCrumbLink from '../../common/BreadCrumbLink/BreadCrumbLink'
import { ProductContext } from '../../Context/ContextProvider'
import DescriptionCom from '../../components/Description/DescriptionCom'
import DescriptionShow from '../../components/Description/DescriptionShow'

const Description = () => {
  const {descripItems} = useContext(ProductContext);

  return (
    <>
    <div className="ms-3">
      <BreadCrumbLink pageName={"Description"} />
  
  {descripItems.length > 0 ?(
      descripItems.map((product) =>{
        return <DescriptionCom data={product} key={product.id} />
       
      })) : (<DescriptionShow />) }

    </div>
    </>
  )
}

export default Description