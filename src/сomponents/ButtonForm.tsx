
import React, { ChangeEvent } from "react"

interface ButtonProps {
  title: string,
  className: string,
  onClick?: () => void;
}

  const ButtonForm: React.FC<ButtonProps> = ({ title, className, onClick }) => {
    return (
      <div>
        <button >
          
        </button>
      </div>
    );
  };

  export default ButtonForm;