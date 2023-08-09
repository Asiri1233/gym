// components/ProgramCard.tsx
import React from "react";

interface ProgramCardProps {
  card: {
    icon: string;
    title: string;
    des: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ card }) => {
  return (
    <div className="bg-[#0D0D0D] hover:bg-[#097FD9] max-w-[320px] pl-10 pr-10 pb-6 pt-6 rounded-lg group cursor-pointer duration-300">
      <div className="max-w-[300px]">
        <img
          src={card.icon}
          alt={card.title}
          className="group-hover:bg-black rounded-md"
        />
        <h1 className="font-Poppins text-2xl font-semibold">{card.title}</h1>
        <p className="text-gray-400 font-Poppins">{card.des}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
