import React from "react";

const maxBox = [
  {
    id: 1,
    title: "Donar Kebab",
    subtitre: "Mol go'shti donari-go'sht, makkajo'xori bilan guruch, k...",
    price: "42 000 ",
    images: "../../public/kebab.svg",
  },
  {
    id: 2,
    title: "Donar Box",
    subtitre: "Mol go'shti donari-go'sht, kartoshka fri, guruch, ranch...",
    price: "37 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F0521a96c-da75-40b4-825e-31f1fb6640d3&w=1920&q=75",
  },
  {
    id: 3,
    title: "Non",
    subtitre: "Yumshoq bulochka",
    price: "30 000 ",
    images: "../../public/non.svg",
  },
];

const DonarKabab = () => {
  return (
    <div>
      <div className="sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🍱Donar Kebab
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

export default DonarKabab;
