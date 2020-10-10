import React, { InputHTMLAttributes } from 'react';
// styles
import { InputBlock } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    value?: any;
}

const Input: React.FC<InputProps> = ({ label, name, value, ...props }) => {
    return (
        <InputBlock>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} value={value} {...props}/>
        </InputBlock>
    )
}

export default Input
