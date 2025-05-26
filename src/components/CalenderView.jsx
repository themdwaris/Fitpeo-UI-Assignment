import React from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { calenderData } from "../data/calendarData";

const CalenderView = () => {
  return (
    <div className="w-full p-5">
      <div className="w-full flex items-center justify-between mb-10">
        <span className="text-base font-bold text-[#110F67]">October 2021</span>
        <div className="flex items-center text-[#110F67] md:pr-10">
          <span className="cursor-pointer">
            <RiArrowLeftSFill size={25} />
          </span>
          <span className="cursor-pointer">
            <RiArrowRightSFill size={25} />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-7 text-[#110F67]">
        {calenderData.map((cal, index) => (
          <div
            key={index}
            className={`flex flex-col cursor-pointer sm: gap-2 md:gap-3 lg:gap-5 items-center py-3 sm:p-2 md:p-4 rounded-2xl ${
              index === 1 && "bg-[#ccdefc]"
            } hover:bg-[#ccdefc]`}
          >
            <span className="text-sm font-semibold">{cal.day}</span>
            <span className="text-xl font-bold">{cal.date}</span>
            <div className="flex flex-col gap-5 text-sm font-semibold justify-center items-center ">
              {cal.timeSlot.map((slot, index) =>
                slot === "" ? (
                  <span
                    key={index}
                    className="block h-[1px] w-6 bg-[#9E9EA7]"
                  ></span>
                ) : (
                  <span key={index}>{slot}</span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalenderView;
