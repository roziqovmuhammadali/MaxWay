import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between shadow-sm px-[96px] h-[80px] w-full">
        <div className="flex items-center gap-7 ">
          <button className="w-[30px] h-[30px] rounded-[50%]">
            <FaChevronLeft />
          </button>

          <ul className="flex items-center justify-center gap-6">
            <li>Menyu</li>
            <li>Filiallar</li>
            <li>Biz haqimizda</li>
            <li>Bog'lanish</li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-9">
          <button className="w-[210px] h-[40px] rounded-lg bg-[#F1EFF4] flex items-center justify-center gap-1">
            <CiLocationOn />
            <div className="text-[12px]">Yetkazib berish yoki Olib ketish</div>
          </button>
          <div>
            <button className="w-[30px] h-[30px] rounded-[50%]">
              <FaChevronRight />
            </button>
          </div>
          <div>
            <button className="w-[30px] h-[30px] rounded-[50%] bg-[#F1EFF4] flex items-center justify-center">
              <FaCartShopping />
            </button>
          </div>
          <div>
            <button className="w-[30px] h-[30px] rounded-[50%] bg-[#F1EFF4] flex items-center justify-center">
              <FaUser />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
