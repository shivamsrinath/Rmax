import React from "react";
import { SparkleIcon } from "../../assets/image";

const Herosection = () => {
  return (
    <section className="container  mt-12 mx-auto flex flex-col items-center justify-start gap-12">
      <div class="flex items-center justify-center ">
        <h1 className="text-xl font-bold text-gray-700 border border-gray-300 rounded-lg px-4 py-2">
          AI Rmax
        </h1>
        <input
          type="text"
          placeholder="Curious?   Let AI Uncover The Answers!"
          className="px-4 py-2 border rounded w-72 text-gray-700 mt-2"
        />
      </div>

      <div className="flex  flex-col items-center justify-center mt-10">
        <h1 className="text-5xl mb-2 font-bold">Maximize Your Impact</h1>
        <h1 className="text-5xl">
          <span className="text-orange-500 font-bold">Business With</span>
          <span className="font-bold"> R</span>
          <span className="text-red-700 font-bold">Max</span>
        </h1>
        <p className="mt-5 text-gray-500 max-w-[600px] text-center">
          Enhance your business with Rmax's all-in-one platform--streamlining
          client span 
          engagement automating workflows and fueling growth
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">  Get Started →</button>
        <button className="px-4 py-2 bg-white-500 text-black rounded shadow-xl border-2 border-gray-300 hover:bg-orange-600">Book A Demo</button>
      </div>

      <div className="flex items-center justify-center gap-24 mt-8">
          <div style={{boxShadow:" 0px 0px 0.9px 0px #00000040"}} className="border border-gray-100 rounded-lg px-[10px] py-[6px] boxShadow-xl">Seamless Onboarding</div>
          <div style={{boxShadow:" 0px 0px 0.9px 0px #00000040"}} className="border border-gray-100 rounded-lg px-[10px] py-[6px]">Client Engagement</div>
          <div style={{boxShadow:" 0px 0px 0.9px 0px #00000040"}} className="border border-gray-100 rounded-lg px-[10px] py-[6px]">Generate Report</div>
          <div style={{boxShadow:" 0px 0px 0.9px 0px #00000040"}} className="border border-gray-100 rounded-lg px-[10px] py-[6px]">Revenue Growth</div>
          <SparkleIcon />

      </div>
    </section>
  );
};

export default Herosection;
