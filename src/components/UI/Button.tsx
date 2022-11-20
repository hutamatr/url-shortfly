import React from "react";

interface Props {
  className: string;
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, type, onClick }: Props) => {
  return (
    <button
      className={`${className} bg-primary-cyan font-bold text-white`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
