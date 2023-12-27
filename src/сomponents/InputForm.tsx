import React, { ChangeEvent } from "react"

interface InputProps {
    type: 'text' | 'number' | 'email ' | 'password' ;
    label: string;
    value: string | number;
    name: string;
    placeholder: string;
    error: boolean;
    disabled?: boolean;
    className: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputForm: React.FC <InputProps> = ({
    type,
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    className,
    onChange
}) => {
    return (
          <label htmlFor={label}>
          <div >
            <p>{label}</p>
            <input 
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            className={className}
            />
            <span>{error}</span>
          </div>
          </label>
    )
}

export default InputForm;