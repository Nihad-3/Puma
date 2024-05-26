import React, { useState } from "react";
import "../BurgerDropdown/mainburgerDropdown.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const BurgerDropdown = ({ onClose,onAllClose }) => {
  const removePage = () => {
    onClose();
  };
  const gotToPage = ()=>{
    onAllClose()
  }
  return (
    <div>
      <div className="burger-dropdown-section">
        <div className="burger-dropdown-header">
          <div className="contanier">
            <div className="burger-dropdown-header-block">
              <FaChevronLeft onClick={removePage} className="left-icon" />
              <h3 className="dropdown-head">Women</h3>
            </div>
          </div>
        </div>
        <div className="burger-dropdown-nav-bar">
          <div className="contanier">
            <div className="burger-dropdown-nav-list">
              <Link onClick={gotToPage} to={"/women"} className="explore-link">EXPLORE WOMEN'S</Link>
              <ul className="explore-nav-list">
                <li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Shoes
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li>
                <li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Clothing
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Accessories
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Sports
                    <FaChevronRight className="right-icon" />
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Launch Calendar
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    New Arrivals
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Best Sellers
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Summer Shop
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    White Shoes
                  </Link>
                </li><li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    Shop All Women's
                  </Link>
                </li>
                <li className="explore-list-item">
                  <Link className="explore-list-item-link">
                    SALE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BurgerDropdown;
