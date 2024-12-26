import React from "react";
import ServiceCard from "./ServiceCard";
import Sports from "../../assets/image/Sports.png";
import Health from "../../assets/image/Healthcare.png";
import Learn from "../../assets/image/Learning.png";
import { LeftArrow } from "../../assets/image.jsx";
import { RightArrow } from "../../assets/image.jsx";

const ServiceProvider = () => {
  return (
    <section className="mt-20 ">
      <div className="max-w-4xl mx-auto text-center py-12 px-6">
        {/* Title Section */}
        <h1 className="text-[50px] font-bold text-[#1F1F1F] leading-snug">
          Empowering Service <br />
          Providers Across Industries
        </h1>

        {/* Subtitle Section */}
        <p className=" text-[18px] text-[#475467] mt-4 ">
          Whether you're in sports, education, wellness, household services, or
          niche markets, our technology simplifies your business operations,
          making it easier for you to focus on what you do best.
        </p>
      </div>

      <div className="flex flex-row  justify-center h-[467px] gap-20 mt-[68px]">
        <div className="mt-[179px]">
          <RightArrow />
        </div>
        <ServiceCard
          Img={Sports}
          tittle={"Sports"}
          desc={
            "From fitness studios to sports academies, Rmax empowers sports businesses "
          }
        />
        <ServiceCard
          Img={Health}
          tittle={"Healthcare & Wellness"}
          desc={
            "Health and wellness service providers—from yoga instructors and gyms "
          }
        />
        <ServiceCard
          Img={Learn}
          tittle={"Learning Activities"}
          desc={
            "Tutors, educators, and learning centers—from music schools to art studios "
          }
        />

        <div className="mt-[179px]">
          <LeftArrow />
        </div>
      </div>
    </section>
  );
};

export default ServiceProvider;
