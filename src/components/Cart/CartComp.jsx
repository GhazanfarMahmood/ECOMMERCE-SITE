import React, { useContext, useState } from "react";

import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

// import "./Cart.scss";
import { ProductContext } from "../../Context/ContextProvider";

const CartComp = () => {
  const { removeFromCart, cartItems } = useContext(ProductContext)
  const [increment, setIncrement] = useState(0);
  const increaseValue = () => {
    setIncrement(increment + 1);
  };
  const decreaseValue = () => {
    setIncrement(increment - 1);
  };

  return (
    
    cartItems.map((data) =>{
      return (<>
      </>)
    })
  );
};

export default CartComp;
