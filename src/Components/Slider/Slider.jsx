import React, { useEffect, useState } from "react";
import "../Slider/mainSlider.scss";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ExploreCard } from "../ExploreCard/ExploreCard";
import axios from "axios";
export const Slider = ({ HeaderText }) => {
  const [sliderlist, setSliderList] = useState([]);
  const sliderProductData = () => {
    axios
      .get("http://localhost:3000/HomeProduct")
      .then((res) => setSliderList(res.data));
  };
  useEffect(() => {
    sliderProductData();
  }, []);
  return (
    <>
      <div className="slider-section">
        <div className="contanier">
          <h3 className="head-slide">{HeaderText}</h3>
          <Swiper
            rewind={true}
            slidesPerView={4}
            centeredSlides={false}
            slidesPerGroupSkip={2}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              1200:{
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 4,
              },
              992:{
                slidesPerView:3,
              },
              912:{
                slidesPerView:2
              },
              768:{
                slidesPerView:2
              },
              576:{
                slidesPerView:2
              },
              432:{
                slidesPerView:1,
                navigation: false,
                spaceBetween:"30px"
              },
              375:{
                slidesPerView:1
              },
              360:{
                slidesPerView:1
              }
            }}
            scrollbar={true}
            navigation={true}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
          >
            {sliderlist.map((item) => {
              return (
                <SwiperSlide className="slide" key={item.id}>
                  <ExploreCard
                    productName={item.name}
                    productPrice={item.price}
                    productImg={item.productImage}
                    productId={item.id}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};
