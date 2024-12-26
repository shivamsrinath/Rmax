import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[50px] mt-[120px] font-bold">
        Frequently Asked Questions
      </h1>
      <p className="mt-[27px] text-[18px] mb-12">
        Find answers to common questions about our services and features. For
        more details, contact our support team
      </p>
      <div class="flex items-center w-[671px] border rounded-lg overflow-hidden shadow-sm  max-w-lg">
        <input
          type="text"
          placeholder="Ask Q! e.g Tell me about key Features."
          class="flex-grow px-4 py-2 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2"
        />
        <button class="bg-red-500 text-white px-4 py-2 flex items-center justify-center hover:bg-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35M10 16a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </button>
      </div>

      <div className=" mt-3 border rounded-lg overflow-hidden shadow-sm  max-w-lg">
        <div className="flex flex-row mt-[26px] ml-[29px] justify-between text-[20px] w-[] font-semibold">
          <h1>What is Rmax?</h1>
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17L16 11L22 17"
              stroke="#1F1F1F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p className="mt-[23px] ml-[29px] mb-[26px] text-[#475467]">
          Qest, is a SaaS platform/ecosystem that lets any small to medium
          service business setup & manage their business quickly & easily.
        </p>
      </div>

      <div className="mt-3 border rounded-lg overflow-hidden shadow-sm max-w-lg">
        <div className="flex items-center justify-between px-6 py-5 text-[20px] font-semibold">
          <h1 className="mr-96">How does it work?</h1>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="#1F1F1F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className=" mt-3 border rounded-lg overflow-hidden shadow-sm  max-w-lg">
        <div className="flex flex-row  items-center gap-[458px] pr-[14px] mt-[26px] ml-[29px] justify-between text-[20px]  font-semibold">
          <h1>How much does it cost?</h1>
          <div className="font-semibold pt-9">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="#1F1F1F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-[18px]  mt-[25px] mb-[83px]">
        Haven't got your answer?{" "}
        <button className="text-[#0000EE] text-[18px]">
          Contact our support now
        </button>
      </p>
    </div>
  );
};

export default Faq;
