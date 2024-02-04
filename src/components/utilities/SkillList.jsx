import React from 'react'

function SkillList({ logo, name,}) {
  return (
    <div className="flex flex-col gap-2 sm:gap-1 text-xl font-semibold ">
      <div className="flex justify-between">
        <p className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem] exsm:text-sm exsm:gap-3">
          {logo} {name}
        </p>{" "}
        {/* <span className=" text-gray-400 text-[1.1rem] sm:text-[1rem] exsm:text-sm">
          {value}%
        </span> */}
      </div>
      <div className="h-[2px] w-[100%] relative rounded-3xl bg-gray-300">
        
      </div>
    </div>
  )
}

export default SkillList