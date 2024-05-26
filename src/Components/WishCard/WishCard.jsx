import React, { useContext, useState } from "react";
import "../WishCard/mainwishcard.scss";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import SpringImg from "/src/assets/image/springImg.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { CartContext } from "../../Contexts/CartContext";
export const WishCard = ({
  wishProductName,
  wishProductPrice,
  id,
  size,
  wishProductImage,
}) => {
  const [qtyItem, setQtyItem] = useState(1);
  const { removeWishElement, addToCart, t } = useContext(CartContext);
  const [wishModal, setWishModal] = useState(false);
  const WishToggleModal = () => {
    setWishModal(!wishModal);
  };
  const handleRemoveWishElement = () => {
    removeWishElement(id, size);
    WishToggleModal();
  };
  if (wishModal) {
    document.body.classList.add("wish-active-modal");
  } else {
    document.body.classList.remove("wish-active-modal");
  }
  return (
    <>
      <div className="wishlist-card">
        <Link className="wishlist-card-img">
          <img src={wishProductImage} alt="" />
        </Link>
        <div className="wishlist-card-text">
          <h3 className="wishlist-card-head">{wishProductName}</h3>
          <p className="wishlist-card-parTwo">
            <span className="wishlist-card-span">SIZE:</span> {size}
          </p>
          <p className="wishlist-card-parTwo">
            <span className="wishlist-card-span">PRICE:</span> $
            {wishProductPrice}.00
          </p>
          <p className="wishlist-card-parTwo">
            <span className="wishlist-card-span">STYLE NUMBER:</span> {id}
          </p>
          <div className="wishlist-icon-block">
            <AiFillEdit className="wishlist-icon" />
            <RiDeleteBinLine
              onClick={() => WishToggleModal()}
              className="wishlist-icon"
            />
          </div>
          <button
            onClick={() => addToCart(id, size, qtyItem)}
            className="wishlist-btn"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      {wishModal && (
        <div className="wishlist-delete-modal">
          <div className="overlay"></div>
          <div className="wishlist-modal-content">
            <div className="wishlist-modal-block">
              <div className="wishlist-modal-header">
                <p className="wishlist-modal-par">
                  Are you sure you want to remove this item?
                </p>
                <IoCloseSharp
                  className="wishlist-modal-icon"
                  onClick={() => WishToggleModal()}
                />
              </div>
              <div className="wishlist-modal-description">
                <div className="modal-img">
                  <img src={wishProductImage} alt="" />
                </div>
                <div className="modal-text">
                  <p className="wishlist-par-id">#{id}</p>
                  <h3 className="wishlist-modal-head">{wishProductName}</h3>
                  <p className="wishlist-modal-par-size">
                    <span className="wishlist-modal-span">SIZE:</span> {size}
                  </p>
                </div>
              </div>
              <div className="modal-button-block">
                <button
                  // onClick={() => removeWishElement(id,size)}
                  onClick={handleRemoveWishElement}
                  className="modal-btn"
                >
                  REMOVE
                </button>
                <button onClick={() => WishToggleModal()} className="modal-btn">
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
