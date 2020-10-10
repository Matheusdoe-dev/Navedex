import React from "react";
// components
import Header from "../../components/Header";
import EditNaverForm from "../../components/Edit-Naver-Form";
// styles
import { AddNaverBody } from "./styles";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";
import Modal from "../../components/Modal";

const AddNaver = () => {
  return (
    <ModalContextConsumer>
      {(modalContext) =>
        modalContext && (
          <>
            <AddNaverBody
              data-anime="modal"
              onClick={modalContext.handleInactive}
            >
              <Header />
              <EditNaverForm title="Adicionar Naver" />
            </AddNaverBody>

            <Modal
              title="Naver criado"
              content="Naver criado com sucesso!"
              modal="naver-updated"
            />
          </>
        )
      }
    </ModalContextConsumer>
  );
};

export default AddNaver;
