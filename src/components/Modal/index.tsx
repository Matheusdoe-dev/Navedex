import React from "react";
// imgs
import closeIcon from "../../assets/close-icon.svg";
// styles
import { ModalBlock, CloseButton } from "./styles";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";

interface ModalProps {
  title: string;
  content: string;
  modal: string | any;
}

const Modal: React.FC<ModalProps> = ({ title, content, children, modal }) => {
  return (
    <ModalContextConsumer>
      {(modalContext) =>
        modalContext && (
          <ModalBlock data-modal={modal}>
            <h2>{title}</h2>
            <p>{content}</p>
            <CloseButton as="button" onClick={modalContext.handleInactive}>
              <img src={closeIcon} alt="Close" />
            </CloseButton>
            {children}
          </ModalBlock>
        )
      }
    </ModalContextConsumer>
  );
};

export default Modal;
