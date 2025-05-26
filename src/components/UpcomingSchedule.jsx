import React from 'react'
import SimpleAppointmentCard from './SimpleAppointmentCard'

const UpcomingSchedule = () => {
  return (
    <div className='w-full'>
      <h1 className='text-xl font-semibold text-[#110F67]'>The Upcoming Schedule</h1>
      <div className='mt-8'>
        <p className='text-base text-[#717179] mb-1'>On Thursday</p>
        <div className="w-full grid grid-cols-[1fr_1fr] md:grid-cols-[3fr_2fr] gap-4">
        <SimpleAppointmentCard title={'Health checkup complete'} image={'👍'} duration={'11:00 AM'} className={'bg-[#cad7ee] text-[#110F67]'}/>
        <SimpleAppointmentCard title={'Opthalmologist'} image={'👁️'} duration={'14:00 PM'} className={'bg-[#cad7ee] text-[#110F67]'}/>
        </div>

         <p className='text-base text-[#717179] mb-1 mt-10'>On Saturday</p>
        <div className="w-full grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_2fr_2fr] gap-4">
        <SimpleAppointmentCard title={'Cardiologist'} image={'❤️'} duration={'12:00 PM'} className={'bg-[#cad7ee] text-[#110F67]'}/>
        <SimpleAppointmentCard title={'Neurologist'} image={'🧠'} duration={'16:00 PM'} className={'bg-[#cad7ee] text-[#110F67]'}/>
        </div>

      </div>
    </div>
  )
}

export default UpcomingSchedule