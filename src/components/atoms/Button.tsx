import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-teal-400 text-black font-medium rounded-md transition-all hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
