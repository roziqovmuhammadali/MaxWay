import React from "react";

const sous = [
  {
    id: 1,
    title: "Ketchup",
    price: "3 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7602a40e-d2ee-495e-8543-1a505f97fc21&w=3840&q=75",
  },
  {
    id: 2,
    title: "Pishloqli sous",
    price: "3 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F09d6df13-155c-4371-9189-87402a4c2c3f&w=3840&q=75",
  },
  {
    id: 3,
    title: "Sarimsoqli sous",
    price: "3 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ff8fd90f1-d947-491c-acdd-a7b67c3de2eb&w=3840&q=75",
  },
  {
    id: 4,
    title: "Xalapeno",
    price: "3 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6019580b-7f23-462f-befc-3fcf2e211d0c&w=3840&q=75",
  },
  {
    id: 5,
    title: "Shirin va nordon sous",
    price: "3 000 ",
    images:
      "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F986269d6-7f60-4424-a2dc-a6640d00fca4&w=3840&q=75",
  },
];

const Souss = () => {
  return (
    <div>
      <div className="sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🥫Souslar
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {sous.map((item, index) => (
            <div
              key={index}
              className="w-[304px] h-[349px] shadow-xl my-6 rounded-xl py-1 flex flex-col justify-center items-center"
            >
              <img
                src={item.images}
                alt="logo"
                className="w-full rounded-t-xl "
              />
              <div className="w-full h-full p-4">
                <h1 className=" text-[18px] font-bold">{item.title}</h1>

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

export default Souss;
