import React from "react";
// components
import Header from "../../components/Header";
import EditNaverForm from "../../components/Edit-Naver-Form";
import Modal from "../../components/Modal";
// styles
import { EditNaverBody } from "./styles";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";

const EditNaver = () => {
  return (
    <ModalContextConsumer>
      {(modalContext) =>
        modalContext && (
          <>
            <EditNaverBody
              data-anime="modal"
              onClick={modalContext.handleInactive}
            >
              <Header />

              <EditNaverForm title="Editar Naver" />
            </EditNaverBody>

            <Modal
              title="Naver atualizado"
              content="Naver atualizado com sucesso!"
              modal="naver-updated"
            />
          </>
        )
      }
    </ModalContextConsumer>
  );
};

export default EditNaver;
