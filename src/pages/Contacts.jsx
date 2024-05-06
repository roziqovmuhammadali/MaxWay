import React from "react";
import shtrixcode from "../../public/shtrixcode.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";
import EmailForm from "../components/EmailForm";
const Contacts = () => {
  return (
    <div className="px-[10px] sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px] py-10 space-y-2">
      <h1 className="lg:text-[38px] text-[25px] md:text-[32px] font-bold">
        Bog'lanish
      </h1>
      <div className="py-8 w-[320px] h-[280px] flex flex-col justify-center rounded-3xl bg-[#96B1C2]">
        <div className="p-10 space-y-2">
          <img src={shtrixcode} alt="logo" />
          <h1 className="text-[18px] text-white font-bold">
            Telegramda sharh <br /> qoldiring yoki savol bering
          </h1>
          <p className="text-white font-medium">
            <TelegramIcon />
            <Link to="https://t.me/maxwaymasterfood_bot">
              @maxwaymasterfood_bot
            </Link>
          </p>
        </div>
      </div>
      <p className="lg:text-[21px] text-[12px] md:text-[16px] font-bold text-[#000000]">
        Yagona aloqa markazi
      </p>
      <p className="lg:text-[18px] text-[12px] md:text-[16px]">+998712005400</p>
    </div>
  );
};

export default Contacts;
