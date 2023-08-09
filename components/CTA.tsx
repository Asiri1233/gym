import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="w-full container mt-10">
      <div className="container  rounded-2xl  p-[40px] bg-[#0D0D0D] flex flex-row items-center justify-between">
        <h1 className="font-bold font-Urbanist lg:text-3xl text-2xl">
          Enhance user experience with healthy nutrition tips, support
          resources, and social elements.
        </h1>
        <Button buttonLabel="Join" />
      </div>
    </div>
  );
};

export default CTA;
