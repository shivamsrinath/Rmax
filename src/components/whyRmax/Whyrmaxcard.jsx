import React from 'react'

const whyrmaxcard = ({ Img, Svg, tittle, desc }) => {
  return (
    <div className="col-span-1 flex flex-col items-center justify-center bg-[#FAFAFA] px-5 py-6 border border-solid border-[#E5E7EB] rounded-[8px] ">
    <div>
      {Img && (
        <img src={Img} alt={"loading"} className="bg-black object-cover" />
      )}
      {Svg && <Svg />}
    </div>
    <h3 className="mt-5 font-bold text-[20px] ">{tittle}</h3>
    <p className="mt-3  text-center  text-[16px] font-normal">{desc}</p>
    <button className="mt-2 text-[#0000EE]">View details {">"}</button>
    <div></div>
  </div>
  )
}

export default whyrmaxcard


