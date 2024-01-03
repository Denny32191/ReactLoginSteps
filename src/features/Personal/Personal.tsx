import styles from "./Personal.module.scss";
import Wizard from "../../сomponents/Wizzard/Wizard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { setNickName, setUserName, setSurName, setGender, setErrors } from './personalSlice'
import React from "react";
import InputForm from "../../сomponents/InputForm/InputForm";
import ButtonForm from "./../../сomponents/ButtonForm/ButtonForm";
import DropDown from "../../сomponents/DropDown/DropDown";


export const Personal = () => {
  const dispatch = useDispatch();

  const nickname = useSelector((state: RootState) => state.personal.nickname);
  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNickName(e.target.value));
  };
  const state = useSelector((state: RootState) => state);
  console.log(state);

  const username = useSelector((state: RootState) => state.personal.username);
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value));
  };

  const surname = useSelector((state: RootState) => state.personal.surname);
  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSurName(e.target.value))
  };
const gender = useSelector ((state:RootState) => state.personal.gender);
const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
  dispatch(setGender(e.target.value))
}
const errors = useSelector ((state: RootState) => state.personal.errors);
const handleErrors = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setErrors({ nickname: "", username: "",surname: "",gender: "", }));
}

 const navigate = useNavigate();
const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

   if (nickname === "" && username === "" && surname === "" && gender === "") {
      dispatch(
     setErrors({ username: "Введите Имя", nickname: "Введите никнейм", surname: "Введите Фамилию", gender: "Выберите пол" })
   );
  
  }  else if (username === "") {
    dispatch(setErrors({ username: "Некорректное имя" }));
    } else if ( nickname === "") {
      dispatch(setErrors({  nickname: "Введите никнейм" }));
   }else if (surname === "") {
    dispatch(setErrors({surname: "Введите ФАмилию"}))
   }else if (gender === "") {
    dispatch(setErrors({gender: "Выберите Пол"}))
   }
    else {
   dispatch(setErrors({ username: "", nickname: "", surname: "", gender: "" }));
     navigate("/three");
    }
 };
  return (
    <div className={styles.personal}>
      <div className={styles.header}>
      <Wizard/>
      </div>
      <form onSubmit={handleClick} className={styles.form__block}>
        <InputForm
          type="text"
          label="Никнейм"
          value={nickname}
          name="phone"
          placeholder="Введите Никнейм"
          onChange={handleNickNameChange}
          error={errors.nickname}
        />
        <InputForm
          type="text"
          label="Имя"
          value={username}
          name="phone"
          placeholder="Введите Имя"
          onChange={handleUserNameChange}
          error={errors.username}
        />
        <InputForm
          type="text"
          label="Фамилия"
          value={surname}
          name="Фамилия"
          placeholder="Введите Фамилию"
          onChange={handleSurnameChange}
          error={errors.surname}
        />
       
        <DropDown
        onChange={handleGender}
        error={errors.gender}
        name="Выберите Пол"
        />
        
        <div className={styles.button__block}>
        <ButtonForm type="submit" disabled={false}>
          Назад
        </ButtonForm>
        <ButtonForm type="submit" disabled={false}>
          Далее
        </ButtonForm>
        </div>
      </form>
    </div>
  );
};

export default Personal;
