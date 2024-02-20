import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { setSelfInput, setErrors } from "./descriptionSlice";
import styles from "./Description.module.scss";
import React, { useEffect } from "react";
import { AInputTextArea } from "./../../сomponents/InputTextArea";
import { ButtonForm } from "../../сomponents/ButtonForm";
import { setStatus } from './../Modal/modalSlice'
import { Modal } from "../Modal";
import { setIsOpen } from "../Modal/modalSlice";
import { error } from "console";

export const Description = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const status = useSelector((state: RootState) => state.modal.status);
  const handleIsOpen = (e: React.ChangeEvent<MouseEvent>) => {
    dispatch(setIsOpen(false));
  };

  const state = useSelector((state: RootState) => state);
  console.log(state);

  const selfInput = useSelector(
    (state: RootState) => state.description.selfInput
  );
  const handleSelfInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelfInput(e.target.value));
  };

  const openStatusModal = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();

        if (random < 0.5) {
          resolve({
            status: "success",
          });
        } else {
          reject({
            status: "error",
          });
        }
      }, Math.random() * 1000);
    });
  };

  const errors = useSelector((state: RootState) => state.description.errors);
  const handleErrors = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setErrors({
        selfInput: "",
      })
    );
  };
  const isValid = selfInput;

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setErrors({
        selfInput: !selfInput ? "Укажите что нибудь о себе)" : "",
      })
    );
    if (isValid) {
      openStatusModal()
      .then((status) => {
        dispatch(setStatus(status));
        dispatch(setIsOpen(true));
      })
      .catch((error) => {
        dispatch(setStatus(error));
        dispatch(setIsOpen(true));
      });
    }
  };

  return (
    <div className={styles.description}>
      <form action="" onSubmit={handleSubmit}>
        <p>О Себе</p>
        <AInputTextArea
          type="text"
          onChange={handleSelfInputChange}
          value={selfInput}
          name="Abou"
          placeholder="Введите данные "
          error={errors.selfInput}
        />
        <div className={styles.button__block}>
          <Link to="/">
            <ButtonForm type="button">Назад</ButtonForm>
          </Link>
          <ButtonForm type="submit">Далее</ButtonForm>
        </div>
      </form>
    </div>
  );
};
