import React, { useContext } from "react";

//Product Component css
import "./PorductCom.scss";
import { ProductContext } from "../../Context/ContextProvider";


const ProductCom = ({ data, h1 }) => {
  const {cartItems,  addToCart, addToDescription, removeFromCart } = useContext(
    ProductContext
  );

  return (
    <>
      <div className="common-product-container ">
        <h1>
          {h1} <span>Products</span>
        </h1>
        <div className="product-card">
          {data.length > 0 ? (
            data.map((products) => {
              return (
                <div key={products.id} className="product-item">
                  <img src={products.image} alt={products.title} />
                  <h3>{products.title.slice(0, 30)}...</h3>
                  <p>
                    Price: <span>${products.price}</span>
                  </p>
                  <div className="btn-gap">
                    <button onClick={() =>addToCart(products.id)}>Add To Cart ({Number(cartItems[products.id])})</button>
                    <button
                      onClick={() => {
                        addToDescription()
                      }}
                    >
                      Description
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="loader"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCom;
