import React from "react";

const Pill: React.FC = ({ children }) => {
  return (
    <li className="py-1 bg-black text-white rounded-full px-3 text-xs">
      {children}
    </li>
  );
};

export default Pill;
