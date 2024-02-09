import { ChangeEvent } from "react";
import styles from "./Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSuccess } from "./modalSlice";
import { ButtonForm } from "../ButtonForm";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { createPortal } from "react-dom";

interface ModalProps {
  
  isOpen?: boolean;
  title?: string;
  success?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}



export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  success,
  onClick,
}) => {

  const modalRoot = document.getElementById("modal-root");
  const state = useSelector((state: RootState) => state);
console.log(state);

const handleSucces = (state: RootState) => state.modal.success;

useEffect(() => {
  if (isOpen) {
    // Show modal
    document.body.classList.add("modal-open");
  } else {
    // Hide modal
    document.body.classList.remove("modal-open");
  }
}, [isOpen]);

if (!modalRoot) {
  return null; 
}


  return (
    createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <img
          src={
            success ? "../../assets/Successful.png" : "../../assets/Errors.png"
          }
          alt=""
        />
        <h2>{title} dadasdsa</h2>
        <Link to="/">
          <ButtonForm type="button" onClick={onClick} disabled={false}>
            На главную
          </ButtonForm>
        </Link>
      </div>
    </div>,
     modalRoot
    )
  );
};
