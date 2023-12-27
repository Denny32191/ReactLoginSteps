import React, { ChangeEvent } from "react";
import styles from "./InputForm.module.scss";

interface InputProps {
  type: "text" | "number" | "email " | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
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
  return (
    <div className={styles.input__block}>
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
        {error && <p className="error__red">Введите поля</p>}
      </label>
    </div>
  );
};

export default InputForm;
