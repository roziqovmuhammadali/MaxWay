import React from "react";

const maxBox = [
  {
    id: 1,
    title: "Fri kartoshkasi",
    price: "9 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe302183c-5e83-4267-b6ff-ceb35c0ae15b&w=1920&q=75",
  },
  {
    id: 2,
    title: "Kraft packet",
    price: "2 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe876e478-efea-4992-a7ab-0b5cdb650582&w=1920&q=75",
  },
  {
    id: 3,
    title: "BOX",
    subtitre: "Strips (2 dona), kartoshka fri (80 gr), naggetslar (4 d...",
    price: "22 000",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fa35994b6-f935-4a0a-beaa-ec4d7e3a3f80&w=1920&q=75",
  },
  {
    id: 4,
    title: "Strips",
    price: "17 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F34e38634-2c04-4f43-8e7b-199f4feac105&w=1920&q=75",
  },
  {
    id: 5,
    title: "Naggets",
    price: "15 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F47744188-6d4a-48f8-9038-2341cfe15437&w=1920&q=75",
  },
  {
    id: 6,
    title: "Po derevenski",
    price: "25 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F5e891d3c-4b71-4282-b9e4-ca1f8c504e3e&w=1920&q=75",
  },
];

const Gazaklar = () => {
  return (
    <div>
      <div className="sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🍟Gazaklar
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {maxBox.map((item, index) => (
            <div
              key={index}
              className="w-[304px] h-[379px] shadow-xl my-6 rounded-xl py-4 flex flex-col justify-center items-center"
            >
              <img
                src={item.images}
                alt="logo"
                className="w-full h-[304px] rounded-t-xl "
              />
              <div className="w-full h-full p-4 space-y-3">
                <h1 className=" text-[18px] font-bold">{item.title}</h1>
                <p className="font-normal text-[14px] leading-4 text-[#48535B] w-[256px] h-[17px] ">
                  {item.subtitre}
                </p>
                <div className="flex pb-6 items-center left-0 w-full justify-between space-y-8">
                  <div className="flex pt-7 items-center left-0 gap-1 pr-9">
                    <h1 className="font-bold text-[18px]">{item.price} </h1>
                    <p> so'm</p>
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

export default Gazaklar;
