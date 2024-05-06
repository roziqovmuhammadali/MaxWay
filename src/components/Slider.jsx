import React from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
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
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        pagination={{
          clickable: true,
          className: "swiper-pagination-bullet",
        }}
      >
        <SwiperSlide className="flex items-center justify-center w-full ">
          <img
            src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fceefc9aa-89e1-4464-9415-7cabc48a65d1&w=1200&q=75"
            alt="img"
            className=" h-full w-[80%] rounded-3xl"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full ">
          <img
            src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feedc6ad0-1c3c-40fb-a3f2-15b807b7ed30&w=1200&q=75"
            alt="img"
            className="h-full w-[80%] rounded-3xl"
          />
        </SwiperSlide>
      </Swiper>
      <div></div>
    </div>
  );
};

export default Slider;
