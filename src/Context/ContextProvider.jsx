import { createContext, useEffect, useState } from "react";
import UseProducts from "../Utils/UseProducts";

export const ProductContext = createContext();

export const ContextProvider = ({ children }) => {
  const products = UseProducts(); // products data is coming from api in the utils files
  const [descripItems, setDescripItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

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

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const addToDescription = (products) => {
    setDescripItems([...descripItems, products]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const IncrementCart = (productId) => {
   setCartItems(cartItems.map(item =>
   item.id === productId ? {...item , quantity : item.quantity + 1} : item))
  };

  const decrementCart = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? {...item, quantity : Math.max(1, item.quantity - 1)} : item))
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

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
        removeFromCart,
        IncrementCart,
        decrementCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
