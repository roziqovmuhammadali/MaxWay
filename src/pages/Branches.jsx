import React, { useState } from "react";

const branches = [
  {
    id: 1,
    name: "MAX WAY BERUNIY",
    subtitr: "улица Беруни, 47, Ташкент",
    time: "22:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-22:00",
  },
  {
    id: 2,
    name: "MAX WAY ATLAS",
    subtitr: "улица Катартал, 28, Ташкент",
    time: "22:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-22:00",
  },
  {
    id: 3,
    name: "MAX WAY - DRUJBA",
    subtitr: "микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент",
    time: "04:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-04:00",
  },
  {
    id: 4,
    name: "MAX WAY MEGA PLANET",
    subtitr: "улица Ниязбек, 1",
    time: "23:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-23:00",
  },
  {
    id: 5,
    name: "MAX WAY AVIASOZLAR",
    subtitr: "улица Авиасозлар, 23",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 6,
    name: "MAX WAY RISOVIY",
    subtitr: "Узбекистан, Ташкент, Алтынкульская улица, 10",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 7,
    name: "MAX WAY PARUS",
    subtitr: "улица Катартал, 60/5",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 8,
    name: "MAX WAY MAGIC CITY",
    subtitr: "Узбекистан, Ташкент, улица Бабура, 174/6",
    time: "22:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-22:00",
  },
  {
    id: 9,
    name: "MAX WAY SAMARQAND DARVOZA",
    subtitr: "Узбекистан, Ташкент, улица Коратош, 5А",
    time: "22:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-22:00",
  },
  {
    id: 10,
    name: "MAX WAY PARKENT",
    subtitr:
      "Узбекистан, Ташкент, Яшнободский район, массив Мавлоно Риёзи, 30В",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 11,
    name: "MAX WAY UNIVERSAM",
    subtitr: "Узбекистан, Ташкент, проспект Амира Темура, 41/3",
    time: "23:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-23:00",
  },
  {
    id: 12,
    name: "MAX WAY ROYSON",
    subtitr: "Узбекистан, Ташкент, улица Заркайнар, 2",
    time: "01:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-01:00",
  },
  {
    id: 13,
    name: "MAX WAY NEXT",
    subtitr: "Узбекистан, Ташкент, улица Бабура, 6",
    time: "22:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-22:00",
  },
  {
    id: 14,
    name: "MAX WAY MUQUMIY",
    subtitr: "Узбекистан, Ташкент, улица Чиланзар",
    time: "04:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-04:00",
  },
  {
    id: 15,
    name: "MAX WAY GRAND MIR",
    subtitr: "Узбекистан, Ташкент, улица Шота Руставели, 9А",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 16,
    name: "MAX WAY SAYRAM",
    subtitr: "Узбекистан, Ташкент, улица Юнусота",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 17,
    name: "MAX WAY MAKSIM GORKIY",
    subtitr: "махалля Элобод",
    time: "01:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-01:00",
  },
  {
    id: 18,
    name: "MAX WAY SERGELI",
    subtitr:
      "Узбекистан, Ташкент, Сергелийский район, массив Сергели-VIIIА, 11",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 19,
    name: "MAX WAY FONTAN",
    subtitr: "проспект Амира Темура",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
  {
    id: 20,
    name: "MAX WAY MINOR",
    subtitr: "MaxWay",
    time: "03:00 gacha ochiq",
    phone: "+998712005400",
    endTime: "Du-Yak: 10:00-03:00",
  },
];

const Branches = () => {
  const [step, setStep] = useState(1);
  const increment = () => {
    setStep((prev) => prev + 1);
  };

  const decrement = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="px-20">
      <div className=" flex justify-between  mt-16 ">
        <h2 className=" font-bold text-3xl"> Filiallar</h2>
        <div className=" flex gap-5 pr-40">
          <button
            onClick={decrement}
            className=" font-medium border w-[130px] h-[42px] rounded-3xl bg-[#51267D] text-white hover:text-[#485360] hover:bg-[#F1EFF4]"
          >
            Ro'yhat
          </button>
          <button
            onClick={increment}
            className=" font-medium w-[130px] text-[#485360] bg-[#F1EFF4] h-[42px] rounded-3xl hover:bg-[#51267D] hover:text-white"
          >
            Xarita
          </button>
        </div>
      </div>
      {step === 1 && (
        <div>
          {branches.map((item) => (
            <div
              key={item.id}
              className=" my-10 w-[600px] rounded-lg hover:shadow-xl hover:shadow-green-800 h-[180px] bg-white shadow-lg"
            >
              <div className="pt-3 px-3 flex w-[590px] justify-between">
                <div>
                  <h2 className="font-bold">{item.name} </h2>
                  <h3 className="w-[400px]">{item.subtitr}</h3>
                </div>
                <h3 className="pr-3 text-green-400 text-end"> {item.time}</h3>
              </div>
              <hr className="mt-4 w-[580px] px-3 text-2xl" />
              <div className="flex justify-between mt-5 px-5">
                <div>
                  <h2 className="font-medium">Ish vaqti:</h2>
                  <h2>{item.endTime}</h2>
                </div>
                <div>
                  <h2 className="font-medium">Telefon:</h2>
                  <h2>+998712005400</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className=" mt-10">
          <iframe
            width="1250"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=520&amp;height=600&amp;hl=en&amp;q=uzbekistab%20,%20tashkent+(MaxWay)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      )}
    </div>
  );
};

export default Branches;
