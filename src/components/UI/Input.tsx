import React, { forwardRef } from "react";

interface Props {
  placeholder: string;
  className: string;
  value?: string;
  onChange?: () => void;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, onChange, className, value }, ref) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        value={value}
        ref={ref}
      />
    );
  }
);

export default Input;
