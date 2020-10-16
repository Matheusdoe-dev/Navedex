import React, { useContext } from "react";
// imgs
import closeIcon from "../../assets/close-icon.svg";
// styles
import { ModalBlock, CloseButton } from "./styles";
// context
import { ModalContext } from "../../hooks/modal";

// modal props interface
interface ModalProps {
  title: string;
  content: string;
  modal: string | any;
}

const Modal: React.FC<ModalProps> = ({ title, content, children, modal }) => {
  const modalContext = useContext(ModalContext);

  return (
    <ModalBlock data-modal={modal} position={modalContext?.position}>
      <h2>{title}</h2>
      <p>{content}</p>
      <CloseButton as="button" onClick={modalContext?.handleInactive}>
        <img src={closeIcon} alt="Close" />
      </CloseButton>
      {children}
    </ModalBlock>
  );
};

export default Modal;
