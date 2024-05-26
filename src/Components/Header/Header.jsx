import "../Header/mainheader.scss";
import React, { useContext, useEffect, useState } from "react";
import { SiPuma } from "react-icons/si";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { CartContext } from "../../Contexts/CartContext";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export const Header = () => {
  const [removeDropdown, setRemoveDropdown] = useState(false);
  const [checkItem, setCheckItem] = useState(false);
  const [checkBurger, setCheckBUrger] = useState(false);
  const handleChnage = () => {
    setCheckBUrger(!checkBurger);
  };
  const checkBurgerItem = () => {
    setCheckItem(true);
    console.log("yes");
    setRemoveDropdown(false);
    console.log(checkItem, "checkItem");
  };
  const removePage = () => {
    setRemoveDropdown(true);
    setCheckItem(false);
    console.log(removeDropdown, "remove");
  };
  // filter search ....
  const [home, setHome] = useState([]);
  const [classic, setClassic] = useState([]);
  const getHomeData = () => {
    axios
      .get("http://localhost:3000/HomeProduct")
      .then((res) => setHome(res.data));
  };
  const getClassicData = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setClassic(res.data));
  };
  useEffect(() => {
    getHomeData();
    getClassicData();
  }, []);
  const [inp, setInp] = useState("");
  const handleSearch = (e) => {
    setInp(e.target.value);
  };
  useEffect(() => {
    setClassic((prevdata) => [...prevdata, ...home]);
  }, [home]);

  // -----------------------------------------------------

  const { wishList, cartList } = useContext(CartContext);
  const totalQuantityCartList = cartList.map((item) => {
    return item.quantity;
  });
  const counterShopList = totalQuantityCartList.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const changeWord = [
    "FREE AND EASY RETURNS",
    "FREE SHIPPING ON ORDERS OVER $60",
  ];
  const [checkClick, setCheckClick] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % changeWord.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleModal = () => {
    setModal(!modal);
    setInp("");
  };
  const handleChange = () => {
    setCheckClick(!checkClick);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };
  return (
    <>
      <section className="changeText-section">
        <p className="change-par">{changeWord[currentIndex]}</p>
      </section>
      <header
        className={isSticky ? "sticky" : ""}
        style={burgerMenuActive ? { backgroundColor: "#FFF" } : {}}
      >
        <div className="contanier">
          <div className="row">
            <div className="logo">
              <Link to={"/"} className="logo-link">
                <SiPuma
                  style={burgerMenuActive ? { color: "#191919" } : {}}
                  className="logo-icon"
                />
              </Link>
            </div>
            <nav className="nav-bar">
              <ul className="nav-list">
                <li className="nav-item" onClick={() => handleChange()}>
                  <Link to={"/women"} className="nav-link">
                    Women
                  </Link>
                  <div className="dropdown-content">
                    <div className="dropdown-contanier">
                      <ul className="dropdown-list">
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Launch Calendar</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">New Arrivals</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Best Sellers</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">New In:Neutrals</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Trending Color:Brights
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">White Shoes</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Prints & Patterns
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Spring Shop</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">LEMLEM Capsule</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Shop All Women's
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link sale-link">SALE</Link>
                        </li>
                      </ul>
                      <div className="dropdown-content-block">
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Shoes</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Classics</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Lifestyle</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Suede</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Suede XL</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Palermo</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">RS</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Slides & Sandals
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Boots & Mids
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Running</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Training & Gym
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Basketball</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Wide</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Clothing</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">
                                  Hoodies & SweatShirts
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  T-Shirts & Tops
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Jackets & Outerwear
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Bras</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Pants</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Leggings</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Shorts</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Dresses & Skirts
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Tracksuits</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Loungewear</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Matching Sets
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Accessories</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">
                                  Bags & Backpacks
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Hats</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Socks</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Sport Equipment
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Sports</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Running</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Training & Gym
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Soccer</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Yoga</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Basketboll</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Motorsport</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Racquet Sports
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Golf</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to={"/men"} className="nav-link">
                    Men
                  </Link>
                  <div className="dropdown-content">
                    <div className="dropdown-contanier">
                      <ul className="dropdown-list">
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Launch Calendar</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">New Arrivals</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Best Sellers</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">New In:Neutrals</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Trending Color:Brights
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">White Shoes</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Prints & Patterns
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Spring Shop</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Shop All Men's</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link sale-link">SALE</Link>
                        </li>
                      </ul>
                      <div className="dropdown-content-block">
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Shoes</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Classics</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Lifestyle</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Suede</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Suede XL</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Palermo</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">RS</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Slides & Sandals
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Boots & Mids
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Running</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Training & Gym
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Basketball</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Motorsport</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Soccer</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Wide</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Clothing</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">
                                  Hoodies & SweatShirts
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  T-Shirts & Tops
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Polos</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Shorts</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Tracksuits</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Pants</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Jackets & Outerwear
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Jerseys</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Accessories</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Hats</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Socks & Underwear
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Bags & Backpacks
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Sport Equipment
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Sports</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Basketball</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Running</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Trainning & Gym
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Motorsport</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Soccer</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Racquet Sports
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Golf</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Kids</Link>
                  <div className="dropdown-content">
                    <div className="dropdown-contanier">
                      <ul className="dropdown-list">
                        <li className="dropdown-item">
                          <Link className="dropdown-link">New Arrivals</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Best Sellers</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">TROLLS</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">SQUISHMALLOWS</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Mommy & Me Gifts
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Matching Sets</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Prints & Patterns
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">White Shoes</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Spring Break</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">Shop All Kids'</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link sale-link">SALE</Link>
                        </li>
                      </ul>
                      <div className="dropdown-content-block">
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Boys</h3>
                            <dl className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Suede XL</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Palermo</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">RS</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Slides & Sandals
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Boots & Mids
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Running</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Training & Gym
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Basketball</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Motorsport</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Soccer</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Wide</Link>
                              </li>
                            </dl>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Clothing</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">
                                  Hoodies & SweatShirts
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  T-Shirts & Tops
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Polos</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Shorts</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Tracksuits</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Pants</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Jackets & Outerwear
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Jerseys</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Accessories</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Hats</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Socks & Underwear
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Bags & Backpacks
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Sport Equipment
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Sports</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Basketball</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Running</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Trainning & Gym
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Motorsport</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Soccer</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Racquet Sports
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Golf</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to={"/fenty-puma"} className="nav-link">
                    FENTY x PUMA
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Classics</Link>
                  <div className="dropdown-content">
                    <div className="dropdown-contanier">
                      <ul className="dropdown-list">
                        <li className="dropdown-item">
                          <Link className="dropdown-link">New Arrivals</Link>
                        </li>

                        <li className="dropdown-item">
                          <Link className="dropdown-link">Best Sellers</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link className="dropdown-link">
                            Speciality Suedes
                          </Link>
                        </li>
                      </ul>
                      <div className="dropdown-content-block">
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Shoes</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Suede XL</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Palermo</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Rider</Link>
                              </li>

                              <li className="content-item">
                                <Link className="content-link">Suede</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Basket</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Clyde</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Cali</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">CA Pro</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">GV Special</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Mayze</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Roma</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Speedcat</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Clothing</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">
                                  T7 TrackSuits
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">T-Shirts</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Hoodies & SweatShirts
                                </Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Tops</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Bottoms</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">
                                  Accessories
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="parent-content">
                          <div className="content-block">
                            <h3 className="content-head">Shop By Gender</h3>
                            <ul className="content-list">
                              <li className="content-item">
                                <Link className="content-link">Women</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Men</Link>
                              </li>
                              <li className="content-item">
                                <Link className="content-link">Kids</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Collaborations</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Sport</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Sale</Link>
                </li>
              </ul>
            </nav>
            <div
              style={burgerMenuActive ? { backgroundColor: "#FFF" } : {}}
              className="components-block"
            >
              <div className="icons-block">
                <button className="searchBtn" onClick={() => toggleModal()}>
                  <div className="searchBtn-block">
                    <BiSearch className="search-icon" />
                    <span>SEARCH</span>
                  </div>
                  <div
                    style={burgerMenuActive ? { backgroundColor: "#FFF" } : {}}
                    className="second-search-block"
                  >
                    <BiSearch
                      style={burgerMenuActive ? { color: "#191919" } : {}}
                      className="second-search"
                    />
                  </div>
                </button>
                <div className="link-icons">
                  <Link className="link-icon" to={"/wishlist"}>
                    {wishList.length === 0 ? (
                      ""
                    ) : (
                      <span className="link-icons-span">{wishList.length}</span>
                    )}
                    <AiOutlineHeart
                      style={burgerMenuActive ? { color: "#191919" } : {}}
                      className="icon"
                    />
                  </Link>
                  <Link to={"/cart"} className="link-icon">
                    <HiOutlineShoppingCart
                      style={burgerMenuActive ? { color: "#191919" } : {}}
                      className="icon"
                    />
                    {counterShopList === 0 ? (
                      ""
                    ) : (
                      <span className="link-icons-span">{counterShopList}</span>
                    )}
                  </Link>
                  <Link to={"/userpage"} className="link-icon user-link-icon">
                    <AiOutlineUser className="icon user-icon" />
                  </Link>
                </div>
              </div>
              <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
            </div>
          </div>
        </div>
      </header>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="modal-search-content">
              <div className="contanier">
                <div className="search-block">
                  <div className="cancel-block cancel-two-block">
                    <button
                      className="close-modal close-two-modal"
                      onClick={toggleModal}
                    >
                      <FaChevronLeft className="close-icon close-icon-left" />
                    </button>
                  </div>
                  <form>
                    <input
                      value={inp}
                      onChange={(e) => handleSearch(e)}
                      type="text"
                      placeholder="SEARCH PUMA.COM"
                    />
                    <IoSearch className="search-icon" />
                  </form>
                  <div className="cancel-block">
                    <button className="close-modal" onClick={toggleModal}>
                      <IoMdClose className="close-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-result-content">
              <div className="contanier">
                <div className="result-block">
                  <div className="trending-block">
                    <h3 className="trending-head">TRENDING SEARCHES</h3>
                    <ul className="trending-list">
                      <li className="trending-item">
                        <Link className="trending-link">Playstation</Link>
                      </li>
                      <li className="trending-item">
                        <Link className="trending-link">Women Sneakers</Link>
                      </li>
                      <li className="trending-item">
                        <Link className="trending-link">Playstation</Link>
                      </li>
                      <li className="trending-item">
                        <Link className="trending-link">One Piece</Link>
                      </li>
                      <li className="trending-item">
                        <Link className="trending-link">Palermo</Link>
                      </li>
                      <li className="trending-item">
                        <Link className="trending-link">Socks</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="recently-block">
                    <h3 className="recently-head">RECENTLY VIEWED</h3>
                    <div className="recently-collection">
                      {classic
                        .filter((item) => {
                          const itemName = item.name.toLowerCase();
                          const inputLowerCase = inp.toLowerCase();
                          if (inputLowerCase === "") {
                            return false;
                          }
                          return itemName.includes(inputLowerCase);
                        })
                        .slice(0, 8)
                        .map((item) => (
                          <Link
                            onClick={() => setModal(false)}
                            to={`/product/:${item.id}`}
                            className="recently-link"
                            key={item.id}
                          >
                            <div className="recently-card">
                              <div className="card-img">
                                <img src={item.productImage} alt="" />
                              </div>
                              <div className="card-info">
                                <p className="card-description">{item.name}</p>
                                <p className="card-price">${item.price}.00</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {checkBurger && (
        <div className="block">
          <div className="contanier">
            <div className="burger-block">
              <ul className="burger-list">
                <li onClick={() => checkBurgerItem()} className="burger-item">
                  <Link className="burger-link">
                    Women
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                {checkItem && (
                  <div
                    className="burger-dropdown-section"
                    style={
                      removeDropdown
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <div className="contanier">
                      <div className="burger-dropdown-block">
                        <div className="burger-dropdown-header">
                          <FaChevronLeft
                            onClick={() => removePage()}
                            className="left-icon"
                          />
                          <h3 className="dropdown-head">Women</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <li className="burger-item">
                  <Link className="burger-link">
                    Men
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="burger-item">
                  <Link className="burger-link">
                    Kids
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="burger-item">
                  <Link className="burger-link">
                    FENTY x PUMA
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="burger-item">
                  <Link className="burger-link">
                    Classics
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="burger-item">
                  <Link className="burger-link">
                    Collaborations
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="burger-item">
                  <Link className="burger-link">
                    Sport
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="burger-item">
                  <Link className="burger-link">
                    Sale
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="different-burger-item">
                  <Link className="burger-link">My Account</Link>
                </li>
                <li className="different-burger-item">
                  <Link className="burger-link">Initiate Return</Link>
                </li>
                <li className="different-burger-item">
                  <Link className="burger-link">Order Status</Link>
                </li>
                <li className="different-burger-item">
                  <Link className="burger-link">Contact Us</Link>
                </li>
                <li className="different-burger-item">
                  <Link className="burger-link">Wishlist</Link>
                </li>
                <li className="different-burger-item">
                  <Link className="burger-link">Language</Link>
                </li>
                <li className="burger-login-item">
                  <button className="login-btn">LOGIN</button>
                  <button className="login-btn">REGISTER HERE</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};
