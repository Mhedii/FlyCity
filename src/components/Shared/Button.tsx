import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  bg?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  disabled,
  bg,
  textColor,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${textColor || "text-white"} ${
        bg || "bg-primary"
      }  font-bold rounded-badge px-6 py-2 ${className}  ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
