
import { useDispatch, useSelector } from "react-redux";
import styles from "./Preference.module.scss";
import {  useNavigate } from "react-router-dom";
import { InputForm } from "../../сomponents/InputForm";
import { setInputAbout,setInputForms } from "./preferenceSlice";
import { RootState } from "../../app/store";
import { ButtonForm } from "../../сomponents/ButtonForm";
import { CheckBoxForm } from "../../сomponents/Checkbox";
import { Wizard } from "../../сomponents/Wizard";

export const Preference = () => {
const dispatch = useDispatch();

const state = useSelector((state: RootState) => state);
console.log(state);



const  inputAbout = useSelector((state: RootState) => state.preference.inputAbout);
const handleInputAbout = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setInputAbout(e.target.value));
};

const inputForms = useSelector((state:RootState) => state.preference.inputForms);
const handleInputAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const newInput = (e.target as HTMLInputElement).value;

  const handleAddInputForm = () => {
    dispatch(setInputForms([...inputForms, newInput]));
  }
}


  return (
    <div className={styles.preference}>
      <Wizard/>
      <h3 className={styles.preference__title}>Преимущества</h3>
      
          <InputForm
      type="text"
      label="текст"
       value={inputAbout}
      name="текст"
      placeholder="Введите Ваши Преимущества"
      onChange={handleInputAbout}
      />

      <button >dsa </button>
      
       <ButtonForm type="button" disabled={false} > 
              +
         </ButtonForm> 
      <CheckBoxForm
       type="radio"
       label="текст"
       value={inputAbout}
       name="текст"
       placeholder="Введите Имя"
       onChange={handleInputAbout}/>
      
    </div>
  );
}

