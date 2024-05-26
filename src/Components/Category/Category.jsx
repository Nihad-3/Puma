import React from "react";
import "../Category/maincategory.scss";
import { ViewCard } from "../ViewCard/ViewCard";
export const Category = ({
  sectionHeadText,
  productBigImg,
  productBigImgTwo,
  productSmallImg,
  productSmallImgTwo,
  productSmallImgThree,
  productSmallImgFour,
  productBigText,
  productBigTextTwo,
  productText,
  productTextTwo,
  productTextThree,
  productTextFour,
}) => {
  return (
    <>
      <section className="shop-category-section">
        <div className="contanier">
          <div className="shop-category-block">
            <div className="shop-category-header">
              <h3 className="shop-head">{sectionHeadText}</h3>
            </div>
            <div className="shop-collection">
              <div className="favorite-collection-section">
                <div className="favorite-collection">
                  <ViewCard
                    customClass={"changeWidth"}
                    viewImg={productBigImg}
                    viewName={productBigText}
                  />
                  <ViewCard
                    customClass={"changeWidth"}
                    viewImg={productBigImgTwo}
                    viewName={productBigTextTwo}
                  />
                </div>
              </div>
              <div className="simple-collection-section">
                <div className="simple-collection-block">
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={productSmallImg}
                    viewName={productText}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={productSmallImgTwo}
                    viewName={productTextTwo}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={productSmallImgThree}
                    viewName={productTextThree}
                  />
                  <ViewCard
                    customClass={"changeGap"}
                    viewImg={productSmallImgFour}
                    viewName={productTextFour}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
