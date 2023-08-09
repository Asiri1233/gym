import CTA from "@/components/CTA";
import FitnessPlan from "@/components/FitnessPlan";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Program from "@/components/Program";
import ProgramCard from "@/components/ProgramCard";
import Testimonials from "@/components/Testimonials";
import React from "react";
import Marquee from "react-fast-marquee";

const cardThings = [
  {
    icon: "/Group2.png",
    title: "Cardio Strength",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis,",
  },
  {
    icon: "/Group.png",
    title: "Fat Lose",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis,",
  },
  {
    icon: "/Group3.png",
    title: "Muscle Gain",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis,",
  },
  {
    icon: "/Group4.png",
    title: "Nutritions",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis,",
  },
  {
    icon: "/Group3.png",
    title: "Strength Training",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis,",
  },
];

const page = () => {
  return (
    <div className="w-full h-screen ">
      <div>
        <Navbar />
      </div>
      <div className="mt-10 sm:mt-5 md:mt-0">
        <Hero />
      </div>
      <div>
        <Program />
      </div>
      <div className="mt-20">
        <Marquee>
          {cardThings.map((card, index) => (
            <div className="mr-5" key={index}>
              <ProgramCard card={card} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mt-20">
        <FitnessPlan />
      </div>
      <div className="flex justify-center items-center">
        <CTA />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default page;
