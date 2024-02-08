import { ChangeEvent, ReactNode } from "react";
import styles from './Modal.module.scss'

interface ModalProps {
    isOpen:boolean;
    title: string;
    description:string;
    onClick: (e: React.MouseEvent) => void;
}

export const Modal: React.FC<ModalProps> = ({ 
    isOpen, title,description,onClick }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                
            </div>
        </div>
    )
}