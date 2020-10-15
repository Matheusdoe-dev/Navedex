import React, { useContext } from "react";
// hooks
import useCheckLogin from "../../hooks/check-login";
import useGetNavers from "../../hooks/index-navers";
import useShowNaver from "../../hooks/show-naver";
import useDeleteNaver from "../../hooks/delete-naver";
// components
import Header from "../../components/Header";
import Naver from "../../components/Naver-card";
import ModalNaverDetail from "../../components/Modal-Naver-Detail";
import Modal from "../../components/Modal";
// styles
import {
  HomeContainer,
  HomeHeader,
  Navers,
  HomeBody,
  ModalButtonsBlock,
  NoNavers,
} from "./styles";
import { Button } from "../../styles/objects/button";
// contexts
import { ModalContext } from "../../hooks/modal";

const Home = () => {
  // custom hooks
  useCheckLogin();
  const { navers } = useGetNavers();
  const { naver } = useShowNaver();
  const { handleDeleteNaver } = useDeleteNaver();

  // contexts
  const modalContext = useContext(ModalContext);

  return (
    <>
      <HomeBody data-anime="modal" onClick={modalContext?.handleInactive}>
        <Header />

        <main>
          <HomeContainer>
            <HomeHeader>
              <h1>Navers</h1>
              <Button to="/add-naver" width="11rem">
                Adicionar Naver
              </Button>
            </HomeHeader>
            {navers.length > 0 ? (
              <Navers>
                {navers.map((naver) => (
                  <Naver
                    key={naver.id}
                    name={naver.name}
                    role={naver.job_role}
                    image={naver.url}
                    id={naver.id}
                  />
                ))}
              </Navers>
            ) : (
              <NoNavers>
                <h2>Nenhum naver foi encontrado.</h2>
              </NoNavers>
            )}
          </HomeContainer>
        </main>
      </HomeBody>

      {/* modals */}
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
            onClick={modalContext?.handleInactive}
          >
            Cancelar
          </Button>
          <Button as="button" width="11rem" onClick={handleDeleteNaver}>
            Excluir
          </Button>
        </ModalButtonsBlock>
      </Modal>

      <Modal
        title="Naver excluído"
        content="Naver excluído com sucesso!"
        modal="deleted"
      />

      {naver && (
        <ModalNaverDetail
          name={naver.name}
          role={naver.job_role}
          age={naver.age}
          companyTime={naver.companyTime}
          projects={naver.projects}
          image={naver.image}
        />
      )}
    </>
  );
};

export default Home;
