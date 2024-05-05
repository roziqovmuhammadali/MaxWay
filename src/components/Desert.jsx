import React from "react";

const maxBox = [
  {
    id: 1,
    title: "Tiramisu",
    subtitre: "Savoyardi pechene, mascarpone, qahva",
    price: "22 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fdd3eb9ef-b9e6-48ac-824a-66cfd0f39913&w=1920&q=75"
  },
  {
    id: 2,
    title: "Qulupnayli donat",
    price: "16 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F49e2f3af-66e9-46de-8646-5433e5dfb9af&w=1920&q=75"
  },
  {
    id: 3,
    title: "Karamel donat",
    price: "16 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fb8b5b8f1-f169-4b8e-8c0d-4e078617bb7d&w=1920&q=75"
  },
  {
    id: 4,
    title: "Yo'ng'oqli donat",
    price: "16 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe10a89fe-5795-4d83-85ca-9eea113dc547&w=1920&q=75"
  },
  {
    id: 5,
    title: "Brauni",
    subtitre: "Qora shokolad, yong'oq va shokoladli pechene",
    price: "22 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Febf7f8ee-0181-4294-9be8-f9241e3cff08&w=1920&q=75"
  },
  {
    id: 6,
    title: "San-sebastian",
    subtitre: "Savoyardi kukilari, mascarpone, kahva",
    price: "22 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1ae33c55-cbd8-4d0a-b9a6-6a7624beca32&w=1920&q=75"
  }
];

const Desert = () => {
  return (
    <div>
      <div className="px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🍰Desertlar
        </h1>
        <div className="grid grid-cols-4  gap-6">
          {maxBox.map((item, index) => (
            <div
              key={index}
              className="w-[304px] h-[379px] shadow-xl my-6 rounded-xl py-4 flex flex-col justify-center items-center">
              <img
                src={item.images}
                alt="logo"
                className="w-full rounded-t-xl "
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

export default Desert;
