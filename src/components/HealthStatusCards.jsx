import React from 'react'


const HealthStatusCards = ({name,image,date, className}) => {
  return (
    <div className='grid grid-cols-1 gap-5 items-center'>
      <div className='p-4 rounded-2xl bg-[#E4EDFB]'>
        <div className='flex items-center gap-2'>
          <img src={image} alt="teeth" className='w-14 object-contain' />
          <h2 className='text-xl font-bold text-[#110F67]'>{name}</h2>
        </div>
        <p className='text-sm text-[#9E9EA7] mt-3 mb-4'>Date: {date}</p>
        <div className='w-full rounded-full h-2.5 bg-[#cdcdce] relative'>
          <div className={`h-2.5 rounded-full ${className}`}></div>
        </div>
      </div>
    </div>
  )
}

export default HealthStatusCards