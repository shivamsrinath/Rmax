import React from "react";
import ToggleSwitch from "./ToggleSwitch";
// import PlanCard from "./PlanCard";
import { StarterCard } from "./PlanCard";
import { PremiumCard } from "./PlanCard";

const Plans = () => {
  return (
    <section className=" flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center text-center mt-[120px]">
        <h1 className="text-[50px] font-bold">Choose Plan</h1>
        <h1 className="text-[50px] font-bold">That's Right For You</h1>
        <p className="text-[#666666]  mt-5">
          Simple and transparent pricing. Start for free, upgrade when you love
          it.
        </p>
        <span className="text-red-600">30 day free trial in a button</span>
        <p className=" mt-[26px] mb-8">
          Running a{" "}
          <span className="text-black font-semibold">Growth Business</span> or{" "}
          <span className="text-black font-semibold">Enterprises</span>? Let's
          connect-{" "}
          <button className="text-[14px] bg-[#F54F35] text-white rounded-lg w-[99px] h-[29px] ">
            Talk to Sales
          </button>
        </p>
      </div>

      <div className="flex flex-row gap-5 items-center justify-center">
        <h4 className="text-[18px] ">Monthly</h4>
        <ToggleSwitch />
        <h4 className="text-[18px] ">Yearly</h4>
        <h5 className="text-[#F54F35] bg-[#e4dad9] rounded-3xl w-[95px] h-[29px] justify-center text-center pt-[2px] font-medium text-[14px]">
          SAVE 25%
        </h5>
      </div>


      <div className="flex flex-row gap-[29px] items-center justify-center mt-[48px]">
       <StarterCard/>
       <PremiumCard/>
      </div>
       <p className="text-[#0000EE] inline-block border-b-2 border-[#0000EE] mt-5 cursor-pointer ">Explore In-Depth Differences</p>
    </section>
  );
};

export default Plans;
