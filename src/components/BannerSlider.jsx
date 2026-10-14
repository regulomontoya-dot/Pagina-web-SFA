import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

import banner1 from "../assets/images/banner/banner1.jpg";
import banner2 from "../assets/images/banner/banner2.jpg";
import banner3 from "../assets/images/banner/banner1.jpg";

const BannerSlider = () => {
  return (
    <section className="banner-slider">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            <img src={banner1} alt="Banner 1" className="banner-img" />
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={banner2} alt="Banner 2" className="banner-img" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={banner3} alt="Banner 2" className="banner-img" />
            
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSlider;

