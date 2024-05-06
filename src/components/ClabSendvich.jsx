import React from "react";
const maxBox = [
  {
    id: 1,
    title: "Klab sendvich",
    subtitre: "Original sendvich, kartoshka fri, tanlash uchun sous",
    price: "36 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F033adb7c-0289-4f80-a0a9-05fda8e23bc5&w=2048&q=75",
  },
  {
    id: 2,
    title: "Sendvich Original",
    subtitre: "Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...",
    price: "30 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6e75db0d-01c9-47e3-b178-0a2e61cd46fb&w=2048&q=75",
  },
];

const ClabSendvich = () => {
  return (
    <div>
      <div className="sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🥪Klab-Sendvich
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {maxBox.map((item, index) => (
            <div
              key={index}
              className="w-[304px] h-[379px] my-6 shadow-xl rounded-xl py-4 flex flex-col justify-center items-center"
            >
              <img
                src={item.images}
                alt="logo"
                className=" w-full rounded-t-xl "
              />
              <div className="w-full h-full p-4 space-y-3">
                <h1 className=" text-[18px] font-bold">{item.title}</h1>
                <p className="font-normal text-[14px] leading-4 text-[#48535B] w-[256px] h-[17px] ">
                  {item.subtitre}
                </p>
                <div className="flex pb-6 items-center left-0 w-full justify-between space-y-8">
                  <div className="flex pt-7 items-center left-0 gap-1 pr-9">
                    <h1 className="font-bold text-[18px]">{item.price}</h1>
                    <p>so'm</p>
                  </div>
                  <button className="w-[106px] h-[40px] bg-[#51267D] px-[24px] rounded-[20px] text-[14px] font-medium text-white ">
                    Qo'shish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClabSendvich;
