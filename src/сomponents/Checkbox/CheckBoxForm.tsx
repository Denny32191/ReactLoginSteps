import React, { ChangeEvent } from "react";



interface CheckBoxFormProps {
  type: "text" | "number" | "email" | "password" | "checkbox" | "radio";
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
      <label htmlFor={label}>
        {/* <p className={styles.text}>{label}</p> */}
       
        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
         {/* {error && <p className={styles.error}>{error} </p>}  */}
      </label>
  );
};
