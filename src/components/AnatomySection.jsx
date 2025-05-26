import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { LuScanSearch } from "react-icons/lu";
import human2 from "../assets/human2.png";
import teeth from "../assets/teeth.png";
import bone from "../assets/bone.png";
import lungs from "../assets/lungs.png";
import HealthStatusCards from "./HealthStatusCards";
import ActivityGraph from "./ActivityGraph";
import { healthStatus } from "../data/healthData";

const AnatomySection = () => {
  return (
    <div className="p-5">
      <div className="w-full flex my-3 justify-between">
        <h1 className="text-2xl font-bold text-[#110F67]">Dashboard</h1>
        <div className="flex items-center gap-1 cursor-pointer text-[#3E34D3]">
          <span className="text-sm">This Week</span>
          <span>
            <IoChevronDown size={16} />
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 md:gap-14 ">
        <div className="p-3 rounded-2xl bg-[#E4EDFB] relative">
          <span className="text-[#9E9EA7] absolute top-5 right-5">
            <LuScanSearch size={25} />
          </span>
          <span className="text-white px-3 py-2 rounded-lg bg-[#3E34D3] text-sm absolute top-28 right-2">
            ❤️ Healthy heart
          </span>
          <img
            src={human2}
            alt="human-anatomy"
            className="max-w-full h-full object-contain"
          />
          <span className="text-white px-3 py-2 rounded-lg bg-[#44B8CB] text-sm absolute bottom-28 left-4">
            🦵 Healthy legs
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {healthStatus.map((health) => (
            <HealthStatusCards
              key={health.id}
              name={health.name}
              image={health.image}
              date={health.date}
              className={health.className}
            />
          ))}
        </div>
      </div>
      <ActivityGraph />
    </div>
  );
};

export default AnatomySection;
