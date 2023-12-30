import React, { ChangeEvent } from "react";
import styles from "./InputForm.module.scss";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string ;
  value: string ;
  name: string;
  placeholder: string;
  error?: string ;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputForm: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  console.log(error)
  return (
      <label htmlFor={label}>
        <p className={styles.text}>{label}</p>
       
        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          
          

        />
         {error && <p className={styles.error}>{error} </p>} 
      </label>
  );
};

export default InputForm;
