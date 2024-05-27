import React, { useState } from "react";
import "../BurgerMenu/mainburger.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BurgerDropdown } from "../BurgerDropdown/BurgerDropdown";
export const BurgerMenu = ({ toggleBurgerMenu }) => {
  const [checkItem, setCheckItem] = useState(false);
  const [checkBurger, setCheckBurger] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const closeAllPage = () => {
    setCheckBurger(false);
    setCheckItem(false);
  };

  const handleChnage = () => {
    setCheckBurger(!checkBurger);
    setCheckItem(false);
    toggleBurgerMenu(!checkBurger);
  };

  const toggleCheckItem = (item) => {
    setCheckItem(!checkItem);
    setSelectedItem(item);
  };
  return (
    <>
      <div className="burger-menu-block">
        <button className="burger-btn" onClick={() => handleChnage()}>
          {checkBurger ? (
            <IoMdClose
              style={checkBurger ? { color: "#191919" } : {}}
              className="burger-icon"
            />
          ) : (
            <GiHamburgerMenu className="burger-icon" />
          )}
          <span
            style={checkBurger ? { color: "#191919" } : {}}
            className="burger-span"
          >
            MENU
          </span>
        </button>
      </div>
      {checkBurger && (
        <div className="block">
          <div className="contanier">
            <div className="burger-block">
              <ul className="burger-list">
                <li
                  onClick={() => toggleCheckItem("WOMEN")}
                  className="burger-item"
                >
                  <Link className="burger-link">
                    Women
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                {checkItem && (
                  <BurgerDropdown
                    onAllClose={closeAllPage}
                    onClose={() => toggleCheckItem("")}
                    burgerHeader={selectedItem}
                    burgerLink={selectedItem}
                    pageLink={selectedItem.toLocaleLowerCase()}
                  />
                )}
                <li
                  onClick={() => toggleCheckItem("MEN")}
                  className="burger-item"
                >
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
                  <Link to={"/fenty-puma"} className="burger-link">
                    FENTY x PUMA
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
                  <Link to={"/userpage"} className="burger-link">
                    My Account
                  </Link>
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
                  <Link to={"/wishlist"} className="burger-link">Wishlist</Link>
                </li>
                <li className="different-burger-item">
                  <Link className="burger-link">Language</Link>
                </li>
                <li className="burger-login-item">
                  <Link to={"/userpage"} className="login-btn">
                    LOGIN
                  </Link>
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
