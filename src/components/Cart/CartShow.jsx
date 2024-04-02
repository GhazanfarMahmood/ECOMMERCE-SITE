import React from "react";
import { useNavigate } from "react-router-dom";

const CartShow = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-show-container ms-3">
      <h1>
        There is no <span>product</span> to shop!
      </h1>
      <p>Back To Shop!👇👇</p>
      <button
        onClick={() => {
          navigate("/product");
        }}
      >
        Back To Shop!
      </button>
    </div>
  );
};

export default CartShow;
