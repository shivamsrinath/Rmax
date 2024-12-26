import React from 'react'

const ServiceCard = ({Img,tittle,desc}) => {
 

    return (
    //   <div className="col-span-1 flex flex-col items-center justify-center bg-[#FAFAFA] h-[467px] px-5 py-6 border border-solid border-[#E5E7EB] rounded-[8px] ">
    //     <div>
    //       {Img && (
    //         <img src={Img} alt={"loading"} className="w-[302 px] h-[358 px] object-contain" />
    //       )}
    //     </div>

    //     <h3 className="mt-5 font-bold text-[20px] ">{tittle}</h3>
    //     <p className="mt-3  text-center  text-[16px] font-normal">{desc} <span><button>Know more...</button></span></p>
        
      
        // </div>

       
<div className="flex flex-col w-[302px] h-[467px]  rounded-lg ">
  <img
    src={Img}
    alt=""
    className="w-[302px] h-[358px] border border-solid rounded-[8px] object-cover mx-auto"
  />
  <div className="p-4 h-[91px] pl-0 pr-0">
    <h3 className="text-[28px] font-semibold text-gray-800 text-left">{tittle}</h3>
    <p className="text-gray-600 mt-2 text-[14px] text-left">
      {desc}
      <a href="#" className="text-[#0000EE] hover:underline"> Know more...</a>
    </p>
  </div>
</div>


       
       
       
    );
  };


export default ServiceCard;
