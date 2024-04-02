import React, { useContext } from "react";

//Product Component css
import "./PorductCom.scss";
import { ProductContext } from "../../Context/ContextProvider";
import { useNavigate } from "react-router-dom";


const ProductCom = ({ data, h1 }) => {
 
  const navigate = useNavigate();
  const {addToCart, addToDescription} = useContext(ProductContext)
  

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
                    Price: <span>$ {Math.floor(products.price)}</span>
                  </p>
                  <div className="btn-gap">
                    <button onClick={() =>{
                      addToCart(products)
                    }}>Add To Cart </button>
                    <button
                      onClick={() => {
                        navigate("/description")
                        addToDescription(products)
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
