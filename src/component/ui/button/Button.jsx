import React from "react";

const Button = ({ text, onClick, className, type = "button",color="white" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg sm:text-base text-sm text-${color} bg-[#E50101] hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 transition duration-200 ease-in-out ${className}  focus:outline-none`}
    >
      {text}
    </button>
  );
};

export default Button;
