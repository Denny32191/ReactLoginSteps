import styles from "./Personal.module.scss";
import Wizard from "../../сomponents/Wizzard/Wizard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { setNickName, setUserName, setSurName, setGender, setErrors } from './personalSlice'
import React from "react";
import InputForm from "../../сomponents/InputForm/InputForm";
import ButtonForm from "../../сomponents/ButtonForm/ButtonForm";
import DropDown from "../../сomponents/DropDown/DropDown";

export const Personal = () => {
  const dispatch = useDispatch();

  const nickname = useSelector((state: RootState) => state.personal.nickname);
  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNickName(e.target.value));
  };

  const username = useSelector((state: RootState) => state.personal.username);
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value));
  };

  const surname = useSelector((state: RootState) => state.personal.surname);
  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSurName(e.target.value))
  };
const gender = useSelector ((state:RootState) => state.personal.surname);
const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setGender(e.target.value))
}
  return (
    <div className={styles.personal}>
      <div className={styles.header}>
      <Wizard/>
      </div>
      <form className={styles.form__block}>
        <InputForm
          type="text"
          label="Номер Телефона"
          value={nickname}
          name="phone"
          placeholder="Введите номер телефона"
          onChange={handleNickNameChange}
        />
        <InputForm
          type="text"
          label="Номер Телефона"
          value={username}
          name="phone"
          placeholder="Введите номер телефона"
          onChange={handleUserNameChange}
        />
        <InputForm
          type="text"
          label="Номер Телефона"
          value={surname}
          name="phone"
          placeholder="Введите номер телефона"
          onChange={handleSurnameChange}
        />
        <InputForm
          type="text"
          label="Номер Телефона"
          value={gender}
          name="phone"
          placeholder="Введите номер телефона"
          onChange={handleGender}
        />
        <DropDown/>
      </form>
    </div>
  );
};

export default Personal;
