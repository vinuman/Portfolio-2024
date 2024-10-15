import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[165px] h-[48px] bg-primary-200 rounded-md text-[#1A202C] font-bold uppercase text-body-l flex items-center justify-center space-x-2 ${className} hover:bg-[#67e8b4]`}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
    </button>
  );
};

export default Button;
