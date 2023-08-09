import React from "react";

interface ButtonProps {
  buttonLabel: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel }) => {
  return (
    <button className="bg-[#097FD9] text-white font-semibold p-2 rounded-lg font-Poppins">
      {buttonLabel}
    </button>
  );
};

export default Button;
