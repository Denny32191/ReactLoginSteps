import { ChangeEvent } from 'react';
import styles from './DropDown.module.scss'

interface DropDownProps {
  type?: "gender"
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}


const DropDown: React.FC<DropDownProps>= ({
 type,
 value,
 onChange
}) => {
    return (
        
        <label htmlFor="gender" className={styles.label__gender} >
        <select id="gender" value={value} onChange={onChange} className={styles.select__gender} >
          <option value="male" className={styles.option__gender}>Male</option>
          <option value="female"className={styles.option__gender}>Female</option>
        </select>
        </label>
      
    )
}
export default DropDown;

