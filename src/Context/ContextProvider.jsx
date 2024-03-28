import { createContext,  useState } from "react";
import UseProducts from "../Utils/UseProducts";


export const ProductContext = createContext();

export const ContextProvider = ({children}) =>{
    const products  = UseProducts();// products data is coming from api in the utils files

    const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  const getDefaultCard = () =>{
    let card = {};

    for(let i = 1; i < products.length + 1; i++ ){
     card[i] = 0
    }
    return card
   }
   
   const [cartItems, setCartItems] = useState(getDefaultCard());// getDefault is the initial value that is pass to this state and cartItems is the current value which means the value that is pass to an element for shown and setCartItems is the function to update the state

   const addToCart = (itemId) =>{ // used to get the id of items
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1})) // where is prev is the previous value of the state is that is bydefault zero and after making a function we have made the colone of prev value by passing a spread operator and adding an itemId which is equal to the previous value have an itemId to update in cart we have added 1
}
const description = () =>{
    console.log("Producted has been added to description section");
}
const removeFromCart = () =>{
    console.log("Producted has been remove from cart");
}



  return (
    <ProductContext.Provider value={{products, selectedCategory, handleCategoryClick, cartItems, addToCart, description, removeFromCart}}>
      {children}
    </ProductContext.Provider>
  )

};
