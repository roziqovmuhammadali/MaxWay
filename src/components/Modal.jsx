import React, { useState } from "react";
import RoomIcon from "@mui/icons-material/Room";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState("");
  const [address, setAddress] = useState("");
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [addressList, setAddressList] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDeliveryType = (type) => {
    setDeliveryType(type);
    if (type === "yetkazish") {
      setShowAddressInput(true);
    } else if (type === "olibKetish") {
      setShowAddressInput(false);
      setAddressList([
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
      ]);
    }
  };

  const handleConfirmAddress = () => {
    // Do something with the address
  };

  return (
    <>
      <div className="hidden md:flex items-center gap-5">
        <button className="flex items-center" onClick={openModal}>
          <span className="text-[#735197] hidden lg:flex  w-[40px] h-[40px] rounded-[50%] bg-[#F1EFF4]  items-center justify-center">
            <RoomIcon />{" "}
          </span>
          <div className=" hidden lg:flex lg:text-start pl-1 lg:flex-col  w-[250px]">
            <h3>Yetkazib berish</h3>
            <p className="text-[14px] font-normal text-[#685289]">
              массив Киёт, Юнусабадский район...
            </p>
          </div>
        </button>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[1250px] flex">
            <div className="w-2/3 pr-8">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-xl font-semibold ">
                Qabul qilib olish turini tanlang
              </h1>
              <p className="text-[#727D84] mb-4 font-medium">
                Real vaqt va joylashuvga mos menyuni ko'rish uchun
              </p>
              <div className="flex mb-4">
                <button
                  className="bg-[#F6F4F2] text-[#727D84] rounded-3xl w-[200px] h-[40px] mr-4"
                  onClick={() => handleDeliveryType("yetkazish")}
                >
                  Yetkazib berish
                </button>
                <button
                  className="bg-[#F6F4F2] text-[#727D84] rounded-3xl w-[200px] h-[40px]"
                  onClick={() => handleDeliveryType("olibKetish")}
                >
                  Olib ketish
                </button>
              </div>
              {showAddressInput ? (
                <div>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="w-[500px] border border-gray-300 block rounded-xl px-3 py-2 mb-4"
                  />
                  <button
                    className="bg-[#F6F4F2] disabled:swiper text-[#727D84] rounded-2xl font-medium h-[40px] w-[250px] mb-4"
                    onClick={handleConfirmAddress}
                  >
                    Belgilash
                  </button>
                </div>
              ) : (
                <>
                  {addressList.map((item) => (
                    <div
                      key={item.id}
                      className=" my-10 md:w-[400px] lg:w-[600px] rounded-lg hover:shadow-xl hover:shadow-green-800 h-[180px] bg-white shadow-lg"
                    >
                      <div className="pt-3 px-3 flex md:w-[390px] lg:w-[590px] justify-between">
                        <div>
                          <h2 className="font-bold">{item.name} </h2>
                          <h3 className="max-w-[400px]">{item.subtitr}</h3>
                        </div>
                        <h3 className="pr-3 text-green-400 text-end">
                          {" "}
                          {item.time}
                        </h3>
                      </div>
                      <hr className="mt-4 max-w-[580px] px-3 text-2xl" />
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
                </>
              )}
            </div>
            <div className="w-2/3">
              {/* Placeholder for the map component */}
              <div className="h-[400px] bg-gray-300">
                <div>
                  <div className=" mt-10">
                    <iframe
                      width="100%"
                      height="400"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=520&amp;height=600&amp;hl=en&amp;q=uzbekistab%20,%20tashkent+(MaxWay)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.gps.ie/">gps vehicle tracker</a>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
