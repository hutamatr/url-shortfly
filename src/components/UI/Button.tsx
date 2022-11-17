import React from "react";

interface Props {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={`${className} bg-primary-cyan font-bold text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
