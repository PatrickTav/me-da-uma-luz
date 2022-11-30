import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-10 py-2 mt-10 font-medium text-white rounded-md bntHover bg-amber-500 animate__animated animate__fadeInRightBig animate__delay-1s">
      {children}
    </button>
  );
};

export default Button;
