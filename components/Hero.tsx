import React from "react";
import Button from "./Button";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="container mx-auto relative">
      <div className="flex md:flex-row flex-col md:justify-between items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-white font-Urbanist lg:text-6xl md:text-5xl text-4xl font-bold text-center sm:text-start relative z-10">
            Helps for your ideal body fitness
          </h1>
          <p className="font-Poppins text-[18px]  text-gray-400 text-center sm:text-start relative z-10">
            Motivate users with benefits and positive reinforcement, <br /> and
            offer modifications and progress tracking.
          </p>
          <div className="flex items-center gap-4 justify-center sm:justify-start relative z-10">
            <Button buttonLabel="Start Training" />
            <div className="rounded-full border border-white p-1">
              <AiOutlinePlayCircle color="blue" />
            </div>
            Play Now
          </div>
        </div>
        <div className="flex flex-row relative">
          <img
            src="Side.png"
            alt="Couple gym photo"
            className="max-w-full h-auto relative z-10"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFFFFF1C] text-8xl font-extrabold rotate-90 md:left-[10%] md:right-auto font-Urbanist">
            FITNESS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
