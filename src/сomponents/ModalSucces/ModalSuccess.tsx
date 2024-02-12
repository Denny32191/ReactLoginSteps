import { ChangeEvent } from "react";
import { ButtonForm } from "../ButtonForm";
import styles from "./ModalSuccess.module.scss";
import { Link, useNavigate } from "react-router-dom";

interface ModalSuccessProps  {
  isOpen?: boolean;
  status?: "success" | "error" | null;
  onClick?: (e: React.MouseEvent) => void;
}
export const ModalSuccess: React.FC<ModalSuccessProps> = ({
  isOpen,
  status,
  onClick,
  }) => {
  

    return (
        <div className={styles.modal}>
        <div className={styles.modal__content}>
          <img src="./../../assets/Succeful.png" alt="" />
          <h2>Форма Успешно Отправлена</h2>
          <Link to="/description">
            <ButtonForm type="button" onClick={onClick} disabled={false}>
              На главную
            </ButtonForm>
          </Link>
        </div>
      </div>
    );
  };
  export default ModalSuccess;
  