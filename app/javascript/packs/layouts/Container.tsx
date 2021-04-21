import React from "react";

const Container: React.FC = ({ children }) => {
  return <div className="container m-auto py-10 relative z-10">{children}</div>;
};

export default Container;
