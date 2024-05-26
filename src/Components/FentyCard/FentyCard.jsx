import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "../FentyCard/mainfentycard.scss";
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
export const FentyCard = ({
  price,
  name,
  id,
  productImage,
  productImageTwo,
  productImageThree,
  productImageFour,
  productImageFive,
  productImageSix,
  customClass
}) => {
  return (
    <>
      <Link to={`/product/:${id}`} className={`fenty-link ${customClass}`} key={id}>
        <div className="fenty-card">
          <div className="slider-block">
            <Swiper
              rewind={true}
              slidesPerView={1}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              scrollbar={true}
              navigation={true}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              className="FentySwiper"
            >
              <SwiperSlide className="fenty-slide">
                <img src={productImage} />
              </SwiperSlide>
              <SwiperSlide className="fenty-slide">
                <img src={productImageTwo} />
              </SwiperSlide>
              <SwiperSlide className="fenty-slide">
                <img src={productImageThree} />
              </SwiperSlide>
              <SwiperSlide className="fenty-slide">
                <img src={productImageFour} />
              </SwiperSlide>
              <SwiperSlide className="fenty-slide">
                <img src={productImageFive} />
              </SwiperSlide>
              <SwiperSlide className="fenty-slide">
                <img src={productImageSix} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="fenty-info-block">
            <div className="price-block">
              <h3>{name}</h3>
              <p>${price}</p>
            </div>
            <p className="new-par">NEW</p>
            <div className="star-block">
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
              <MdOutlineStar className="star-icon" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
