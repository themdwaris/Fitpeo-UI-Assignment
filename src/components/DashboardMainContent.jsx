import React from "react";

import AnatomySection from "./AnatomySection";
import CalenderView from "./CalenderView";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import teeth from "../assets/teeth.png"
import lungs from "../assets/lungs.png"
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-3">
      <AnatomySection />

      <div className="w-full bg-[#E4EDFB] pb-10">
        <CalenderView />
        <div className="px-5 mt-6">
          <div className="w-full grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_3fr] gap-4">
            <SimpleAppointmentCard title={'Dentist'} image={'🦷'} duration={'09:00-11:00'} doctor={'Dr. Cameron Williamsom'} className="text-white bg-[#3E34D3]"/>
             <SimpleAppointmentCard title={'Physiotherapy Appointment'} image={'🫁'} duration={'12:00-01:00'} doctor={'Dr. Cameron Williamsom'} className="bg-[#B6C9EB] text-[#110F67]"/>
          </div>
          <div className="mt-7">
            <UpcomingSchedule/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
