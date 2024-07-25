import React, { forwardRef } from "react";

interface Props {
  placeholder: string;
  className: string;
  value?: string;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, className, value, onChange }, ref) => {
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
