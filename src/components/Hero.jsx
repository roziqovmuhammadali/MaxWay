import React from "react";
import aksiyon from "../../public/aksiya.svg";
const Hero = () => {
  return (
    <div className="px-[60px]">
      <h1 className="text-[28px] font-bold leading-8 pb-8 left-0">
        🎉 Aksiya 2+1
      </h1>
      <div className="w-[304px] h-[379px] shadow-md rounded-md py-4 flex flex-col justify-center items-center">
        <img
          src={aksiyon}
          alt="logo"
          className="logo w-full h-[220px] rounded-t-xl "
        />
        <div className="w-full h-full p-4 space-y-3">
          <h1 className=" text-[18px] font-bold">Sendvich 2+1</h1>
          <p className="font-normal text-[14px] leading-4 text-[#48535B] w-[256px] h-[17px] ">
            Narx 2ta maxsulot uchun ko'rsatilgan-uchinchi mahsulot ...
          </p>
          <div className="flex items-center left-0 w-full justify-between space-y-8">
            <div className="flex items-center left-0 gap-1 pr-9">
              <h1 className="font-bold text-[18px]">60 000 </h1>
              <p>so'm</p>
            </div>
            <button className="w-[106px] h-[40px] bg-[#51267D] px-[24px] rounded-[20px] text-[14px] font-medium text-white ">
              Qo'shish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
