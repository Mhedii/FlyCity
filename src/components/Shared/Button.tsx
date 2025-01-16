import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-primary font-bold rounded-badge px-6 py-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
