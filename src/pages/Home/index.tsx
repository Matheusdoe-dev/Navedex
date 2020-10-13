import React from "react";
// components
import Header from "../../components/Header";
import Naver from "../../components/Naver-card";
import ModalNaverDetail from "../../components/Modal-Naver-Detail";
// styles
import {
  HomeContainer,
  HomeHeader,
  Navers,
  HomeBody,
  ModalButtonsBlock,
} from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import naverImg from "../../assets/naver_4.jpg";
import Modal from "../../components/Modal";
import naverDetailImg from "../../assets/naver_detail.jpg";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";
// utils
import useCheckLogin from "../../hooks/check-login";

const Home = () => {
  useCheckLogin();

  return (
    <ModalContextConsumer>
      {(modalContext) =>
        modalContext && (
          <>
            <HomeBody data-anime="modal" onClick={modalContext.handleInactive}>
              <Header />

              <main>
                <HomeContainer>
                  <HomeHeader>
                    <h1>Navers</h1>
                    <Button to="/add-naver" width="11rem">
                      Adicionar Naver
                    </Button>
                  </HomeHeader>
                  <Navers>
                    <Naver
                      name="Juliano Reis"
                      role="Front-end Developer"
                      image={naverImg}
                    />
                    <Naver
                      name="Juliano Reis"
                      role="Front-end Developer"
                      image={naverImg}
                    />
                    <Naver
                      name="Juliano Reis"
                      role="Front-end Developer"
                      image={naverImg}
                    />
                    <Naver
                      name="Juliano Reis"
                      role="Front-end Developer"
                      image={naverImg}
                    />
                  </Navers>
                </HomeContainer>
              </main>
            </HomeBody>

            {/* modals */}
            {/* naver confirm delete modal */}
            <Modal
              title="Excluir Naver"
              content="Tem certeza que deseja excluir este Naver?"
              modal="delete"
            >
              <ModalButtonsBlock>
                <Button
                  as="button"
                  width="11rem"
                  background="white"
                  color="var(--gray-900)"
                  border="1px solid var(--gray-900)"
                  onClick={modalContext.handleInactive}
                >
                  Cancelar
                </Button>
                <Button
                  as="button"
                  width="11rem"
                  onClick={() => modalContext.handleActive("deleted")}
                >
                  Excluir
                </Button>
              </ModalButtonsBlock>
            </Modal>

            {/* naver deleted modal */}
            <Modal
              title="Naver excluído"
              content="Naver excluído com sucesso!"
              modal="deleted"
            />

            {/* naver detail modal */}
            <ModalNaverDetail
              naverName="Juliano Reis"
              role="Front-end Developer"
              age="27"
              companyTime="3 anos"
              projects={5}
              image={naverDetailImg}
            />
          </>
        )
      }
    </ModalContextConsumer>
  );
};

export default Home;
