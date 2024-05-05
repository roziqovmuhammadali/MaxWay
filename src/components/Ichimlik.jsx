import React from "react";

const maxBox = [
  {
    id: 1,
    title: "Coca Cola (quyma)",
    price: "7 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F91f72331-571c-45b8-9745-b2b961ed5e0d&w=1920&q=75",
  },
  {
    id: 2,
    title: "Coca Cola",
    price: "5 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Feefc67f4-9e14-4635-a174-4c5c6483744f&w=1920&q=75",
  },
  {
    id: 3,
    title: "Fanta",
    price: "5 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9ebe8f81-c8cf-44da-9f62-8f65a65f4c3a&w=1920&q=75",
  },
  {
    id: 4,
    title: "Sharbat Dena",
    price: "5 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F58c745c9-cf0c-442a-a6d9-963e5aabc362&w=1920&q=75",
  },
  {
    id: 5,
    title: "Fuse tea",
    price: "10 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4af4d45b-6a1e-4e9c-976a-7cd5348d7efc&w=1920&q=75",
  },
  {
    id: 6,
    title: "Bonaqua",
    price: "5 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F1a92d0aa-a6fa-4c8d-90e6-811c8fb9af17&w=1920&q=75",
  },
  {
    id: 7,
    title: "Bir martali stakan",
    price: "1 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fbb5aa888-f006-4d52-aac6-38949456569e&w=1920&q=75",
  },
  {
    id: 8,
    title: "Qora choy",
    subtitre: "Qora choy (ta’bga kora shakar)",
    price: "5 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F3ae92eaf-c56e-4db7-9c5b-f658bc595144&w=1920&q=75",
  },
  {
    id: 9,
    title: "Ko'k choy",
    subtitre: "Ko’k choy (ta’bga kora shakar)",
    price: "5 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F3ae92eaf-c56e-4db7-9c5b-f658bc595144&w=1920&q=75",
  },
  {
    id: 10,
    title: "Limonli choy",
    subtitre: "Limonli choy (ta’bga ko'rish uchun shakar)",
    price: "7 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F50ef85c7-5056-4842-8459-b5e4fb3ec402&w=1920&q=75",
  },
  {
    id: 11,
    title: "Amerikano",
    subtitre: "Tabiiy donli qahva (espresso, suv)",
    price: "12 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9694f4fa-3a77-4fa8-ac41-aec0afca592d&w=1920&q=75",
  },
  {
    id: 12,
    title: "Kapuchino",
    subtitre: "Tabiiy donli qahva (espresso, sut, suv)",
    price: "14 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F063c6ddf-77ed-4de8-b582-272239e0b3a7&w=1920&q=75",
  },
  {
    id: 13,
    title: "Latte",
    subtitre: "Tabiiy donli qahva (espresso, sut, suv)",
    price: "14 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F3c6acdc6-488a-46dd-877d-14143d416851&w=1920&q=75",
  },
];

const Ichimlik = () => {
  return (
    <div>
      <div className="sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🍟🍔🥤Maxi BOX
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

export default Ichimlik;
