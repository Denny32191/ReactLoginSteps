import { ChangeEvent } from "react";
import styles from "./Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ButtonForm } from "../../сomponents/ButtonForm";
import { setIsOpen } from "./modalSlice";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { createPortal } from "react-dom";


  interface ModalProps {
  
    isOpenModal?: boolean;
    title?: string;
    statusModal?:boolean
    success?: boolean;
    onClick?: (e: React.MouseEvent) => void;
  }
  
  
  
  export const Modal: React.FC<ModalProps> = ({
    isOpenModal,
    statusModal,
    title,
    success,
    onClick,
  }) => {
 
    const status = useSelector((state: RootState) => state.modal.status);
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
 

    const modalRoot = document.getElementById("modal-root");
    const state = useSelector((state: RootState) => state);
  console.log(state);
  
  return (
    <aside className={styles.modal}>
      {status === "succes" && (
      <div className={styles.modal__content}>
        <img src="./../../assets/Succeful.png" alt="" />
        <h2> Форма Успешно Отправлена </h2>
        <Link to="/">
          <ButtonForm type="button"  disabled={false}>
            На главную
          </ButtonForm>
        </Link>
      </div>
      )}
      {status === "errors" && (
      <div className={styles.modal__content}>
        <img src="./../../assets/Errorss.png" alt="" />
        <h2> Ошибка</h2>
        <Link to="/">
          <ButtonForm type="button"  disabled={false}>
            На главную
          </ButtonForm>
        </Link>
      </div>
      )}
    </aside>
    
  );
};
