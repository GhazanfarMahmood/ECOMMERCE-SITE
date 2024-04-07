import React, { useContext, useState } from "react";

// Css for checkout Components
import "./CheckOut.scss";

// Dropdown component
import DropDown from "./DropDown";

// Use Navigate for navigation from react-router-dom
import { useNavigate } from "react-router-dom";

// Context Provider from product context 
import { ProductContext } from "../../Context/ContextProvider";

const CheckOutComp = () => {
  const {clearCart} = useContext(ProductContext)
  const [paymentValue, setPaymentValue] = useState({
    CardNumber: "",
    Data: "",
    password: "",
    CardName: "",
  });
  const navigate = useNavigate();

  const PaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const paymentSubmit = (e) => {
    e.preventDefault();
    navigate("/thankspage");
    clearCart();
  };

  return (
    <div className="check-out-container ms-3">
      <h1>
        <span>Payment </span> Methods
      </h1>
      <DropDown />
      <form onSubmit={paymentSubmit}>
        <label htmlFor="cardNumber">
          <span>Cart Number:</span>
          <input
            type="text"
            placeholder="Card Number"
            required
            value={paymentValue.CardNumber}
            onChange={PaymentChange}
            name="CardNumber"
          />
        </label>

        <label htmlFor="monthYear">
          <span>Month & Year:</span>
          <input
            type="text"
            placeholder="MM/YY"
            required
            value={paymentValue.Data}
            onChange={PaymentChange}
            name="Data"
          />
        </label>
        <label htmlFor="code">
          <span>CVV Code:</span>
          <input
            type="password"
            placeholder="CVV Code"
            required
            value={paymentValue.password}
            onChange={PaymentChange}
            name="password"
          />
        </label>

        <label htmlFor="name">
          <span>Name of the Card:</span>
          <input
            type="text"
            placeholder="Name On The Card"
            required
            value={paymentValue.CardName}
            onChange={PaymentChange}
            name="CardName"
          />
        </label>

        <button
          type="submit"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutComp;
