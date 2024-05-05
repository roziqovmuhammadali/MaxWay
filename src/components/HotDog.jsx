import React from "react";

const maxBox = [
  {
    id: 1,
    title: "Hot Dog",
    subtitre: "Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...",
    price: "12 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fd07386d0-4d92-4406-8c47-0ec0ff3123a3&w=1920&q=75",
  },
  {
    id: 2,
    title: "King Dog",
    subtitre: "Hot-dog bulochkasi, 2 ta kanada sosiskasi, tuzlangan bo...",
    price: "20 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F98a353dd-4a8f-4944-b2d6-94d0808cb8ee&w=1920&q=75  ",
  },
  {
    id: 3,
    title: "Chiz dog",
    subtitre: "Hot-dog bulochkasi, kanada sosiskasi, tuzlangan bodri...",
    price: "15 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc52a29e0-98dc-412d-863b-25de7c4f14f8&w=1920&q=75",
  },
  {
    id: 3,
    title: "Longer",
    subtitre: "Hot-dog bulochka,ketchup, mayonez, strips 1 dona, tuzl...",
    price: "15 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9d53b565-b89b-479b-b50d-f63d4b8183ef&w=1920&q=75",
  },
];

const HotDog = () => {
  return (
    <div>
      <div className="sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🌭Hot-Dog
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

export default HotDog;
