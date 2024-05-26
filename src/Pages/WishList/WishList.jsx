import React, { useContext } from "react";
import "../WishList/mainwishlist.scss";
import { WishCard } from "../../Components/WishCard/WishCard";
import { CartContext } from "../../Contexts/CartContext";
import { FaRegHeart } from "react-icons/fa";
import { GiftCard } from "../../Components/GiftCard/GiftCard";
export const WishList = () => {
  const { wishList } = useContext(CartContext);
  console.log(wishList);
  return (
    <>
      <GiftCard/>
      <section className="wish-list-section">
        <div className="contanier">
          <div className="wish-list-block-parent">
            <div className="wish-list-block">
              <div className="wish-list-header">
                <h3 className="wish-list-head">MY WISHLIST</h3>
                <p className="wish-list-par">{wishList.length} items</p>
              </div>
              {
                wishList.length === 0 ? (
                  <section className="empty-wishlist-section">
                    <div className="empty-wishlist-block">
                    <FaRegHeart className="empty-wishlist-block-icon"/>
                    <h3 className="empty-wishlist-block-head">Your Wishlist is Empty</h3>
                    </div>
                  </section>
                ) : (
                  wishList.map((item) => {
                    return (
                      <WishCard
                        key={item.id}
                        id={item.id}
                        size={item.size}
                        wishProductImage={item.productImage}
                        wishProductName={item.name}
                        wishProductPrice={item.price}
                      />
                    );
                  })
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
