import styles from "./Persona.module.scss";
import { Link } from 'react-router-dom'
import InputsWithButtons from "./InputsWithButtons";
import Wizard from "./Wizard";



function Persona() {
  const step = 1
  return (
    <div className={styles.step__one}>
      <Wizard step={step}/>
      <InputsWithButtons/>
    </div>
  );
}
export default Persona;
