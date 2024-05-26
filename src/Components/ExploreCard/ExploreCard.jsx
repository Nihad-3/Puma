import React from "react";
import { Link } from "react-router-dom";
import "../ExploreCard/mainExploreCard.scss";
export const ExploreCard = ({
  productImg,
  productName,
  productPrice,
  productId,
}) => {
  return (
    <>
      <Link to={`/product/:${productId}`} className="explore-card-link">
        <div className="card">
          <div className="card-image">
            <img src={productImg} alt="" />
          </div>
          <div className="card-text">
            <div className="card-description">
              <p className="product-name">{productName}</p>
              <p className="card-price">${productPrice}.00</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
