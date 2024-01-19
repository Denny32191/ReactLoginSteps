import styles from "./Personal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import {
  setNickName,
  setUserName,
  setSurName,
  setGender,
  setErrors,
} from "./personalSlice";
import React from "react";
import {InputForm} from "./../../сomponents/InputForm";
import { ButtonForm } from "./../../сomponents/ButtonForm";

import Select from "../../сomponents/Select/Select";

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
    dispatch(setSurName(e.target.value));
  };
  const gender = useSelector((state: RootState) => state.personal.gender);
  const handleGender = (value: string) => {
    dispatch(setGender(value));
  };
  const errors = useSelector((state: RootState) => state.personal.errors);
  const handleErrors = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setErrors({ 
        nickname: "", 
        username: "", 
        surname: "",
        gender: "" })
    );
  };
  const genderOptions = [
    { value: "male", label: "Мужской" },
    { value: "female", label: "Женский" },
  ];
  const isValid =
  username !== "" &&
  nickname !== "" &&
  surname !== "" &&
  gender !== "";

  const navigate = useNavigate();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  

  dispatch(
    setErrors({
      username: !username  ? "Введите Имя" : "",
      nickname: !nickname  ? "Введите никнейм" : "",
      surname: !surname  ? "Введите Фамилию" : "",
      gender: !gender ? "Выберите пол" : ""
    })
  );

  if (isValid) {
    navigate("/preference");
  }

};
  return (
    <div className={styles.personal}>
      {/* <div className={styles.header}>
      </div> */}
      <form onSubmit={handleClick} className={styles.form__block}>
        <InputForm
          type="text"
          label="Никнейм"
          value={nickname}
          name="nickname"
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

        <Select
          onChange={handleGender}
          error={errors.gender}
          value={gender}
          title="Выберите Пол"
          options={genderOptions}
        />

        <div className={styles.button__block}>
          <Link to="/">
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
};

export default Personal;
