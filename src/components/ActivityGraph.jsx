import React from 'react';

const activityData = {
  Mon: ['h-20 bg-gray-300', 'h-24 bg-cyan-400', 'h-16 bg-indigo-500'],
  Tues: ['h-28 bg-cyan-400', 'h-16 bg-gray-300', 'h-10 bg-indigo-500'],
  Wed: ['h-24 bg-gray-300', 'h-20 bg-cyan-400', 'h-14 bg-indigo-500'],
  Thurs: ['h-24 bg-gray-300', 'h-20 bg-cyan-400', 'h-10 bg-indigo-500'],
  Fri: ['h-28 bg-cyan-400', 'h-16 bg-gray-300', 'h-14 bg-indigo-500'],
  Sat: ['h-24 bg-gray-300', 'h-20 bg-cyan-400', 'h-10 bg-indigo-500'],
  Sun: ['h-20 bg-gray-300', 'h-16 bg-cyan-400', 'h-12 bg-indigo-500'],
};

const ActivityGraph = () => {
  return (
    <div className="mt-12 bg-[#E4EDFB] rounded-2xl p-4 w-full max-w-4xl mx-auto shadow-sm">
      <div className="flex justify-between mb-2 px-2">
        <h2 className="text-md font-bold text-purple-900">Activity</h2>
        <span className="text-sm text-gray-400">3 appointment on this week</span>
      </div>

      <div className="flex justify-between md:justify-around items-end h-40 px-4">
        {Object.entries(activityData).map(([day, bars]) => (
          <div key={day} className="flex flex-col items-center gap-1">
            <div className="flex gap-[3px] items-end h-32">
              {bars.map((cls, idx) => (
                <div key={idx} className={`w-[4px] rounded-md ${cls}`}></div>
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-1">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;
