import { ChangeEvent } from "react";
import styles from "./DropDown.module.scss";

interface DropDownProps {
  options?: {value: string, label: string}[];
  value: string
  error?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  error,
  options,
  value,
  onChange,
}) => {
 const genderOptions = [
  {value: "male", label: 'Мужской'},
  {value: "female", label: "Женский"},
 ];
  return (
    <label  htmlFor="gender" className={styles.label__dropdown}>
      <select
        id="gender"
        onChange={onChange}
        className={styles.select__gender}
        value={value}
      >
        
        <option value="" disabled hidden>
          Выберите пол
        </option>
        {genderOptions.map((options) => (
          <option key={options.value} value={options.value}>{options.label}</option>
        ))}
        
      </select>
      {error && <p className={styles.error}>{error} </p>}
    </label>
  );
};
export default DropDown;
