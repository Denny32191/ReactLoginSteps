import React, { ChangeEvent } from "react";
import styles from "./InputForm.module.scss";


interface InputProps {
  type: "text" | "number" | "email" | "password" | "checkbox" | "radio";
  label: string ;
  value: string ;
  name: string;
  placeholder: string;
  error?: string ;
  disabled?: boolean;
  id?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const InputForm: React.FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  id,
  onChange,
}) => {
  return (
      <label htmlFor={label}>
        <p className={styles.text}>{label}</p>
       
        <input
        className={styles.inputs}
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



