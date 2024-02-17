import { ChangeEvent } from "react";
import { ButtonForm } from "../ButtonForm";
import styles from "./ModalError.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Errorss  from "./../../assets/Errorss.png"

interface ModalErrorProps {
  isOpen?: boolean;
  status?: "success" | "error" | null;
  onClick?: (e: React.MouseEvent) => void;
}
export const ModalError: React.FC<ModalErrorProps> = ({
  isOpen,
  status,
  onClick,
}) => {
  return (
    
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <img src={Errorss} alt="" />
        <h2>Ошибка</h2>
        <Link to="/description">
          <ButtonForm type="button" onClick={onClick} disabled={false}>
            На главную
          </ButtonForm>
        </Link>
      </div>
    </div>
  );
};
export default ModalError;