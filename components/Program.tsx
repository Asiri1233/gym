import React from "react";
import ProgramCard from "./ProgramCard";
import Marquee from "react-fast-marquee";

const Program = () => {
  return (
    <div className="relative container mx-auto">
      <div className="lg:text-8xl sm:text-start text-center  text-5xl font-extrabold relative z-[-1] text-[#FFFFFF1C]">
        PROGRAM
      </div>
      <div className="sm:absolute transform  -translate-y-3/4 z-10  font-Urbanist font-bold text-white lg:text-6xl md:text-5xl text-4xl  text-center sm:text-start ">
        Explore Our Program
      </div>
    </div>
  );
};

export default Program;
