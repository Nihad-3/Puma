import React from "react";
import "../GiftCard/giftcard.scss";
import { Link } from "react-router-dom";
export const GiftCard = () => {
  return (
    <>
      <div className="gift-card-section">
        <div className="contanier">
          <div className="gift-card-block">
            <p className="gift-card-block-par">
              GET A $20 VOUCHER WHEN YOU BUY A $100 E-GIFT CARD
            </p>
            <Link className="gift-card-block-link">SHOP NOW</Link>
          </div>
        </div>
      </div>
    </>
  );
};
