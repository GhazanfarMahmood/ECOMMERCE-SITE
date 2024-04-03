import React, { useContext, useState } from "react";

import { MdDelete } from "react-icons/md";

import "./Cart.scss";

const CartComp = ({ data }) => {
  const [increment, setIncrement] = useState(0);
  const increaseValue = () => {
    setIncrement(increment + 1);
  };
  const decreaseValue = () => {
    setIncrement(increment - 1);
  };
  return (
    <div className="cart-comp-container">
      <img src={data.image} alt={data.title} />
      <div className="cart-text">
        <div>
        <h3>
          Name: <span>{data.title}</span>
        </h3>
        <h3>
          Price:<span> $ {Math.floor(data.price)}</span>
        </h3>
        </div>
        <div className="input-value">
        <button onClick={increaseValue}>+</button>
        <input type="text" value={increment} />
        <button onClick={decreaseValue}>-</button>
        </div>
        <span className="delete-btn">
         Delete: <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default CartComp;
