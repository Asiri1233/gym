"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { Tab } from "@headlessui/react";

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#097FD9] font-Poppins font-semibold">Pricing</p>
        <h1 className="text-white text-3xl font-bold font-Urbanist">
          Our List Packages
        </h1>
      </div>
      <div className="mt-10 flex justify-center items-center flex-col">
        <Tab.Group>
          <Tab.List className="flex max-w-[300px] bg-white p-4 rounded-lg">
            <Tab
              className={`${
                selectedTab === 0
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              } rounded-md p-4 mr-2 cursor-pointer`}
              onClick={() => setSelectedTab(0)}
            >
              Yearly
            </Tab>
            <Tab
              className={`${
                selectedTab === 1
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              } rounded-md p-4 cursor-pointer`}
              onClick={() => setSelectedTab(1)}
            >
              Monthly
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className=" justify-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <PricingCard packageName="Pro Yearly" packagePrice={400} />
                <PricingCard packageName="Mid Package" packagePrice={24} />
                <PricingCard packageName="Basic Package" packagePrice={25} />
                <PricingCard packageName="Athlete Package" packagePrice={60} />
                {/* Add more yearly pricing cards here */}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="justify-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <PricingCard packageName="Pro Monthly" packagePrice={40} />
                <PricingCard packageName="Pro Monthly" packagePrice={40} />
                <PricingCard packageName="Pro Monthly" packagePrice={40} />
                <PricingCard packageName="Pro Monthly" packagePrice={40} />
                {/* Add more monthly pricing cards here */}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Pricing;
