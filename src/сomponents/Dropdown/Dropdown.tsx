import { ChangeEvent } from "react";
import styles from "./DropDown.module.scss";

interface DropDownProps {
 
    gender?: string;
    required?: string;
    value?: string;
    name?: string;
    error?: string;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  
}

const DropDown: React.FC<DropDownProps> = ({
  gender,
required,
  name,
  error,
  disabled,
  onChange,
}) => {
  return (
    <label  htmlFor="gender" className={styles.label__dropdown}>
      <select
        id="gender"
        
        name={name}
        onChange={onChange}
        className={styles.select__gender}
        disabled={disabled}
      >
        
        <option value="male" className={styles.option__male}>
          Male
        </option>
        <option value="female" className={styles.option__female}>
          Female
        </option>
      </select>
      {error && <p className={styles.error}>{error} </p>}
    </label>
  );
};
export default DropDown;
