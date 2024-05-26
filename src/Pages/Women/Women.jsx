import React from "react";
import { Video } from "../../Components/VideoBlock/Video";
import { Link } from "react-router-dom";
import "../Women/mainwomen.scss";
import { ViewCard } from "../../Components/ViewCard/ViewCard";
import { UserImage } from "../../Components/UserImage/UserImage";
import { Category } from "../../Components/Category/Category";
import { Slider } from "../../Components/Slider/Slider";
export const Women = () => {
  return (
    <>
      <main>
        <section className="palermo-section">
          <Video pumaVideo1={"/src/assets/video/palermo.mp4"} />
          <div className="palermo-info-block">
            <h3 className="palermo-head">PALERMO</h3>
            <p className="palermo-par">A STEP INTO THE SWEET LIFE</p>
            <Link className="palermo-link">SHOP NOW</Link>
          </div>
        </section>
        <section className="women-card-section">
          <div className="contanier">
            <div className="women-collection">
              <ViewCard
                customClass={"changeWidth"}
                viewImg={"/src/assets/image/womenView.jpg"}
                viewName={"FIREGLOW"}
              />
              <ViewCard
                customClass={"changeWidth"}
                viewImg={"/src/assets/image/womenView2.jpg"}
                viewName={"SUEDE XL"}
              />
            </div>
          </div>
        </section>
        <section className="wardrobe-section">
          <Video pumaVideo1={"/src/assets/video/wardrobe.mp4"} />
          <div className="wardrobe-info-block">
            <h3 className="wardrobe-head">BUILD YOUR WARDROBE</h3>
            <p className="wardrobe-par">THE LATEST AND GREATEST</p>
            <div className="link-block">
              <Link className="wardrobe-link">SHOP NEW ARRIVALS</Link>
              <Link className="wardrobe-link">SHOP BEST SELLERS</Link>
            </div>
          </div>
        </section>
        <Slider/>
        <Category
          sectionHeadText={"SHOP BY CATEGORY"}
          productBigImg={"/src/assets/image/favoriteimg.jpg"}
          productBigImgTwo={"/src/assets/image/favoriteimg2.jpg"}
          productSmallImg={"/src/assets/image/simpleimg.jpg"}
          productSmallImgTwo={"/src/assets/image/simpleimg2.jpg"}
          productSmallImgThree={"/src/assets/image/simpleimg3.jpg"}
          productSmallImgFour={"/src/assets/image/simpleimg4.jpg"}
          productBigText={"SHOES"}
          productBigTextTwo={"CLOTHING"}
          productText={"BRAS"}
          productTextTwo={"LEGGINGS"}
          productTextThree={"DRESSES + SKIRTS"}
          productTextFour={"MATCHING SETS"}
        />
        <section className="shop-performance-section">
          <div className="contanier">
            <div className="shop-performance-block">
              <div className="shop-performance-header">
                <h3 className="shop-head">SHOP BY PERFORMANCE</h3>
              </div>
              <div className="collection-block">
                <div className="performance-collection">
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/performance.jpg"}
                    viewName={"RUNNING"}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/performance2.jpg"}
                    viewName={"SOCCER"}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/performance3.jpg"}
                    viewName={"BASKETBALL"}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={"/src/assets/image/performance4.jpg"}
                    viewName={"TRAINNING"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <UserImage />
      </main>
    </>
  );
};
