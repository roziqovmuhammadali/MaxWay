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
        <SwiperSlide>
          <div className="flex h-[600px] w-full items-center rounded-lg justify-between px-[80px]">
            <div className="h-full w-[100%]">
              <img
                src={header}
                alt="img"
                className=" h-full w-full rounded-lg"
              />
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[600px] w-full items-center rounded-lg justify-between px-[80px]">
            <div className="h-full rounded-lg w-[100%]">
              <img src={header2} alt="img" className=" h-full w-full " />
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
