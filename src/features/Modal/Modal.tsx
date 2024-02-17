import { ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.scss";
import { ModalState, setIsOpen, setStatus } from "./modalSlice";
import { RootState } from "../../app/store";
import { ModalSuccess } from "./../../сomponents/ModalSucces";
import { ModalError } from "../../сomponents/ModalErrors";

export const Modal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  console.log(state);

  const status = useSelector((state: RootState) => state.modal.status);
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);


  const handleCloseModal = (e: React.MouseEvent) => {
    dispatch(setIsOpen(false));
  };

  if (!isOpen) {
    return null;
  }


  return createPortal(
    <div className={styles.modal}>
      {status === "success" && <ModalSuccess onClick={handleCloseModal} />}
      {status === "error" && <ModalError onClick={handleCloseModal} />}
    </div>,
   document.getElementById("modal-root") as HTMLElement
  );
};
