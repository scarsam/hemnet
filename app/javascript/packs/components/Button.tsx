import React from "react";

interface IButton {
  disabled?: boolean;
  handleClick: () => void;
  variant: "large" | "small";
}

const Button: React.FC<IButton> = ({
  disabled,
  handleClick,
  variant,
  children,
}) => {
  return (
    <button
      className={`${
        variant === "large"
          ? "bg-white rounded-full px-6 py-4 m-2 disabled:opacity-50 text-large focus:outline-none"
          : "rounded-full bg-yellow-300 py-1 px-5 flex m-auto focus:outline-none"
      }`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
