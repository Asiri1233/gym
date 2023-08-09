import React from "react";
import { FaCheck } from "react-icons/fa";

interface PricingCardProps {
  packageName: string;
  packagePrice: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  packageName,
  packagePrice,
}) => {
  const features = [
    "Unlimited Gym Access",
    "7x Fitness Consultant",
    "Nutrition Tracking",
    "Personal Trainer",
    "5x Free Supplement",
    "Personal Trainer",
    "7x Fitness Consultant",
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-[280px] container max-h-[537px] group bg-[#0D0D0D] border rounded-2xl hover:bg-[#097FD9] cursor-pointer duration-1000 hover:scale-110">
        <div className="pt-[24px]  pb-[24px] pl-[28px] pr-[28px]">
          <p className="text-[#097FD9] duration-300 group-hover:text-black">
            {packageName}
          </p>
          <p className="lg:text-6xl md:text-4xl text-2xl font-Urbanist mt-2 mb-2">
            ${packagePrice}
          </p>
          <p className="text-gray-400 font-Poppins group-hover:text-gray-700 duration-500">
            per month, billed annually
          </p>
          <ul className="text-white mt-4 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center ">
                <span className="rounded-full bg-white text-black w-5 h-5 flex items-center justify-center mr-2">
                  <FaCheck />
                </span>
                {feature}
              </li>
            ))}
            <div>
              <button className="bg-[#097FD9] group-hover:bg-black text-white w-full p-4 rounded-lg lg:mt-16 duration-300">
                Register Now
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
