import React from "react";

const Button = ({ text, icon, className }) => {
  return (
    <button
      className={`py-3 px-7 bg-secondary p5 text-quinary font-poppins rounded-full cursor-pointer flex gap-x-[10px] items-center ${className}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
