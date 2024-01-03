import { ChangeEvent } from "react";
import styles from "./DropDown.module.scss";

interface DropDownProps {
  value?: string;
  label?: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  error,
  value,
  label,
  onChange,
}) => {
  return (
    <label  htmlFor="gender" className={styles.label__dropdown}>
      <select
        id="gender"
        
        
        onChange={onChange}
        className={styles.select__gender}

      >
        <option value="" disabled selected hidden>Выберите пол</option>
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
