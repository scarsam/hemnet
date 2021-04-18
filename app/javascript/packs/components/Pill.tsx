import React from "react";

const Pill: React.FC = ({ children }) => {
  return (
    <li className="p-1 bg-black text-white rounded-full px-5 text-xs">
      {children}
    </li>
  );
};

export default Pill;
