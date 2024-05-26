import React, { useState } from "react";
import "../BurgerMenu/mainburger.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BurgerDropdown } from "../BurgerDropdown/BurgerDropdown";
export const BurgerMenu = () => {
  // const [checkItem, setCheckItem] = useState(false);
  // const [checkBurger, setCheckBurger] = useState(false);
  // const handleChnage = () => {
  //   setCheckBurger(!checkBurger);
  // };
  // const checkBurgerItem = () => {
  //   setCheckItem(true);
  // };
  const [checkItem, setCheckItem] = useState(false);
  const [checkBurger, setCheckBurger] = useState(false);
  const closeAllPage = ()=>{
    setCheckBurger(false)
    setCheckItem(false)
  }

  const handleChnage = () => {
    setCheckBurger(!checkBurger);
    setCheckItem(false)
  };

  const toggleCheckItem = () => {
    setCheckItem(!checkItem);
  };
  return (
    <>
      <div className="burger-menu-block">
        <button className="burger-btn" onClick={() => handleChnage()}>
          {checkBurger ? (
            <IoMdClose className="burger-icon" />
          ) : (
            <GiHamburgerMenu className="burger-icon" />
          )}
          <span className="burger-span">MENU</span>
        </button>
      </div>
      {checkBurger && (
        <div className="block">
          <div className="contanier">
            <div className="burger-block">
              <ul className="burger-list">
                <li onClick={() => toggleCheckItem()} className="burger-item">
                  <Link className="burger-link">
                    Women
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                {checkItem && <BurgerDropdown onAllClose={closeAllPage} onClose={toggleCheckItem} />}
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
                  <Link className="login-btn">LOGIN</Link>
                  <Link className="login-btn">REGISTER HERE</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default BurgerMenu;
