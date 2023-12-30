import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { setPhone, setEmail, setErrors } from "./loginSlice";
import React from "react";
import InputForm from "../../сomponents/InputForm/InputForm";
import ButtonForm from "../../сomponents/ButtonForm/ButtonForm";

export const Login = () => {
  const dispatch = useDispatch();

  const phone = useSelector((state: RootState) => state.login.phone);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.target.value));
  };
  const state = useSelector((state: RootState) => state);
  console.log(state);

  const email = useSelector((state: RootState) => state.login.email);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };
  const errors = useSelector((state: RootState) => state.login.errors);
  const handleErrors = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setErrors({ phone: "", email: "" }));
  };
  const navigate = useNavigate();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phone === "" && email === "") {
      dispatch(
        setErrors({ phone: "Введите номер телефона", email: "Введите email" })
      );
    } else if (phone === "") {
      dispatch(setErrors({ phone: "Введите номер телефона" }));
    } else if (email === "") {
      dispatch(setErrors({ email: "Введите email" }));
    } else {
      dispatch(setErrors({ phone: "", email: "" }));
      navigate("/second");
    }
  };

  return (
    <div className={styles.maincontent}>
      <div className={styles.header}>
        <div className={styles.img__logo}>
          <img src="" alt="" className={styles.logo} />
        </div>
        <div className={styles.contacts__info}>
          <h3 className={styles.contacts__name}>Алексей Иванов</h3>
          <ul className={styles.nav__menu}>
            <li>
              {/* <img src="" alt="" style={{ height: '20px', width: '20px'}}/> */}
              Telegram
            </li>
            <li>
              {" "}
              {/* <img src="" alt="" /> */}
              Github
            </li>
            <li>
              {/* <img src="" alt="" /> */}
              Резюме
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.black__line}></div>
      <form onSubmit={handleClick}>
        <InputForm
          type="text"
          label="Номер Телефона"
          value={phone}
          name="phone"
          placeholder="Введите номер телефона"
          onChange={handlePhoneChange}
          error={errors.phone}
          
        />

        <InputForm
          type="text"
          label="Email"
          value={email}
          name="email"
          placeholder="Введите email"
          onChange={handleEmailChange}
          error={errors.email}
        />

        <ButtonForm type="submit" disabled={false}>
          Начать
        </ButtonForm>
      </form>
    </div>
  );
};
