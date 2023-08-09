import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";

const FitnessPlan = () => {
  return (
    <div className="flex flex-col md:flex-row items-center container mx-auto font-Poppins ">
      <div className="md:w-1/2">
        <img src="3Img.png" alt="" className="max-w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:text-right md:pl-6 mt-4">
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h1 className="text-white font-Urbanist lg:text-6xl md:text-5xl text-4xl font-bold text-center sm:text-start relative z-10  ">
            Transform your physique with our fitness plan.
          </h1>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <div>Increase Muscle and Strength</div>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <div>Be Healthier than before</div>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <div>Increase Stamina</div>
          </div>
          <div className="flex items-center gap-4 justify-center sm:justify-start mt-4 md:mt-0">
            <Button buttonLabel="Join now" />
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessPlan;
