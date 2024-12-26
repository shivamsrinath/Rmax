import React from "react";

export const StarterCard = () => {
  return (
    <div className="flex flex-col mt-12 border-[0.94px] border-[#E7E9ED] rounded-lg pl-[46px] pr-[46px]">
      <h2 className="text-[#F54F35] font-semibold mt-[34.73px]">STARTER</h2>
      <h3 className="mt-[36.27px]">
        <span className="text-[20px] font-bold">$</span>
        <span className="text-[56px] font-bold text-[#1F1F1F]">17</span> /month
      </h3>
      <p className="text-[#475467] text-[16px] mt-2">billed monthly</p>

      <div className="flex items items-center space-x-2 mt-6">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>

        <span className="text-[#1F1F1F] text-[16px] font-medium ">
          Commercial License
        </span>
      </div>
      <div className="flex  items-center space-x-2  mt-[12.2px]">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>

        <span className="text-[#1F1F1F] text-sm font-medium">
          100+ HTML UI Elements
        </span>
      </div>
      <div className="flex items-center space-x-2 mt-[12.2px]">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>

        <span className="text-[#1F1F1F]  text-sm font-medium ">
          Unlimited Domain Support
        </span>
      </div>

      <div className="flex items-center space-x-2 text-[#949494] mt-[12.2px]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2016 1.34729L0.936279 12.6126"
            stroke="#949494"
            stroke-width="1.87755"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.2016 12.6126L0.936279 1.34729"
            stroke="#949494"
            stroke-width="1.87755"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>6 Months Premium support</span>
      </div>
      <div className="flex items-center space-x-2 text-[#949494] mt-[12.2px]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2016 1.34729L0.936279 12.6126"
            stroke="#949494"
            stroke-width="1.87755"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.2016 12.6126L0.936279 1.34729"
            stroke="#949494"
            stroke-width="1.87755"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Life Time Updates</span>
      </div>
      <button class="bg-red-50 text-red-500 font-medium px-4 py-2 rounded flex items-center justify-between hover:bg-red-100 mt-[27.88px]">
        Get Started
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.93335 2L14 7.63333L7.93335 13.2667"
            stroke="#F54F35"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
          <path
            d="M1 7.40123H13.1333"
            stroke="#F54F35"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </svg>
      </button>
    <p className="mt-4 mb-[33px] ">No credit card required</p>
    </div>
  );
};

export const PremiumCard = () => {
  return (
    <div className="flex flex-col mt-12 border-[0.94px] border-[#E7E9ED] rounded-lg pl-[46px] pr-[46px]">
      <h2 className="text-[#F54F35] font-semibold mt-[34.73px]">PREMIUM</h2>
      <h3 className="mt-[36.27px]">
        <span className="text-[20px] font-bold">$</span>
        <span className="text-[56px] font-bold text-[#1F1F1F]">17</span> /month
      </h3>
      <p className="text-[#475467] text-[16px] mt-2">billed monthly</p>

      <div className="flex  flex-row items-center space-x-2 mt-6">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>

        <span className="text-[#1F1F1F] text-[16px] font-medium">
          Commercial License
        </span>
      </div>
      <div className="flex flex-row items-center space-x-2 mt-[12.2px]">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>

        <span className="text-[#1F1F1F] text-sm font-medium ">
          100+ HTML UI Elements
        </span>
      </div>
      <div className="flex  items-center space-x-2 mt-[12.2px]">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>

        <span className="text-[#1F1F1F]  text-sm font-medium ">
          Unlimited Domain Support
        </span>
      </div>

      <div className="flex items-center space-x-2 mt-[12.2px] ">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>
        <span className="text-[#1F1F1F]">6 Months Premium support</span>
      </div>
      <div className="flex  items-center space-x-2 mt-[12.2px] ">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z"
            fill="#68D585"
          />
        </svg>
        <span className="text-[#1F1F1F]">Life Time Updates</span>
      </div>
      <button class="bg-red-50 text-red-500 font-medium px-4 py-2 rounded flex items-center justify-between hover:bg-red-100 mt-[27.88px]">
        Get Started
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.93335 2L14 7.63333L7.93335 13.2667"
            stroke="#F54F35"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
          <path
            d="M1 7.40123H13.1333"
            stroke="#F54F35"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </svg>
      </button>
      <p className="mt-4 mb-[33px]">No credit card required</p>
    </div>
  );
};
