import React, { createContext, useContext } from "react";

//Api Data from UseProducts File
import UseProducts from "../Utils/UseProducts";

const ProductContext = createContext();



const ContextProvider = ({children}) => {
     const products = UseProducts()
     
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

function ProductConsumer(){
  const  productList  = useContext(
    ProductContext);
  return productList;
};

export default ContextProvider;
export {  ProductContext, ProductConsumer };
