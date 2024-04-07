import React, { useContext } from "react";

//CrumbLink component
import BreadCrumbLink from "../../common/BreadCrumbLink/BreadCrumbLink";

// Context Provider from Product Context 
import { ProductContext } from "../../Context/ContextProvider";

// Icons from react icons
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

// Css for Cart page
import "./Cart.scss";

// Use Navigate hook from react-router-dom
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, removeFromCart, getCartTotal, clearCart, IncrementCart, decrementCart, addToCart } = useContext(ProductContext);

  const navigate = useNavigate();

   
  return (
    <>
        <BreadCrumbLink pageName={"Cart"} />
      <div className="ms-3">
        {cartItems.length > 0 ? (
          <div className="cart-main-container">
            <div className="width">
              {cartItems.map((data) => {
                return (
                  <div className="cart-comp-container" key={data.id}>
                    <img src={data.image} alt={data.title} width={200} />
                    <div className="cart-text">
                      <div>
                        <h3>
                          Name: <span>{data.title}</span>
                        </h3>
                        <h3>
                          Price: <span>$ {Math.floor(data.price)}</span>
                        </h3>
                      </div>
                      <div>
                        <div className="input-value">
                          <span className="input-btn" onClick={() =>{IncrementCart(data.id)}}>
                            <FaPlus />
                          </span>
                          <span className="value">{data.quantity}</span>
                          <span className="input-btn" onClick={() => decrementCart(data.id)}>
                            <FaMinus />
                          </span>
                        </div>
                      </div>
                      <span className="delete-btn" onClick={() => {
                            removeFromCart(data.id);
                          }}>
                        Delete:
                        <MdDelete />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-price-container">
              <h2>Total Price : $ {Math.round(getCartTotal())}</h2>
              <div>
              <button onClick={() => navigate("/checkout")}>Check Out</button>
              <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
              </div>
            </div>  
          </div>
        ) : (
          <div className="cart-show-container">
            <h1>
              There is no <span>product</span> for shopping!
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
        )}
      </div>
    </>
  );
};

export default Cart;
