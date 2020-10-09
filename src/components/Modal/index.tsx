import React from "react";
// styles
import { ModalBlock } from "./styles";

interface ModalProps {
  title: string;
  content: string;
  modal: string;
}

const Modal: React.FC<ModalProps> = ({ title, content, children, modal }) => {
  return (
    <ModalBlock data-modal={modal}>
      <h2>{title}</h2>
      <p>{content}</p>
      {children}
    </ModalBlock>
  );
};

export default Modal;
