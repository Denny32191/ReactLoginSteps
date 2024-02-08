import { ChangeEvent, ReactNode, useEffect, useMemo } from "react";
import styles from "./Modal.module.scss";
import { ButtonForm } from "../ButtonForm";
import { Link, useNavigate } from "react-router-dom";



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
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <img
          src={success ? "../../assets/Successful.png" : "../../assets/Errors.png"}
          alt=""
        />
        <h2>{title} dadasdsa</h2>
        <Link to="/">
          <ButtonForm type="button" onClick={onClick} disabled={false}>
            На главную
          </ButtonForm>
        </Link>
      </div>
    </div>
  );
};
