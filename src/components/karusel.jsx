import React from "react";

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

const Slider2 = () => {
  return (
    <div className="h-20 flex items-center justify-center px-[120px]">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade
        ]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          className: "swiper-pagination-bullet"
        }}>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center rounded-lg">
            <div className="h-full text-black rounded-lg w-[240px]">
              <p className="text-[15px] font-bold">🎉 Aksiya 2+1</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center rounded-lg">
            <div className="h-full rounded-lg w-[240px]">
              <p className="text-[15px] font-bold">🍟🍔🥤Maxi BOX</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center rounded-lg">
            <div className="h-full rounded-lg w-[240px]">
              <p className="text-[15px] font-bold">🥪Klab-Sendvich</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center rounded-lg">
            <div className="h-full rounded-lg w-[120px]">
              <p className="text-[15px] font-bold">🌯Lavash</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center rounded-lg">
            <div className="h-full rounded-lg w-[120px]">
              <p className="text-[15px] font-bold">🌮Shaurma</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center">
            <div className="h-full rounded-lg w-[120px]">
              <p className="text-[15px] font-bold">🫔Panini</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center">
            <div className="h-full rounded-lg w-[120px]">
              <p className="text-[15px] font-bold">🍔Burger</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[30px] w-full items-center">
            <div className="h-full rounded-lg w-[120px]">
              <p className="text-[15px] font-bold">🍱Donar kebab</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
