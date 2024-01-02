import styles from "./Wizard.module.scss";
import React from "react";

interface StepStage {
  type?: "text" | "number" | "email " | "password";
  label?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Wizard: React.FC<StepStage> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
}) => {
  return (
    <label>
      <div className={styles.header}>
        <div className={styles.steps__loading}>
          <button className={styles.button__one}></button>
          <div className={styles.part__one}></div>
          <button className={styles.button__two}/>
          <div className={styles.part__two}></div>
          <button className={styles.button__three}></button>
        </div>
      </div>
    </label>
  );
};

export default Wizard;
