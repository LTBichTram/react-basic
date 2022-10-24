import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const portalElement = document.querySelector("#overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
