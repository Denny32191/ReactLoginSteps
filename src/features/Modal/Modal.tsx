import { ChangeEvent } from "react";
import styles from "./Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ButtonForm } from "../../сomponents/ButtonForm";
import { ModalState, setIsOpen, setStatus } from "./modalSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RootState } from "../../app/store";
import { createPortal } from "react-dom";
import { ModalSuccess } from "./../../сomponents/ModalSucces";
import { ModalError } from "../../сomponents/ModalErrors";

export const Modal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  console.log(state);

  const status = useSelector((state: RootState) => state.modal.status);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const OpenStatusModal = () => {
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
  const handleCloseModal = (e: React.MouseEvent) => {
    dispatch(setIsOpen(false));
  };

  if (!isOpen) {
    return null;
  }

  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return createPortal(
    <div className={styles.modal}>
      {status === "success" && <ModalSuccess onClick={handleCloseModal} />}
      {status === "error" && <ModalError onClick={handleCloseModal} />}
    </div>,
    modalRoot
  );
};
