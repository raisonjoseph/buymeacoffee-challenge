import React from "react";
import ReactModal from "react-modal";
import Button from "../Button.tsx";
import styles from "./styles.module.scss";

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  title,
  children,
  isOpen,
  onClose,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={{
        base: styles.modalBase,
        afterOpen: styles.modalAfterOpen,
        beforeClose: styles.modalBeforeClose,
      }}
      overlayClassName={{
        base: styles.overlayBase,
        afterOpen: styles.overlayAfterOpen,
        beforeClose: styles.overlayBeforeClose,
      }}
      closeTimeoutMS={300}
    >
      <div className={styles.modalBody}>
        <div className={styles.modalHeader}>
          <h5 className={styles.modalTitle}>{title}</h5>
          <Button type="icon" onClick={() => onClose?.()}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </Button>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
