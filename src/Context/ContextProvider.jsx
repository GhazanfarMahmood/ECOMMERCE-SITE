import { createContext, useEffect, useState } from "react";

// Api data for site form useProducts file in utils
import UseProducts from "../Utils/UseProducts";

// Creating context
export const ProductContext = createContext();

export const ContextProvider = ({ children }) => {
  const products = UseProducts(); // products data is coming from api in the utils files
 
  // State for categories button
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function for categories button
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };
   
   // State for the cartItems
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

// State for the description items
const [descripItems, setDescripItems] = useState(
  localStorage.getItem("descripItems") ? JSON.parse(localStorage.getItem("descripItems")) : []
)

  // Function for the addToCart 
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function for the removing from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Clear Cart function
  const clearCart = () => {
    setCartItems([]);
  };

  // Getting the total price 
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  //Increment function 
  const IncrementCart = (productId) => {
   setCartItems(cartItems.map(item =>
   item.id === productId ? {...item , quantity : item.quantity + 1} : item))
  };
  
  // Decrement Function 
  const decrementCart = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? {...item, quantity : Math.max(1, item.quantity - 1)} : item))
  };

  // UseEffects for adding hte value to localstorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);


  // UseEffect for adding value to local storage
  useEffect(() => {
    localStorage.setItem("descripItems", JSON.stringify(descripItems));
  }, [descripItems]);


  // Add to description function 
  const addToDescription = (products) => {
    const isItemInDescription  = descripItems.find(
      (descripItems) => descripItems.id === products.id
    );

    if(isItemInDescription){
      setDescripItems(
        descripItems.map((descripItem) =>
          descripItem.id === products.id
            ? { ...descripItem, quantity: descripItem.quantity + 1 }
            : descripItem
        )
      );
    }else{
      setDescripItems([...descripItems, { ...products, quantity: 1 }]);
    }
  };

  // Function for clearing description
  const clearDescription = () =>{
    setDescripItems([])   
  }

  


  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        getCartTotal,
        clearCart,
        selectedCategory,
        handleCategoryClick,
        addToCart,
        addToDescription,
        descripItems,
        clearDescription,
        removeFromCart,
        IncrementCart,
        decrementCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
