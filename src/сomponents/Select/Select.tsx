import { ChangeEvent } from "react";
import styles from "./Select.module.scss";


type genderOptions = {
value: string;
label: string;

};


interface SelectProps {
  options?: {value: string, label: string}[];
  value: string
  error?: string;
  title: string;
    // onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    onChange: (value: string) => void;
}
const genderOptions = [
  {value: "male", label: 'Мужской'},
  {value: "female", label: "Женский"},
 ];


 export const Select: React.FC<SelectProps> = ({
  error,
  options,
  value,
title,
  onChange,
}) => {

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  }
    
  return (
    <div  className={styles.label__dropdown}>
      <select
        id="gender"
        onChange={handleSelectChange}
        className={styles.select__gender}
        value={value}
      >
        
        <option value="" disabled hidden>
          {title}
        </option  >
        {genderOptions.map((options) => (
          <option>{options.label}</option>
        ))}
        
      </select>
      {error && <p className={styles.error}>{error} </p>}
    </div>
  );
};
export default Select;
