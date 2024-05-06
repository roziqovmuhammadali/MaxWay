import React from "react";

const Hero = () => {
  fetch("https://66349ced9bb0df2359a218d1.mockapi.io/products", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return console.log(res.json());
      }

      // handle error
    })
    .then((tasks) => {
      // Do something with the list of tasks
    })
    .catch((error) => {
      // handle error
    });

  return (
    <div className="sm:px-[20px] md:px-[40px] lg:px-[60px] xl:px-[120px]">
      <h1 className="text-[28px] font-bold leading-8 pb-8 left-0">
        🎉 Aksiya German Donar + Cola 0,4 L
      </h1>
      <div className="w-[304px] h-[379px] shadow-xl rounded-xl py-4 flex flex-col justify-center items-center">
        <img
          src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc0cfa11d-4645-4314-9ab2-59af710ced4f&w=2048&q=75"
          alt="logo"
          className="w-full h-[230px] rounded-t-xl "
        />
        <div className="w-full h-full p-4 space-y-3">
          <h1 className=" text-[18px] font-bold">German Donar + Cola 0,4L</h1>
          <p className="font-normal text-[14px] leading-4 text-[#48535B] w-[256px] h-[17px] ">
            Endi German Donarga buyurtma berganingizda, siz butunl...
          </p>
          <div className="flex items-center pb-6 left-0 w-full justify-between space-y-8">
            <div className="flex pt-7 items-center left-0 gap-1 pr-9">
              <h1 className="font-bold text-[18px]">30 000 </h1>
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
