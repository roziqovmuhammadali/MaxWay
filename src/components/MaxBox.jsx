import React from "react";

const maxBox = [
  {
    title: "Maxi BOX An'anaviy",
    subtitre: "Original sendvich, kartoshka fri, 0,4 l coca cola, tanl...",
    price: "42 000 ",
    images: "../../public/ananaviy.svg"
  },
  {
    title: "Maxi BOX Taniqli",
    subtitre: "Original lavash, kartoshka fri, 0,4 l coca cola, tanlas...",
    price: "42 000 ",
    images: "../../public/taniqli.svg"
  },
  {
    title: "Maxi BOX Retro",
    subtitre: "Shaurma Original, kartoshka fri, 0,4 l coca cola, tanl...",
    price: "40 000 ",
    images: "../../public/retro.svg"
  },
  {
    title: "Max BOX German",
    subtitre: "Herman Donar , kartoshka fri, 0,4 l coca cola, tanlash ...",
    price: "40 000 ",
    images: "../../public/german.svg"
  },
  {
    title: "Maxi BOX Trend",
    subtitre: "Gamburger, kartoshka fri, 0,4 l coca cola, tanlash uch...",
    price: "38 000 ",
    images: "../../public/maxBox.svg"
  },
  {
    title: "Mini BOX",
    subtitre: "Longer, kartoshka fri, coca-cola 0,3, tanlovga ko'ra so...",
    price: "25 000 ",
    images: "../../public/miniBox.svg"
  }
];

const MaxBox = () => {
  return (
    <div>
      <div className="px-[60px]">
        <h1 className="text-[28px] font-bold leading-8 pb-8 left-0">
          🎉 Aksiya 2+1
        </h1>
        <div className="grid grid-cols-4 space-y-7">
          {maxBox.map((item, index) => (
            <div
              key={index}
              className="w-[304px] h-[379px] shadow-md rounded-md py-4 flex flex-col justify-center items-center">
              <img
                src={item.images}
                alt="logo"
                className="logo w-full h-[210px] rounded-t-xl "
              />
              <div className="w-full h-full p-4 space-y-3">
                <h1 className=" text-[18px] font-bold">{item.title}</h1>
                <p className="font-normal text-[14px] leading-4 text-[#48535B] w-[256px] h-[17px] ">
                  {item.subtitre}
                </p>
                <div className="flex items-center left-0 w-full justify-between space-y-8">
                  <div className="flex items-center left-0 gap-1 pr-9">
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

export default MaxBox;
