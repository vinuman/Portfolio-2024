import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[165px] h-[48px] bg-primary-200 rounded-md text-primary-100 font-bold uppercase text-body-l ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
