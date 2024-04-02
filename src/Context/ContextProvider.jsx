import { createContext,  useState } from "react";
import UseProducts from "../Utils/UseProducts";


export const ProductContext = createContext();

export const ContextProvider = ({children}) =>{
    const products  = UseProducts();// products data is coming from api in the utils files
    const [cartItems, setCartItems] = useState([]);
    const [descripItems, setDescripItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

   


   const addToCart = (products) =>{ 
    setCartItems([...cartItems, products]);
   }

const addToDescription = (products) =>{
  setDescripItems([...descripItems, products])
}
// const removeFromCart = () =>{
//     console.log("Producted has been remove from cart");
// }



  return (
    <ProductContext.Provider value={{products, cartItems,  selectedCategory, handleCategoryClick,addToCart, addToDescription, descripItems }}>
      {children}
    </ProductContext.Provider>
  )

};
