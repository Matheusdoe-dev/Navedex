import React, { InputHTMLAttributes } from "react";
// styles
import { InputBlock } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value?: any;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  error,
  ...props
}) => {
  return (
    <InputBlock>
      {label && (
        <label htmlFor={name}>
          {label} {error ? <span>{error}</span> : ""}
        </label>
      )}
      <input
        className={error ? "error" : ""}
        type="text"
        name={name}
        id={name}
        value={value}
        {...props}
      />
    </InputBlock>
  );
};

export default Input;
