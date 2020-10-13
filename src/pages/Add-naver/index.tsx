import React from "react";
// components
import Header from "../../components/Header";
import EditNaverForm from "../../components/Edit-Naver-Form";
// styles
import { AddNaverBody } from "./styles";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";
import Modal from "../../components/Modal";
// utils
import useCheckLogin from "../../hooks/check-login";

const AddNaver = () => {
  useCheckLogin();

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
