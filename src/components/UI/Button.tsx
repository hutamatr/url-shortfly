import React from "react";

interface Props {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ className, children, onClick }) => {
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
