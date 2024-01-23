
import { useDispatch, useSelector } from "react-redux";
import styles from "./Preference.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../../сomponents/InputForm";
import { setInputAbout,setInputForms,addInputForm,setCheckBox } from "./preferenceSlice";
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
 const handleInputAdd = () => {
  dispatch(addInputForm()); // Добавление пустого значения в массив инпутов
};
const inputCheckBox = useSelector((state:RootState) => state.preference.checkbox);
const handleInputCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setCheckBox(e.target.value));
}
const navigate = useNavigate();
const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  navigate("/description");
}
  return (
    <div className={styles.preference}>
      <Wizard/>
      <h3 className={styles.preference__title}>Преимущества</h3>
      <form onSubmit={handleClick}>
      {inputForms.map((index) => (
          <InputForm
          key={index}
      type="text"
      label=""
      value={inputAbout}
      name="текст"
      placeholder="Введите Ваши Преимущества"
      onChange={handleInputAbout}
      />
      ))}
      <button type="button">delete </button>
       <ButtonForm type="button" disabled={false} onClick={handleInputAdd}> 
              +
         </ButtonForm> 
         <div className={styles.preference__checkbox}>
         <h3>CheckBox группа </h3>
      <CheckBoxForm
       type="checkbox"
       label="1"
       value={inputCheckBox}
       name="текст"
       placeholder="Введите Имя"
       onChange={ handleInputCheckBox}/>
       <CheckBoxForm
       type="checkbox"
       label="2"
       value={inputCheckBox}
       name="текст"
       placeholder="Введите Имя"
       onChange={ handleInputCheckBox}/>
       <CheckBoxForm
       type="checkbox"
       label="3"
       value={inputCheckBox}
       name="текст"
       placeholder="Введите Имя"
       onChange={ handleInputCheckBox}/>
       </div>
       <div>
      <h3>Radio Group</h3>
      <CheckBoxForm
       type="radio"
       label="1"
       value={inputCheckBox}
       name="текст"
       placeholder="Введите Имя"
       onChange={ handleInputCheckBox}/>
        <CheckBoxForm
       type="radio"
       label="2"
       value={inputCheckBox}
       name="текст"
       placeholder="Введите Имя"
       onChange={ handleInputCheckBox}/>
        <CheckBoxForm
       type="radio"
       label="3"
       value={inputCheckBox}
       name="текст"
       placeholder="Введите Имя"
       onChange={ handleInputCheckBox}/>
       </div>
        <div className={styles.button__block}>
          <Link to="/stepper">
            <ButtonForm type="button" disabled={false}>
              Назад
            </ButtonForm>
          </Link>
          <ButtonForm type="submit" disabled={false}>
            Далее
          </ButtonForm>
        </div>
        </form>
    </div>
  );
}
