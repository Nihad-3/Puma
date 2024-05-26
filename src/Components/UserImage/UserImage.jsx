import React, { useEffect, useState } from "react";
import "../UserImage/mainUserImage.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Grid, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";
export const UserImage = () => {
  const [userImageData, setUserImageData] = useState([]);
  const getUserImageData = () => {
    axios
      .get("http://localhost:3000/PumaUserImage")
      .then((res) => setUserImageData(res.data));
  };
  useEffect(() => {
    getUserImageData();
  }, []);
  console.log(userImageData);
  return (
    <>
      <section className="user-image-header">
        <div className="contanier">
          <div className="user-image-header-block">
            <h3 className="user-image-header-block-head">AS WORN BY YOU</h3>
            <p className="user-image-header-block-par">
              Mention @puma on Instagram
            </p>
            <Link className="user-image-header-block-link">ADD YOUR PHOTO</Link>
          </div>
        </div>
      </section>
      <section className="user-image-section">
        <div className="contanier">
          <div className="user-image-block">
            <Swiper
              slidesPerView={5}
              grid={{
                rows: 2,
              }}
              breakpoints={{
                1200:{
                  slidesPerView:4
                },
                1024:{
                  slidesPerView:4,
                },
                992:{
                  slidesPerView:3,
                },
                912:{
                  slidesPerView:3,
                },
                768:{
                  slidesPerView:3,
                },
                576:{
                  slidesPerView: 2,
                },
                432:{
                  slidesPerView: 2,
                },
                375:{
                  slidesPerView:2
                },
                360:{
                  slidesPerView:2
                }
              }}
              spaceBetween={20}
              rewind={true}
              navigation={true}
              modules={[Grid, Pagination, Navigation]}
              className="myUserImageSwiper"
            >
              {userImageData.map((item) => {
                return (
                  <SwiperSlide
                    key={item.pumaUserImageID}
                    className="myUserImageSlider"
                  >
                    <img src={item.pumaUserImage} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
