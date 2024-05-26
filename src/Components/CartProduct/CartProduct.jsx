import React, { useContext, useEffect, useState } from "react";
import "../CartProduct/maincartproduct.scss";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { CartContext } from "../../Contexts/CartContext";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
export const CartProduct = ({
  size,
  productImage,
  name,
  productImageTwo,
  productImageThree,
  productImageFour,
  productImageFive,
  productImageSix,
  id,
  quantity,
  price,
}) => {
  // -------------------------------------------------
  const [radioValue, setRadioValue] = useState(size);
  const [df, setDf] = useState(false);

  const gh = (index) => {
    setDf(index);
  };

  const handleRadioChange = (value, index) => {
    setRadioValue(value);
    gh(index);
  };
  // ------------------------------------------------------------------------
  const [updateCartProduct, setUpdateCartProduct] = useState(false);
  const [deleteCartProduct, setDeleteCartProduct] = useState(false);
  const { cartList, setCartList, removeCartProduct, incrementQuantity } =
    useContext(CartContext);
  const [qtyBlock, setQtyBlock] = useState(false);
  const openQunatityBlock = () => {
    setQtyBlock(!qtyBlock);
  };
  if (deleteCartProduct) {
    document.body.classList.add("modal-cart-product-active");
  } else {
    document.body.classList.remove("modal-cart-product-active");
  }
  if (updateCartProduct) {
    document.body.classList.add("-cart-product-active");
  } else {
    document.body.classList.remove("-cart-product-active");
  }
  const openBox = () => {
    setQtyBlock(!qtyBlock);
  };

  const handleRemoveCartElement = () => {
    removeCartProduct(id, size);
    setDeleteCartProduct(false);
  };

  const [changeSize, setChangeSize] = useState(size);
  const getDataUpdate = () => {
    setUpdateCartProduct(false);
  };

  const handleSubmit = async () => {
    try {
      const updatedProduct = {
        size: radioValue,
        name: name,
        price: price,
        productImage: productImage,
        productImageTwo: productImageTwo,
        productImageThree: productImageThree,
        productImageFour: productImageFour,
        productImageFive: productImageFive,
        productImageSix: productImageSix,
      };
  
      const url = id < 9 
        ? `http://localhost:3000/posts/${id}` 
        : `http://localhost:3000/HomeProduct/${id}`;
  
      await axios.put(url, updatedProduct);
  
      setCartList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, size: radioValue } : item
        )
      );
      setUpdateCartProduct(false);
    } catch (error) {
      console.error("Error updating product size:", error);
    }
  };
  
  useEffect(() => {
    document.body.classList.toggle("-cart-product-active", updateCartProduct);
  }, [updateCartProduct]);
  return (
    <>
      <div className="cart-product-block" key={id}>
        <div className="cart-product-img">
          <img src={productImage} alt="" />
        </div>
        <div className="cart-product-describtion">
          <div className="cart-product-name">
            <Link className="cart-product-link">
              <h3 className="cart-product-head">{name}</h3>
            </Link>
            <div className="product-information">
              <p className="cart-product-par">
                Size: <span className="cart-product-span">{radioValue}</span>
              </p>
              <p className="cart-product-par">
                Style Number: <span className="cart-product-span">#{id}</span>
              </p>
            </div>
            <button onClick={openQunatityBlock} className="btn-quantity">
              <span>{quantity}</span>
              <FaChevronDown
                style={qtyBlock ? { transform: "rotate(180deg)" } : {}}
              />
              {qtyBlock ? (
                <div className="quantity-dropdown-block">
                  <p className="qty-par">Qty</p>
                  <ul className="qty-nav-list">
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      1
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      2
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      3
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      4
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      5
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      6
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      7
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      8
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      9
                    </li>
                    <li
                      onClick={(e) => incrementQuantity(id, e, size)}
                      className="qty-item"
                    >
                      10
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </button>
          </div>
          <div className="cart-product-price">
            <p className="cart-product-price-par">${price}.00</p>
            <div className="cart-product-icon-block">
              <AiFillEdit
                onClick={() => setUpdateCartProduct(true)}
                className="cart-product-icon"
              />
              <MdDeleteOutline
                className="cart-product-icon"
                onClick={() => setDeleteCartProduct(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {updateCartProduct && (
        <div className="update-cart-product-modal">
          <div className="overlay"></div>
          <div className="update-cart-product-modal-content">
            <div className="update-cart-product-block">
              <IoMdClose
                onClick={() => setUpdateCartProduct(false)}
                className="update-close-icon"
              />
              <p className="update-cart-product-id">#{id}</p>
              <h3 className="update-cart-product-name">
                FENTY x PUMA Creeper Phatty Earth Tone Women's Sneakers{" "}
              </h3>
              {/* <p>{radioValue}</p> */}
              <div className="changeSizeGallery">
                <div className="label-block">
                  <label
                    // onClick={() => gh(1, e)}
                    style={df === 1 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"5"}
                      name="prod"
                      id="radio2"
                      checked={radioValue === "5"}
                      onChange={() => handleRadioChange("5", 1)}
                    />
                    <span>5</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(2, e)}
                    style={df === 2 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"5.5"}
                      name="prod"
                      id="radio2"
                      checked={radioValue === "5.5"}
                      onChange={() => handleRadioChange("5.5", 2)}
                    />
                    <span>5.5</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(3)}
                    style={df === 3 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      name="prod"
                      value={"6"}
                      checked={radioValue === "6"}
                      id="radio2"
                      onChange={() => handleRadioChange("6", 3)}
                    />
                    <span>6</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(4)}
                    style={df === 4 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"6.5"}
                      checked={radioValue == "6.5"}
                      name="prod"
                      onChange={() => handleRadioChange("6.5", 4)}
                      id="radio2"
                    />
                    <span>6.5</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(5)}
                    style={df === 5 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"7"}
                      checked={radioValue === "7"}
                      name="prod"
                      onChange={(e) => handleRadioChange("7", 5)}
                      id="radio2"
                    />
                    <span>7</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(6)}
                    style={df === 6 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"7.5"}
                      checked={radioValue === "7.5"}
                      name="prod"
                      onChange={() => handleRadioChange("7.5", 6)}
                      id="radio2"
                    />
                    <span>7.5</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(7)}
                    style={df === 7 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"8"}
                      checked={radioValue === "8"}
                      name="prod"
                      onChange={() => handleRadioChange("8", 7)}
                      id="radio2"
                    />
                    <span>8</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(8)}
                    style={df === 8 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"8.5"}
                      checked={radioValue === "8.5"}
                      name="prod"
                      onChange={() => handleRadioChange("8.5", 8)}
                      id="radio2"
                    />
                    <span>8.5</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(9)}
                    style={df === 9 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"9"}
                      checked={radioValue === "9"}
                      name="prod"
                      onChange={() => handleRadioChange("9", 9)}
                      id="radio2"
                    />
                    <span>9</span>
                  </label>
                </div>
                <div className="label-block">
                  <label
                    // onClick={() => gh(10)}
                    style={df === 10 ? { backgroundColor: "brown" } : {}}
                    className="size-label"
                  >
                    <input
                      type="radio"
                      value={"9.5"}
                      checked={radioValue === "9.5"}
                      name="prod"
                      onChange={() => handleRadioChange("9.5", 10)}
                      id="radio2"
                    />
                    <span>9.5</span>
                  </label>
                </div>
              </div>
              <button onClick={handleSubmit} className="update-btn">
                UPDATE ITEM
              </button>
            </div>
          </div>
        </div>
      )}
      {deleteCartProduct && (
        <div className="delete-cart-product-modal">
          <div className="overlay"></div>
          <div className="delete-cart-product-modal-content">
            <div className="questions-block">
              <p className="questions-block-par">
                Are you sure you want to remove this item?
              </p>
              <IoMdClose
                onClick={() => setDeleteCartProduct(false)}
                className="questions-block-icon"
              />
            </div>
            <div className="product-description-block">
              <div className="product-description-block-content">
                <div className="img-block">
                  <img src={productImage} alt="" />
                </div>
                <div className="product-description-block-content-info">
                  <h3 className="product-description-block-content-info-head">
                    {name}
                  </h3>
                  <p className="product-description-block-content-info-par">
                    <span className="product-description-block-content-info-span">
                      Size:
                    </span>{" "}
                    {size}
                  </p>
                  <p className="product-description-block-content-info-par">
                    <span className="product-description-block-content-info-span">
                      Style:
                    </span>{" "}
                    {id}
                  </p>
                  <p className="product-description-block-content-info-par">
                    <span className="product-description-block-content-info-span">
                      Quantity:
                    </span>{" "}
                    {quantity}
                  </p>
                </div>
                <div className="product-description-block-content-price">
                  <p>${price}.00</p>
                </div>
              </div>
            </div>
            <div className="choose-button-block">
              <button
                onClick={handleRemoveCartElement}
                className="choose-button-block-remove"
              >
                REMOVE
              </button>
              <button
                onClick={() => setDeleteCartProduct(false)}
                className="choose-button-block-cancel"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
