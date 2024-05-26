import React, { useState } from "react";
import "../NotFound/notfound.scss";
import { GiftCard } from "../../Components/GiftCard/GiftCard";
import { CiSearch } from "react-icons/ci";
export const NotFound = () => {
    const [searchInput,setSearchInput] = useState("");
    const handleChange = (e)=>{
        setSearchInput(e.target.value)
    }
    console.log(searchInput);
  return (
    <>
      <GiftCard />
      <section className="not-found-section">
        <div className="contanier">
          <div className="not-found-block">
            <h3 className="not-found-block-head">
              Sorry, we couldn't find what you are looking for
            </h3>
            <form className="not-found-block-form">
              <input
                onChange={(e)=> handleChange(e)}
                type="text"
                value={searchInput}
                placeholder="Search PUMA.com"
                className="not-found-block-input"
              />
              <div className="not-found-block-form-clear">
                <p onClick={()=> setSearchInput('')} className="not-found-block-form-clear-par">CLEAR</p>
              </div>
              <CiSearch className="not-found-block-form-icon" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
