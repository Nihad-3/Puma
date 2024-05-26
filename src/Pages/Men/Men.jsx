import React from "react";
// import "../Men/men.scss";
import "../Men/mainmen.scss";
import { Link } from "react-router-dom";
import { ViewCard } from "../../Components/ViewCard/ViewCard";
import { Video } from "../../Components/VideoBlock/Video";
import { Category } from "../../Components/Category/Category";
import { Slider } from "../../Components/Slider/Slider";
import { UserImage } from "../../Components/UserImage/UserImage";
export const Men = () => {
  return (
    <>
      <section className="inverse-section">
        <div className="contanier">
          <div className="inverse-block">
            <h3 className="inverse-head">MB.01 INVERSE TOXIC</h3>
            <p className="inverse-par">BY LAMELO BALL</p>
            <Link className="inverse-link">SHOP NOW</Link>
          </div>
        </div>
      </section>
      <Slider HeaderText={"TRENDING IN BASKETBALL"} />
      <section className="nba-section">
        <div className="contanier">
          <div className="nba-block">
            <ViewCard
              customClass={"changeWidth"}
              viewImg={"/src/assets/image/nbaimg.jpg"}
              viewName={"MB.03 SPARK"}
            />
            <ViewCard
              customClass={"changeWidth"}
              viewImg={"/src/assets/image/nbaimg2.jpg"}
              viewName={"SCOOT ZEROS X NBA 2K"}
            />
          </div>
        </div>
      </section>
      <section className="wardrobe-men-section">
        <Video pumaVideo1={"/src/assets/video/wardrobe.mp4"} />
        <div className="wardrobe-men-block">
          <h3 className="wardrobe-head">BUILD YOUR WARDROBE</h3>
          <p className="wardrobe-par">THE LATEST AND GREATEST</p>
          <div className="wardrobe-link-block">
            <Link className="wardrobe-link">SHOP NEW ARRIVALS</Link>
            <Link className="wardrobe-link">SHOP NEW ARRIVALS</Link>
          </div>
        </div>
      </section>
      <Category
        sectionHeadText={"SHOP BY CATEGORY"}
        productBigImg={"/src/assets/image/menCategory.jpg"}
        productBigImgTwo={"/src/assets/image/menCategory2.jpg"}
        productSmallImg={"/src/assets/image/smallMen.jpg"}
        productSmallImgTwo={"/src/assets/image/smallMen2.jpg"}
        productSmallImgThree={"/src/assets/image/smallMen3.jpg"}
        productSmallImgFour={"/src/assets/image/smallMen4.jpg"}
        productBigText={"SHOES"}
        productBigTextTwo={"CLOTHING"}
        productText={"SHIRTS"}
        productTextTwo={"SHORTS"}
        productTextThree={"MATCHING SETS"}
        productTextFour={"ACCESSORIES"}
      />
      <Category
        sectionHeadText={"SHOP BY PERFORMANCE"}
        productBigImg={"/src/assets/image/performanceMen.jpg"}
        productBigImgTwo={"/src/assets/image/performanceMen2.jpg"}
        productSmallImg={"/src/assets/image/performanceMen3.jpg"}
        productSmallImgTwo={"/src/assets/image/performanceMen4.jpg"}
        productSmallImgThree={"/src/assets/image/performanceMen5.jpg"}
        productSmallImgFour={"/src/assets/image/performanceMen6.jpg"}
        productBigText={"BASKETBALL"}
        productBigTextTwo={"SOCCER"}
        productText={"RUNNING"}
        productTextTwo={"TRAINNING"}
        productTextThree={"GOLF"}
        productTextFour={"MOTORSPORT"}
      />
      <UserImage />
    </>
  );
};
