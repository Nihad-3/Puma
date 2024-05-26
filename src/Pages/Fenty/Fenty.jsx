import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../Fenty/mainfenty.scss";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { GrSort } from "react-icons/gr";
import { FaAngleDown, FaAngleUp, FaChevronDown } from "react-icons/fa";
import { IoCloseSharp, IoFilter } from "react-icons/io5";
import { FentyCard } from "../../Components/FentyCard/FentyCard";
import { UserImage } from "../../Components/UserImage/UserImage";
import { TfiLayoutGrid2, TfiLayoutGrid4 } from "react-icons/tfi";
import { useAuth } from "../../Contexts/AuthContext";
import { IoIosCloseCircleOutline, IoMdClose } from "react-icons/io";
export const Fenty = () => {
  const [accordion, setAccordion] = useState(false);
  const [sortDropdown, setSortDropdown] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [category, setCategory] = useState(false);
  const [postData, setPostData] = useState([]);
  const SmallFilter = postData.filter((item) => {
    return item.price > 50 && item.price <= 100;
  });
  const BigFilter = postData.filter((item) => {
    return item.price > 100 && item.price <= 150;
  });
  const [showGrid, setGridShow] = useState("four");
  const gridTwo = "two";
  const gridFour = "four";
  const getProductData = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    setPostData(res.data);
  };
  const checkBtn = () => {
    setDropDown(!dropDown);
  };
  const [sortPrice, setSortPrice] = useState(false);
  const getSortProduct = (e) => {
    setSortPrice(true);
  };

  const [form, setForm] = useState({
    userName: "",
    userSurname: "",
    userEmail: "",
  });
  const closeBlock = () => {
    setDropDown(false);
    setCategory(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (
      form.userEmail.trim().length > 0 &&
      form.userName.trim().length > 0 &&
      form.userSurname.trim().length > 0
    ) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          setForm({ userName: "", userSurname: "", userEmail: "" });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const [filterModal, setFilterModal] = useState(false);
  const [filter, setFilter] = useState(null);
  const handleRadioChange = (e) => {
    setFilter(e.target.value);
  };
  const clearFilter = () => {
    setFilter(null);
    setAccordion(false);
  };
  const openFilterModal = () => {
    setFilterModal(!filterModal);
  };
  if (filterModal) {
    document.body.classList.add("active-filter-modal");
  } else {
    document.body.classList.remove("active-filter-modal");
  }
  const [filterBlock, setFilterBlock] = useState(false);
  const openFilterContent = () => {
    setFilterBlock(!filterBlock);
    setFilter("");
  };
  console.log(filter);
  const filteredData =
    filter === "small" ? SmallFilter : filter === "big" ? BigFilter : postData;
  useEffect(() => {
    getProductData();
  }, []);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
  const productStorySectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset !== undefined && offset > 200) {
        setIsScrollButtonVisible(true);
      } else {
        setIsScrollButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 600) {
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
  const scrollToProductStory = () => {
    if (productStorySectionRef.current) {
      productStorySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {isScrollButtonVisible && (
        <Link onClick={scrollToProductStory} className="go-to-up-link">
          <FaAngleUp className="go-to-up-icon" />
        </Link>
      )}
      <div className="location-block" ref={productStorySectionRef}>
        <div className="contanier">
          <Link className="home-link">Home</Link>
          <p className="home-par">FENTY X PUMA</p>
        </div>
      </div>
      <div className="fenty-section">
        <div className="contanier">
          <div className="fenty-block">
            <h3 className="fenty-head">FENTY x PUMA</h3>
            <p className="fenty-par">THE CREEPER PHATTY EARTH TONE</p>
          </div>
        </div>
      </div>
      <div className="fenty-information-section">
        <div className="contanier">
          <div className="fenty-info-block">
            <h3 className="head-info">FENTY X PUMA</h3>
            <p className="head-par">
              Rihanna and PUMA get down to earth with the Creeper Phatty Earth
              Tone. Made with luxe, high-quality nubuck, the new FENTY x PUMA
              Creeper Phatty stands out while blending in with soft, natural
              colors. Touches of gold and the classic Creeper sole elevated this
              new drop from Rihanna.
            </p>
          </div>
        </div>
      </div>
      <section className={`sort-section ${isSticky ? "sort-sticky" : ""}`}>
        <div className="contanier">
          <div className="sort-block">
            <div className="sort-block-btns">
              <div className="sort-block-btns-icon">
                <GrSort className="sort-icon" />
              </div>
              <div className="sort-gallery">
                <div className="sort-btn-content">
                  <button className="filter-btn">Gender</button>
                </div>
                <div className="sort-btn-content">
                  <button className="filter-btn">Category</button>
                </div>
                <div className="sort-btn-content">
                  <button
                    onClick={() => openFilterContent()}
                    className="filter-btn"
                  >
                    Price
                    <FaAngleDown
                      style={filterBlock ? { transform: "rotate(180deg)" } : ""}
                    />
                  </button>
                  {filterBlock && (
                    <div className="filter-content">
                      <IoMdClose
                        onClick={() => setFilterBlock(false)}
                        className="filter-content-close-icon"
                      />
                      <div className="filter-child">
                        <input
                          type="radio"
                          value={"small"}
                          onChange={(e) => handleRadioChange(e)}
                          name="s"
                          id="rt"
                        />
                        <p className="filter-child-price-par">50-100</p>
                      </div>
                      <div className="filter-child">
                        <input
                          type="radio"
                          value={"big"}
                          onChange={(e) => handleRadioChange(e)}
                          name="s"
                          id="rt"
                        />
                        <p className="filter-child-price-par">100-180</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="sort-btn-content">
                  <button className="filter-btn">Size</button>
                </div>
                <div className="sort-btn-content">
                  <button className="filter-btn">Color</button>
                </div>
              </div>
            </div>
            <div className="response-filter-block">
              <button
                onClick={openFilterModal}
                className="response-filter-block-btn"
              >
                <span className="response-filter-block-btn-span">
                  FILTERS
                </span>
                <GrSort className="response-filter-block-btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="getData-collection-section">
        <div className="contanier">
          <div className="getData-collection-block">
            <h3 className="getData-collection-block-head">
              {filteredData.length} PRODUCTS
            </h3>
            <div className="getData-collection-icons">
              <div className="grid-icons-block">
                <TfiLayoutGrid2
                  onClick={() => setGridShow(gridTwo)}
                  // className="grid-icon"
                  className={`grid-icon ${
                    showGrid === gridTwo ? "grid-icon-active" : ""
                  }`}
                />
              </div>
              <div className="grid-icons-block">
                <TfiLayoutGrid4
                  onClick={() => setGridShow(gridFour)}
                  // className="grid-icon"
                  className={`grid-icon ${
                    showGrid === gridFour ? "grid-icon-active" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fenty-card-collection">
        <div className="contanier">
          <div className="card-collection-block">
            {filteredData.map((item) => {
              return (
                <FentyCard
                  key={item.id}
                  name={item.name}
                  productImage={item.productImage}
                  productImageTwo={item.productImageTwo}
                  productImageThree={item.productImageThree}
                  productImageFour={item.productImageFour}
                  productImageFive={item.productImageFive}
                  productImageSix={item.productImageSix}
                  id={item.id}
                  price={item.price}
                  customClass={
                    showGrid === gridTwo ? "fenty-link-two" : "fenty-link"
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
      <UserImage />
      <section className="be-first-section">
        <div className="contanier">
          <div className="be-first-block">
            <div className="be-first-header">
              <h3 className="be-first-head">BE THE FIRST TO KNOW</h3>
              <p className="be-first-par">
                SIGN UP FOR EMAILS TO STAY IN THE LOOP FOR FUTURE FENTY X PUMA
                DROPS.
              </p>
            </div>
            <form className="be-first-block-form">
              <div className="be-first-form-input">
                <div className="be-first-input-block">
                  <label htmlFor="" className="be-par">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id=""
                    onChange={(e) => handleChange(e)}
                    value={form.userName}
                    className="be-input"
                    placeholder="First name"
                  />
                </div>
                <div className="be-first-input-block">
                  <label htmlFor="" className="be-par">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    name="userSurname"
                    id=""
                    onChange={(e) => handleChange(e)}
                    className="be-input"
                    value={form.userSurname}
                    placeholder="Last name"
                  />
                </div>
                <div className="be-first-input-block">
                  <label htmlFor="" className="be-par">
                    EMAIL
                  </label>
                  <input
                    type="text"
                    name="userEmail"
                    id=""
                    onChange={(e) => handleChange(e)}
                    className="be-input"
                    value={form.userEmail}
                    placeholder="Email"
                  />
                </div>
              </div>
              <button
                onClick={(e) => handleSaveChanges(e)}
                className="send-btn"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>

      {filterModal && (
        <div className="modal-response-filter">
          <div className="overlay"></div>
          <div className="response-filter-left-section">
            <div className="contanier">
              <div className="response-filter-left-block">
                <div className="response-filter-left-block-header">
                  <h3 className="response-filter-left-block-header-head">
                    Product Filters
                  </h3>
                  <IoMdClose onClick={()=> setFilterModal(false)} className="response-filter-left-block-header-icon" />
                </div>
                <ul className="response-filter-left-block-list">
                  <li className="response-filter-left-block-list-item">
                    <div className="response-filter-left-block-list-item-text">
                      <p className="response-filter-text-par">Gender</p>
                      <FaChevronDown className="response-filter-text-icon" />
                    </div>
                  </li>
                  <li className="response-filter-left-block-list-item">
                    <div className="response-filter-left-block-list-item-text">
                      <p className="response-filter-text-par">Category</p>
                      <FaChevronDown className="response-filter-text-icon" />
                    </div>
                  </li>
                  <li className="response-filter-left-block-list-item">
                    <div
                      onClick={() => setAccordion(!accordion)}
                      className="response-filter-left-block-list-item-text"
                    >
                      <p className="response-filter-text-par">Price</p>
                      <FaChevronDown
                        style={accordion ? { transform: "rotate(180deg)" } : {}}
                        className="response-filter-text-icon"
                      />
                    </div>
                    {accordion && (
                      <div className="response-filter-content">
                        {filter && filter.length > 0 && (
                          <p
                            className="response-filter-close-par"
                            onClick={clearFilter}
                            style={{ cursor: "pointer" }}
                          >
                            Clear{" "}
                            <IoIosCloseCircleOutline className="response-filter-close-icon" />
                          </p>
                        )}
                        <div className="filter-child">
                          <input
                            type="radio"
                            value={"small"}
                            onChange={(e) => handleRadioChange(e)}
                            name="s"
                            id="rt"
                          />
                          <p className="filter-child-price-par">50-100</p>
                        </div>
                        <div className="filter-child">
                          <input
                            type="radio"
                            value={"big"}
                            onChange={(e) => handleRadioChange(e)}
                            name="s"
                            id="rt"
                          />
                          <p className="filter-child-price-par">100-180</p>
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="response-filter-left-block-list-item">
                    <div className="response-filter-left-block-list-item-text">
                      <p className="response-filter-text-par">Size</p>
                      <FaChevronDown className="response-filter-text-icon" />
                    </div>
                  </li>
                  <li className="response-filter-left-block-list-item">
                    <div className="response-filter-left-block-list-item-text">
                      <p className="response-filter-text-par">Color</p>
                      <FaChevronDown className="response-filter-text-icon" />
                    </div>
                  </li>
                </ul>
                <button className="response-filter-left-block-btn">
                  SHOW {filteredData.length} PRODUCTS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
