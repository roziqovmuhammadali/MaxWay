import React from "react";
import header from "../../public/headerimg.svg";
import header2 from "../../public/header2.svg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// Import Swiper styles
const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade
        ]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          className: "swiper-pagination-bullet"
        }}>
        <SwiperSlide className="flex items-center justify-center w-full ">
          <img src={header} alt="img" className=" h-full w-[80%] rounded-3xl" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full ">
          <img src={header2} alt="img" className="h-full w-[80%] rounded-3xl" />
        </SwiperSlide>
      </Swiper>
      <div></div>
    </div>
  );
};

export default Slider;
