import React, { useContext, useEffect, useState } from "react";

//CrumbLink component
import BreadCrumbLink from "../../common/BreadCrumbLink/BreadCrumbLink";
import { ProductContext } from "../../Context/ContextProvider";
import CartComp from "../../components/Cart/CartComp";
import CartShow from "../../components/Cart/CartShow";
import CartPrice from "../../components/Cart/CartPrice";

const Cart = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <>
      <div className="ms-3" >
        <BreadCrumbLink pageName={"Cart"} />
        {cartItems.length > 0 ? (
          <div className="cart-main-container">
          <div className="width">
            {cartItems.map((product) => {
              return <CartComp data={product} key={product.id} />;
            })}
          </div>
            <CartPrice />
            </div>
        ) : (
          <CartShow />
        )}
      </div>
    </>
  );
};

export default Cart;
