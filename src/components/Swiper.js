import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";

// import "./styles.css";
import SwiperCore, { Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function Slider(props) {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        allowTouchMove={false}
        simulateTouch={false}
        speed={1500}
        autoplay={{
          delay: props.delay,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        className=""
      >
        {props.images.map((img, i) => (
          <SwiperSlide>
            <img key={i} src={img} className="swiper-img psychic" />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
