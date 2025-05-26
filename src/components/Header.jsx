import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { GoBellFill } from "react-icons/go";

import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

const Header = ({ open, setOpen }) => {
  return (
    <div className="w-full sticky top-0 z-40 bg-white px-5 md:px-0">
      <div className="w-full md:pl-5 py-2 md:py-0 flex items-center justify-between md:justify-start ">
        <div
          className="md:hidden p-1 border rounded-md cursor-pointer transition transform active:scale-90"
          onClick={() => setOpen(!open)}
        >
          <span className=" text-gray-800 ">
            <IoMenuOutline size={25} />
          </span>
        </div>

        <div className="md:w-full">
          <div className="w-full flex items-center justify-between">
           <div className="md:flex-1 bg-white md:px-5 md:pt-12">
             <div className="w-full max-w-xl flex items-center gap-3">
              <div className="hidden w-full p-[10px] rounded-xl border outline-none md:flex items-center leading-3 gap-4">
                <span className="text-[#110F67]">
                  <RiSearchLine size={20} />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border-none outline-none"
                />
              </div>
              <span className="text-gray-500 md:hidden">
                <IoSearchOutline size={22} />
              </span>
              <button className="p-2 text-[#3E34D3] rounded-lg border outline-none cursor-pointer transition-none transform active:scale-90">
                <GoBellFill size={24} />
              </button>
            </div>
           </div>
            <div className="hidden md:block md:flex-1 bg-[#E4EDFB] pb-3 md:pt-10 pr-12">
              <div className="md:flex items-center justify-end gap-3">
                <span className="cursor-pointer text-xl bg-[#44B8CB] p-1 rounded-lg border transition transform active:scale-90">
                  🙎
                </span>
                <span className="cursor-pointer p-2 bg-[#110F67] text-white rounded-lg border transition transform active:scale-90">
                  <AiOutlinePlus size={19} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
