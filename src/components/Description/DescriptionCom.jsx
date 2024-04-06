import "./Description.scss";
import { useNavigate } from "react-router-dom";

import StarsCom from "./StarsCom";

const DescriptionCom = ({ data }) => {
  const navigate = useNavigate();

  const clearPageFunc = () => {
    navigate("/product");
  };

  return (
    <div className="description-main">
      {data ? (
        <>
          <h1>
            Product <span>Description</span>
          </h1>
          <div className="description-container">
            <img src={data.image} alt={data.title} />
            <div className="product-description">
              <span>
                Title:<p>{data.title}</p>
              </span>
              <span>
                Price:<p>$ {Math.floor(data.price)}</p>
              </span>
              <span>
                Description: <p>{data.description}</p>
              </span>
              <span>
                Category: <p>{data.category}</p>
              </span>
              <span>
                Rating:
                <p>
                  <StarsCom data={data.rating.rate} />
                </p>
              </span>
              <button onClick={clearPageFunc}>Back To Shop!</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>There is no product to show</h1>
        </>
      )}
    </div>
  );
};

export default DescriptionCom;
