import { ChangeEvent } from "react";
import { ButtonForm } from "../ButtonForm";
import styles from "./ModalSuccess.module.scss";
import { Link } from "react-router-dom";
import icons8 from "../../assets/icons8.png";

interface ModalSuccessProps {
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
        
        <img className={styles.modal__img} src={icons8} alt="" />
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
