import React, { ChangeEvent } from "react";
import styles from './CheckBoxForm.module.scss'



interface CheckBoxFormProps {
  type: "checkbox" | "radio";
  label: string ;
  value: string ;
  name: string;
  placeholder: string;
  error?: string ;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const CheckBoxForm: React.FC<CheckBoxFormProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
      <label htmlFor={label}  className={styles.radio__group}>
       
        <input 
        className={styles.radio__input}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
        <p className={styles.text}>{label}</p>
          {error && <p className={styles.error}>{error} </p>}  
      </label>
  );
};
