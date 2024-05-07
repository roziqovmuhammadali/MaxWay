import React, { useState } from "react";

const Basket = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
    if (count >= 10) {
      setCount(10);
    }
  };

  const decrement = () => {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  };

  return (
    <div className="py-10 w-full px-[10px] sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px] ">
      <h1 className="lg:text-[38px] text-[25px] md:text-[32px] font-bold my-8">
        Savatcha
      </h1>
      <div className="flex gap-16">
        <div className="w-[65%]">
          <div className=" mb-10 w-[800px] flex items-center border rounded-lg hover:shadow-lg hover:shadow-slate-800 h-[150px] bg-white shadow-lg">
            <div className="pt-3 px-3 flex w-[900px] items-center gap-2">
              <div>
                <img
                  src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe876e478-efea-4992-a7ab-0b5cdb650582&w=2048&q=75"
                  alt="logo"
                  className="w-[85px] h-[75px] rounded-xl"
                />
              </div>
              <h3 className="pr-3 font-medium">Kraft packet </h3>
            </div>

            <div className="flex justify-between mt-5 px-5 items-center w-[450px]">
              <div className="w-[120px] h-10 border-2 flex items-center justify-center rounded-3xl gap-7">
                <button className="font-bold text-[25px]" onClick={decrement}>
                  -
                </button>
                <h2 className="font-medium text-[19px]">{count}</h2>
                <button className="font-bold text-[25px]" onClick={increment}>
                  +
                </button>
              </div>

              <h2 className="font-medium text-[19px]">2000 so'm</h2>
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <div className="py-8 w-[420px] h-[280px] flex flex-col justify-center rounded-3xl border">
            <div className="p-3 space-y-2">
              <h1 className="text-[22px] font-bold">Umumiy</h1>
              <div className="space-y-5 ">
                <div className="w-full text-[17px] flex items-center justify-between font-normal">
                  <p>Mahsulotlar</p>
                  <p>2000 so'm</p>
                </div>
                <div className="w-full text-[17px] flex items-center justify-between font-normal">
                  <p>Yetkazib berish</p>
                  <p>0 so'm</p>
                </div>
                <hr />
                <div className="w-full text-[17px] flex items-center justify-between font-normal">
                  <p>To'lash uchun</p>
                  <p>2000 so'm</p>
                </div>
                <button className="w-full flex items-center justify-center font-medium text-white bg-[#51267D] rounded-3xl h-12">
                  To'lov sahifasiga o'tish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
