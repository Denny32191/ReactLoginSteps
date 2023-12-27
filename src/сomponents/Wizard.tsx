import styles from "./Wizard.module.scss";
import React from "react";

interface StepStage {
  type: 'text' | 'number' | 'email ' | 'password' ;
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Wizard: React.FC<StepStage> = ({ type, label, value, name, placeholder, error, disabled }) => {
  return (
    <div>
      <div>
        <div>
          <button></button>
          <div></div>
          <button />
          <div></div>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default Wizard;
