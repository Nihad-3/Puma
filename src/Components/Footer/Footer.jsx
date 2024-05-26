import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Footer/mainfooter.scss";
import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiPuma } from "react-icons/si";
export const Footer = () => {
  const [support, setSupport] = useState(false);
  const [about, setAbout] = useState(false);
  const [stay, setStay] = useState(false);
  const [explore, setExplore] = useState(false);
  const handleSupport = () => {
    setSupport(!support);
    setAbout(false);
    setStay(false);
    setExplore(false);
  };
  const handleAbout = () => {
    setAbout(!about);
    setSupport(false);
    setStay(false);
    setExplore(false);
  };
  const handleStay = () => {
    setStay(!stay);
    setSupport(false);
    setAbout(false);
    setExplore(false);
  };
  const handleExplore = () => {
    setExplore(!explore);
    setSupport(false);
    setAbout(false);
    setStay(false);
  };
  return (
    <>
      <footer>
        <div className="contanier">
          <div className="burger-footer-content">
            <div className="footer-accordion-item">
              <div
                onClick={() => handleSupport()}
                className="footer-accordion-text"
              >
                <p className="footer-accordion-par">SUPPORT</p>
                <FaChevronDown
                  style={support ? { transform: "rotate(180deg)" } : {}}
                  className="footer-accordion-icon"
                />
              </div>
              {support && (
                <div className="accordion-content">
                  <ul className="accordion-list">
                    <li className="accordion-item">
                      <Link className="accordion-link">Contact Us</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">
                        Shipping and Delivery
                      </Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Terms & Conditions</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">
                        Transparency in Supply Chain
                      </Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Store Locator</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Buy a Gift Card</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Service Discount</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Refer a Friend</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Cookie Settings</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">FAQ</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Return Policy</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Privacy Policy</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">
                        Do Not Sell or Share My Information
                      </Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">
                        PUMA NYC Flagship Store
                      </Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Gift Card Balance</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Student Discount</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">
                        Promotion Exclusions
                      </Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Cookie Settings</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="footer-accordion-item">
              <div
                onClick={() => handleAbout()}
                className="footer-accordion-text"
              >
                <p className="footer-accordion-par">ABOUT</p>
                <FaChevronDown
                  style={about ? { transform: "rotate(180deg)" } : {}}
                  className="footer-accordion-icon"
                />
              </div>
              {about && (
                <div className="accordion-content about-accordion">
                  <ul className="accordion-list">
                    <li className="accordion-item">
                      <Link className="accordion-link">Company</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Corporate News</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Press Center</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">#REFORM</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Investors</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Sustainability</Link>
                    </li>
                    <li className="accordion-item">
                      <Link className="accordion-link">Careers</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="footer-accordion-item">
              <div
                onClick={() => handleStay()}
                className="footer-accordion-text"
              >
                <p className="footer-accordion-par">STAY UP TO DATE</p>
                <FaChevronDown
                  style={stay ? { transform: "rotate(180deg)" } : {}}
                  className="footer-accordion-icon"
                />
              </div>
              {stay && (
                <div className="accordion-content stay-accordion">
                  <ul className="accordion-list">
                    <li className="accordion-item">
                      <Link className="accordion-link">Sign Up for Email</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="footer-accordion-item">
              <div
                onClick={() => handleExplore()}
                className="footer-accordion-text"
              >
                <p className="footer-accordion-par">EXPLORE</p>
                <FaChevronDown
                  style={explore ? { transform: "rotate(180deg)" } : {}}
                  className="footer-accordion-icon"
                />
              </div>
              {explore && (
                <div className="accordion-content explore-accordion">
                  <ul className="accordion-list">
                    <li className="accordion-item">
                      <Link className="accordion-link">
                        <SiPuma className="accordion-icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="footer-button">
              <button className="footer-country">UNITED STATES</button>
            </div>
            <div className="footer-content-final">
              <div className="footer-content-final-icon">
                <Link
                  to={"https://www.youtube.com/puma"}
                  className="foot-icon-content"
                >
                  <FaYoutube />
                </Link>
                <Link
                  to={"https://twitter.com/PUMA"}
                  className="foot-icon-content"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to={"https://www.pinterest.com/puma/"}
                  className="foot-icon-content"
                >
                  <FaPinterest />
                </Link>
                <Link
                  to={"https://www.instagram.com/puma/"}
                  className="foot-icon-content"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={"https://www.facebook.com/PUMA/"}
                  className="foot-icon-content"
                >
                  <FaFacebook />
                </Link>
              </div>
              <div className="footer-content-final-text">
                <p className="footer-content-par">
                  <FaRegCopyright />
                  PUMA NORTH AMERICA, INC.
                  <Link style={{ color: "#fff" }}>IMPRINT AND LEGAL DATA</Link>
                  WEB ID: 747 680 734
                </p>
              </div>
            </div>
          </div>
          <div className="footer-block">
            <div className="footer-content">
              <h3 className="foot-head">SUPPORT</h3>
              <ul className="foot-list">
                <li className="foot-item">
                  <Link className="foot-link">Contact Us</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Shipping and Delivery</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Terms & Conditions</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">
                    Transparency in Supply Chain
                  </Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Store Locator</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Buy a Gift Card</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Service Discount</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Refer a Friend</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Cookie Settings</Link>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              {/* <h3 className="foot-head">SUPPOR0T</h3> */}
              <ul className="foot-list">
                <li className="foot-item">
                  <Link className="foot-link">FAQ</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Return Policy</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Privacy Policy</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">
                    Do Not Sell or Share My Information
                  </Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">PUMA NYC Flagship Store</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Gift Card Balance</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Student Discount</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Promotion Exclusions</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Cookie Settings</Link>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <h3 className="foot-head">ABOUT</h3>
              <ul className="foot-list">
                <li className="foot-item">
                  <Link className="foot-link">Company</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Corporate News</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Press Center</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">#REFORM</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Investors</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Sustainability</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Careers</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Refer a Friend</Link>
                </li>
                <li className="foot-item">
                  <Link className="foot-link">Cookie Settings</Link>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <div className="stay-block">
                <h3 className="foot-head">STAY UP TO DATE</h3>
                <Link className="stay-link">Sign Up for Email</Link>
              </div>
              <div className="explore-footer-block">
                <h3 className="foot-head">EXPLORE</h3>
              </div>
            </div>
          </div>
          <div className="footer-final">
            <div className="foot-icons">
              <Link
                to={"https://www.youtube.com/puma"}
                className="foot-icon-link"
              >
                <FaYoutube />
              </Link>
              <Link to={"https://twitter.com/PUMA"} className="foot-icon-link">
                <FaTwitter />
              </Link>
              <Link
                to={"https://www.pinterest.com/puma/"}
                className="foot-icon-link"
              >
                <FaPinterest />
              </Link>
              <Link
                to={"https://www.instagram.com/puma/"}
                className="foot-icon-link"
              >
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.facebook.com/PUMA/"}
                className="foot-icon-link"
              >
                <FaFacebook />
              </Link>
            </div>
            <div className="foot-country">
              <button className="footer-btn">UNITED STATES</button>
            </div>
            <div className="foot-copywrigth">
              <p className="copywrigth-par">
                <FaRegCopyright />
                PUMA NORTH AMERICA, INC.
                <Link style={{ color: "#fff" }}>IMPRINT AND LEGAL DATA</Link>
                WEB ID: 747 680 734
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
