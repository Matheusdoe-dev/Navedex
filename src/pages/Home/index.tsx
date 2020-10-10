import React from "react";
// components
import Header from "../../components/Header";
import Naver from "../../components/Naver-card";
// styles
import {
  HomeContainer,
  HomeHeader,
  Navers,
  HomeBody,
  ModalButtonsBlock,
  CloseButton,
} from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import naverImg from "../../assets/naver_4.jpg";
import Modal from "../../components/Modal";
import naverDetailImg from "../../assets/naver_detail.jpg";
import closeIcon from "../../assets/close-icon.svg";
// hooks
import useModal from "../../hooks/modal";
import ModalNaverDetail from "../../components/Modal-Naver-Detail";

const Home = () => {
  const { handleActive, handleInactive } = useModal();

  return (
    <>
      <HomeBody data-anime="modal" onClick={handleInactive}>
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
                deleteFunction={() => handleActive("delete")}
                showFunction={() => handleActive("naver-detail")}
              />
              <Naver
                name="Juliano Reis"
                role="Front-end Developer"
                image={naverImg}
                deleteFunction={() => handleActive("delete")}
                showFunction={() => handleActive("naver-detail")}
              />
              <Naver
                name="Juliano Reis"
                role="Front-end Developer"
                image={naverImg}
                deleteFunction={() => handleActive("delete")}
                showFunction={() => handleActive("naver-detail")}
              />
              <Naver
                name="Juliano Reis"
                role="Front-end Developer"
                image={naverImg}
                deleteFunction={() => handleActive("delete")}
                showFunction={() => handleActive("naver-detail")}
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
            onClick={handleInactive}
          >
            Cancelar
          </Button>
          <Button
            as="button"
            width="11rem"
            onClick={() => handleActive("deleted")}
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
      >
        <CloseButton as="button" onClick={handleInactive}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>
      </Modal>

      {/* naver detail modal */}
      <ModalNaverDetail
        naverName="Juliano Reis"
        role="Front-end Developer"
        age="27"
        companyTime="3 anos"
        projects={5}
        image={naverDetailImg}
      >
        <CloseButton as="button" onClick={handleInactive}>
          <img src={closeIcon} alt="Close" />
        </CloseButton>
      </ModalNaverDetail>
    </>
  );
};

export default Home;
