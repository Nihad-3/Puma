import React, { useContext, useEffect, useState } from "react";
import "../ProductPage/mainproductpage.scss";
import { Link, useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import axios from "axios";
import { FaAngleDown, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoCloseSharp, IoReload } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import { Video } from "../../Components/VideoBlock/Video";
import { Slider } from "../../Components/Slider/Slider";
import { CartContext } from "../../Contexts/CartContext";
import { WishList } from "../WishList/WishList";
import { GiftCard } from "../../Components/GiftCard/GiftCard";
import { FiInfo } from "react-icons/fi";
export const ProductPage = () => {
  const scrollToProductStory = () => {
    const productStorySection = document.getElementById("product-material");
    productStorySection.scrollIntoView({ behavior: "smooth" });
  };
  const [cartModal, setCartModal] = useState(false);
  const { addToCart, addToWishList, tr,isInWishList } = useContext(CartContext);
  const [qtyItem, setQtyItem] = useState(1);
  const [qtyDropdown, setQtyDropdown] = useState(false);
  const [modalSwiper, setModalSwiper] = useState(false);
  const [productDescription, setProductDescription] = useState([]);
  const { id } = useParams();
  const ProductID = id.slice(1);
  const getProductData = () => {
    if (Number(ProductID) < 9) {
      axios
        .get(`http://localhost:3000/posts/${ProductID}`)
        .then((res) => {
          const responseData = Array.isArray(res.data) ? res.data : [res.data];
          setProductDescription(responseData);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    } else {
      axios
        .get(`http://localhost:3000/HomeProduct/${ProductID}`)
        .then((res) => {
          const responseData = Array.isArray(res.data) ? res.data : [res.data];
          setProductDescription(responseData);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  };
  const checkQtyBlock = () => {
    setQtyDropdown(!qtyDropdown);
  };
  const changeQtyItem = (e) => {
    let quantityItem = e.target.textContent;
    setQtyItem(quantityItem);
  };
  const showProductImage = () => {
    setModalSwiper(true);
  };
  if (modalSwiper) {
    document.body.classList.add("active-productPage");
  } else {
    document.body.classList.remove("active-productPage");
  }
  useEffect(() => {
    getProductData();
  }, [productDescription]);
  const [selectedSize, setSelectedSize] = useState("");
  const getProducSize = (e) => {
    let y = e.target.textContent;
    setSelectedSize(y);
    document.querySelector(".sd")?.classList.remove("sd");
    e.target.classList.add("sd");
  };
  const [addWishCart, setAddWishCart] = useState(true);
  useEffect(() => {
    const openWishAdd = setTimeout(() => {
      setAddWishCart(false);
    });
    return () => clearTimeout(openWishAdd);
  }, []);
  return (
    <>
      <GiftCard />
      {productDescription.map((item) => {
        return (
          <div className="navigation-section" key={item.id}>
            <div className="contanier">
              <div className="navigation-block">
                <Link className="navigation-nav-list-link">Home</Link>
                <ul className="navigation-nav-list">
                  <li className="navigation-nav-list-item">
                    <Link className="navigation-nav-list-item-link">
                      FENTY x PUMA
                    </Link>
                  </li>
                  <li className="navigation-nav-list-item">{item.name}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
      <div className="product-section">
        <div className="contanier">
          <div className="product-block">
            <div className="product-img-gallery">
              {productDescription.map((item) => {
                return (
                  <div key={item.id} className="product-image-collection">
                    <div className="product-image-gallery-block-parent changeSizeImage-block">
                      <div className="product-image-gallery-block ">
                        <img
                          onClick={() => showProductImage()}
                          src={item.productImage}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      key={item.id}
                      className="product-image-gallery-block-parent"
                    >
                      <div className="product-image-gallery-block">
                        <img
                          onClick={() => showProductImage()}
                          src={item.productImageTwo}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-image-gallery-block-parent">
                      <div className="product-image-gallery-block">
                        <img
                          onClick={() => showProductImage()}
                          src={item.productImageThree}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-image-gallery-block-parent">
                      <div className="product-image-gallery-block">
                        <img
                          onClick={() => showProductImage()}
                          src={item.productImageFour}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-image-gallery-block-parent">
                      <div className="product-image-gallery-block">
                        <img
                          onClick={() => showProductImage()}
                          src={item.productImageFive}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="product-image-gallery-block-parent">
                      <div className="product-image-gallery-block">
                        <img
                          onClick={() => showProductImage()}
                          src={item.productImageSix}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="product-page-image">
                {productDescription.map((item) => {
                  return (
                    <Swiper
                      rewind={true}
                      scrollbar={{
                        hide: true,
                      }}
                      modules={[Scrollbar]}
                      className="productPageImage-Swiper"
                    >
                      <SwiperSlide className="productPageImage-slide">
                        <img src={item.productImage} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className="productPageImage-slide">
                        <img src={item.productImageTwo} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className="productPageImage-slide">
                        <img src={item.productImageThree} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className="productPageImage-slide">
                        <img src={item.productImageFour} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className="productPageImage-slide">
                        <img src={item.productImageFive} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className="productPageImage-slide">
                        <img src={item.productImageSix} alt="" />
                      </SwiperSlide>
                    </Swiper>
                  );
                })}
              </div>
            </div>
            <div className={"product-info-block-section"}>
              {productDescription.map((item) => {
                return (
                  <div className="product-info-block" key={item.id}>
                    <div className="product-name">
                      <h3 className="name-head">{item.name}</h3>
                      <div className="star-block">
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                      </div>
                      <p className="new-par">NEW</p>
                      <div className="pay-block">
                        <p className="price-par">${item.price}.00</p>
                        <p className="card-pay">
                          Or 4 payments of $35.00 by{" "}
                          <Link className="pay-link">afterpay</Link>
                        </p>
                      </div>
                    </div>
                    <Link to={"/fenty-puma"} className="explore-link">
                      EXPLORE THIS COLLECTION
                    </Link>
                    <div className="size-block">
                      <h3 className="size-head">Size</h3>
                      <p className="size-par">IN STOCK</p>
                      <div className="size-galery">
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            5.5
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            6
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            6.5
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            7
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            7.5
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            8
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            8.5
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            9
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            9.5
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            10
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            10.5
                          </span>
                        </div>
                        <div className="size-span-block">
                          <span
                            onClick={(e) => getProducSize(e)}
                            className="size-galery-span"
                          >
                            11
                          </span>
                        </div>
                      </div>
                    </div>
                    {!tr ? (
                      <div className="check-size-block">
                        <p className="check-size-block-par">
                          Please select a size
                        </p>
                        <FiInfo />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="cart-btn-block">
                      <div className="quantity-block">
                        <button
                          onClick={() => checkQtyBlock()}
                          className="quantity-btn"
                        >
                          {qtyItem} <FaAngleDown />
                          {qtyDropdown && (
                            <div className="cart-btn-dropdown-quantity-block">
                              <p className="cart-btn-dropdown-quantity-block-par">
                                Qty
                              </p>
                              <ul className="cart-btn-dropdown-quantity-block-nav-list">
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  1
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  2
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  3
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  4
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  5
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  6
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  7
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  8
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  9
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  10
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  11
                                </li>
                                <li
                                  onClick={(e) => changeQtyItem(e)}
                                  className="cart-btn-dropdown-quantity-block-nav-list-item"
                                >
                                  12
                                </li>
                              </ul>
                            </div>
                          )}
                        </button>
                      </div>
                      <div className="button-block">
                        <button
                          onClick={() =>
                            addToCart(item.id, selectedSize, qtyItem)
                          }
                          className="cart-btn"
                        >
                          ADD TO CART
                        </button>
                        <button
                          onClick={() => addToWishList(item.id, selectedSize)}
                          className="wishlist-btn"
                        >
                          {" "}
                          {isInWishList(item.id, selectedSize) ? (
                            <FaHeart />
                          ) : (
                            <FaRegHeart />
                          )}{" "}
                          ADD TO WISHLIST
                        </button>
                      </div>
                    </div>
                    <div className="text-block">
                      <p className="text-par-truck">
                        <FaTruckFast />
                        This item qualifies for free shipping!
                      </p>
                      <p className="text-par-reload">
                        <IoReload />
                        Free returns on all qualifying orders.
                      </p>
                    </div>
                    <div className="description-block">
                      <h3 className="description-block-head">Describtion</h3>
                      <p className="description-block-par">
                        Our Suede XL gets even a bigger upgrade with the BZ.
                        Inspired by breakdancing culture, the b-boy approved
                        style is outfitted with
                      </p>
                      <ul className="description-block-nav-list">
                        <li className="description-block-item">
                          Style: 397197_01
                        </li>
                        <li className="description-block-item">
                          Color: Warm White-PUMA Black-Team Regal Red-Putty
                        </li>
                      </ul>
                      <Link
                        className="read-more-link"
                        onClick={scrollToProductStory}
                      >
                        READ MORE
                      </Link>
                    </div>
                    <div className="reviews-block">
                      <div className="reviews-star-block">
                        <h3 className="reviews-star-block-head">Reviews(2)</h3>
                        <div className="stars">
                          <MdOutlineStar />
                          <MdOutlineStar />
                          <MdOutlineStar />
                          <MdOutlineStar />
                          <MdOutlineStar />
                        </div>
                      </div>
                      <div className="reviews-write-block">
                        <Link className="reviews-write-block-link">
                          WRITE A REVIEW
                        </Link>
                        <Link className="reviews-write-block-link">
                          READ ALL
                        </Link>
                      </div>
                    </div>
                    <div className="shipping-return-block">
                      <h3 className="shipping-block-head">
                        Shipping and Returns
                      </h3>
                      <p className="shipping-block-par">
                        Free standard shipping on orders over $60 before tax,
                        plus free returns on all qualifying orders.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {modalSwiper && (
        <div className="modal-swiper">
          <div className="overlay"></div>
          {productDescription.map((item) => {
            return (
              <div className="modal-swiper-content">
                <IoMdClose
                  onClick={() => setModalSwiper(false)}
                  className="modal-swiper-content-close-icon"
                />
                <Swiper
                  rewind={true}
                  cssMode={true}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="modalswiper"
                >
                  <SwiperSlide className="modal-swiper-slide">
                    <img src={item.productImage} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="modal-swiper-slide">
                    <img src={item.productImageTwo} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="modal-swiper-slide">
                    <img src={item.productImageThree} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="modal-swiper-slide">
                    <img src={item.productImageFour} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="modal-swiper-slide">
                    <img src={item.productImageFive} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className="modal-swiper-slide">
                    <img src={item.productImageSix} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            );
          })}
        </div>
      )}
      <div className="fenty-x-puma-rihanna-section">
        <div className="contanier">
          <div className="fenty-x-puma-rihanna-block">
            <div className="fenty-x-puma-block-describtion">
              <div className="fenty-x-puma-block-describtion-image">
                <img src="/src/assets/image/rihanna.webp" alt="" />
              </div>
              <div className="fenty-x-puma-block-describtion-info">
                <h3 className="fenty-x-puma-block-describtion-info-head">
                  FENTY x PUMA
                </h3>
                <p className="fenty-x-puma-block-describtion-info-par">
                  THE CREEPER PHATTY EARTH TONE
                </p>
              </div>
            </div>
            <div className="fenty-x-puma-block-describtion reverse-description">
              <div className="fenty-x-puma-block-describtion-info">
                <h3 className="fenty-x-puma-block-describtion-info-head">
                  FENTY x PUMA
                </h3>
                <p className="fenty-x-puma-block-describtion-info-par rihanna-par">
                  Rihanna and PUMA get down to earth with the Creeper Phatty
                  Earth Tone. Made with luxe, high-quality nubuck, the new FENTY
                  x PUMA Creeper Phatty stands out while blending in with soft,
                  natural colors. Touches of gold and the classic Creeper sole
                  elevated this new drop from Rihanna.
                </p>
              </div>
              <div className="fenty-x-puma-block-describtion-image">
                <img src="/src/assets/image/rihannaShoes.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Video pumaVideo1={"/src/assets/video/Rihanna.mp4"} />
      <Slider />
      <section className="product-story-section" id="product-material">
        <div className="contanier">
          <div className="product-story-block">
            <div className="product-story-block-header">
              <h3 className="product-story-block-head">PRODUCT STORY</h3>
              <p className="product-story-block-par">
                Rihanna and PUMA get down to earth with the Creeper Phatty Earth
                Tone. Made with luxe, high-quality nubuck, the new FENTY x PUMA
                Creeper Phatty stands out while blending in with soft, natural
                colors. Touches of gold and the classic Creeper sole elevate
                this new drop from Rihanna.
              </p>
            </div>
            <div className="product-story-block-details">
              <h3 className="product-story-block-details-head">DETAILS</h3>
              <ul className="product-story-block-details-list">
                <li className="product-story-block-details-list-item">
                  Leather upper
                </li>
                <li className="product-story-block-details-list-item">
                  Lace closure
                </li>
                <li className="product-story-block-details-list-item">
                  Ribbed gum midsole
                </li>
                <li className="product-story-block-details-list-item">
                  PUMA branding details
                </li>
              </ul>
            </div>
            <div className="product-story-block-details">
              <h3 className="product-story-block-details-head">
                Material Information
              </h3>
              <ul className="product-story-block-details-list">
                <li className="product-story-block-details-list-item">
                  Sockliner: 100% Synthetic
                </li>
                <li className="product-story-block-details-list-item">
                  Outsole: 100% TR (Thermoplastic Rubber)
                </li>
                <li className="product-story-block-details-list-item">
                  Upper: 100% Leather - cow
                </li>
                <li className="product-story-block-details-list-item">
                  Lining: 100% Synthetic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="product-page-image"></div>
    </>
  );
};
