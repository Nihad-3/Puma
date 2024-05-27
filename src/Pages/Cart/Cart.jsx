import React, { useContext, useEffect, useState } from "react";
import "../Cart/maincart.scss";
import { FaCcPaypal, FaChevronDown, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { CartProduct } from "../../Components/CartProduct/CartProduct";
import { MdLockOutline } from "react-icons/md";
import { LiaCommentSolid } from "react-icons/lia";
import { Slider } from "../../Components/Slider/Slider";
import { CartContext } from "../../Contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { Audio, ThreeCircles } from "react-loader-spinner";
import { GiftCard } from "../../Components/GiftCard/GiftCard";
export const Cart = () => {
  // Add commit two
  const promoCode = "Nihad-Frontend";
  const [openPage, setOpenPage] = useState(true);
  const { cartList } = useContext(CartContext);
  const [codeText, setCodeText] = useState("");
  const [down, setDown] = useState(false);
  console.log(cartList);
  const qunatityCount = cartList.map((item) => {
    return item.quantity;
  });
  console.log(codeText);
  const eachProductTotal = cartList.map((item) => {
    return item.quantity * item.price;
  });
  const resultlPrice = eachProductTotal.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(eachProductTotal);
  const totalQuantity = qunatityCount.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  useEffect(() => {
    const openTimeOut = setTimeout(() => {
      setOpenPage(false);
    }, 2000);
    return () => clearTimeout(openTimeOut);
  }, []);
  const [newPrice, setNewPrice] = useState(false);
  const handleChange = (e) => {
    setCodeText(e.target.value);
  };
  const [rs, setRs] = useState(resultlPrice);
  const handlePromoCode = (e) => {
    e.preventDefault();
    if (codeText === promoCode) {
      setRs((resultlPrice * 20) / 100);
      setNewPrice(true);
      setCodeText("");
    } else {
      setNewPrice(false);
    }
  };
  console.log(resultlPrice, "ss");
  return (
    <>
      {openPage ? (
        <div className="open-page-block">
          <div className="overlay"></div>
          <div className="open-page-content">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#6C6C6C"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      ) : (
        <>
          {cartList.length === 0 ? (
            <section className="empty-cart-section">
              <div className="contanier">
                <div className="empty-cart-block">
                  <FiShoppingCart className="empty-cart-block-icon" />
                  <h3 className="empty-cart-block-head">
                    Your Shopping Cart is Empty
                  </h3>
                </div>
              </div>
            </section>
          ) : (
            <>
              <GiftCard />
              <section className="head-section">
                <div className="contanier">
                  <h3 className="quantity-head">
                    MY SHOPPING CART <span>({totalQuantity})</span>
                  </h3>
                </div>
              </section>
              <div className="cart-section">
                <div className="contanier">
                  <div className="cart-block">
                    <div className="cart-collection">
                      {cartList.map((item) => {
                        return (
                          <CartProduct
                            id={item.id}
                            key={item.id}
                            productImage={item.productImage}
                            productImageTwo={item.productImageTwo}
                            productImageThree={item.productImageThree}
                            productImageFour={item.productImageFour}
                            productImageFive={item.productImageFive}
                            productImageSix={item.productImageSix}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            size={item.size}
                          />
                        );
                      })}
                    </div>
                    <div className="cart-info-block">
                      <p className="earn-par">
                        <FaTruckFast /> YOU’VE EARNED FREE SHIPPING
                      </p>
                      <p className="free-par">
                        {" "}
                        <IoReload />
                        FREE RETURNS ON ALL QUALIFYING ORDERS.
                      </p>
                      <div className="cart-promo-block">
                        <button
                          onClick={() => setDown(!down)}
                          className="cart-code-btn"
                        >
                          <span>APPLY A PROME CODE</span>
                          <FaChevronDown
                            className="down-icon"
                            style={
                              down
                                ? { transform: "rotate(0deg)" }
                                : { transform: "rotate(180deg)" }
                            }
                          />
                        </button>
                        {down && (
                          <form className="cart-form-promo">
                            <input
                              type="text"
                              name=""
                              id="cart-code-input"
                              value={codeText}
                              onChange={(e) => handleChange(e)}
                              placeholder="Enter a promo code"
                            />
                            <button
                              onClick={(e) => handlePromoCode(e)}
                              className="cart-app-btn"
                            >
                              APPLY
                            </button>
                          </form>
                        )}
                      </div>
                      <div className="total-block">
                        <div className="subtotal-block">
                          <p className="total-par">SUBTOTAL</p>
                          <p
                            className={`${
                              newPrice ? "new-price-par" : "total-price"
                            }`}
                          >
                            ${resultlPrice}.00
                          </p>
                        </div>
                        <div className="subtotal-block">
                          <p className="total-par">SHIPPING COSTS</p>
                          <p className="total-price">FREE</p>
                        </div>
                        <div className="subtotal-block">
                          <p className="total-par">
                            ESTIMATED SALES TAX Learn more Sales Tax
                            <Link className="total-link">
                              <IoMdInformationCircleOutline />
                            </Link>
                          </p>
                          <div className="total-empty"></div>
                        </div>
                      </div>
                      <div className="estimated-block">
                        <div className="estimated-total-block">
                          <p className="estimated-par">ESTIMATED TOTAL</p>
                          <p className="estimated-price">${resultlPrice}.00</p>
                        </div>
                        <p className="payment-par">
                          Or 4 payments of $50.00 by{" "}
                          <Link className="payment-link">afterpay</Link>
                        </p>
                      </div>
                      <div className="checkout-block">
                        <Link className="checkout-link">CHECKOUT</Link>
                        <Link className="checkout-link different-link">
                          <FaCcPaypal className="checkout-icon" />
                        </Link>
                        <p className="checkout-par">
                          By continuing, I confirm that I have read and accept
                          the{" "}
                          <Link className="checkout-par-link">
                            Terms and Conditions
                          </Link>{" "}
                          and the{" "}
                          <Link className="checkout-par-link">
                            Privacy Policy
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Slider HeaderText={"YOU MAY ALSO LIKE"} />
            </>
          )}
        </>
      )}
    </>
  );
};
