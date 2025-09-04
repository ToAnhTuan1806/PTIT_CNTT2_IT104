import React from 'react'

export default function Bai5() {
  return (
    <div style={{ margin: "20px" }} className="bg-[#d7f2fe] p-[20px] w-fit rounded-md">
      <div className="relative bg-[#b7e8fd] p-6 w-[220px] h-[160px] rounded-md">
        <p className="text-[#0377b1] font-medium">Relative parent</p>
        <div className="absolute bottom-0 left-0 bg-[#0ea5e9] text-white font-bold px-[5px] py-[8px] rounded-md">
          Absolute child
        </div>
      </div>
    </div>
  )
}
