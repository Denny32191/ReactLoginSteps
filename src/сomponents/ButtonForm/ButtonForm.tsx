import styles from './ButtonForm.module.scss'
import React, { ChangeEvent } from "react"





interface ButtonProps {
  type?: "submit" | "button"
  // | "reset" | "submit" | undefined
  disabled: boolean 
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonForm: React.FC<ButtonProps> = ({
  type,
  disabled,
  children,
  onClick
}) => {
  return (
    <div className={styles.buttons}>
      <button 
        type={type}
        disabled={disabled}
        onClick={onClick}
        
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonForm;