import React, { useContext } from "react";
// hooks
import useCheckLogin from "../../hooks/check-login";
import useGetNavers from "../../hooks/index-navers";
import useShowNaver from "../../hooks/show-naver";
import useDeleteNaver from "../../hooks/delete-naver";
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
import { Loading } from "../../styles/objects/loading";
// contexts
import { ModalContext } from "../../hooks/modal";
// components
import Header from "../../components/Header";
const Naver = React.lazy(() => import("../../components/Naver-card"));
const ModalNaverDetail = React.lazy(
  () => import("../../components/Modal-Naver-Detail")
);
const Modal = React.lazy(() => import("../../components/Modal"));

const Home = () => {
  // custom hooks
  useCheckLogin();
  const { navers, indexStatus } = useGetNavers();
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
            {indexStatus === "indexing" ? <Loading loading /> : ""}
            {navers.length > 0 && indexStatus === "indexed" ? (
              <Navers>
                {navers.map((naver) => (
                  <React.Suspense fallback={<Loading loading />}>
                    <Naver
                      key={naver.id}
                      name={naver.name}
                      role={naver.job_role}
                      image={naver.url}
                      id={naver.id}
                    />
                  </React.Suspense>
                ))}
              </Navers>
            ) : (
              ""
            )}
            {navers.length === 0 && indexStatus === "indexed" ? (
              <NoNavers>
                <h2>Nenhum naver foi encontrado.</h2>
              </NoNavers>
            ) : (
              ""
            )}
          </HomeContainer>
        </main>
      </HomeBody>

      {/* modals */}
      <React.Suspense fallback={<Loading loading />}>
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
      </React.Suspense>

      <React.Suspense fallback={<Loading loading />}>
        <Modal
          title="Naver excluído"
          content="Naver excluído com sucesso!"
          modal="deleted"
        />
      </React.Suspense>

      {naver && (
        <React.Suspense fallback={<Loading loading />}>
          <ModalNaverDetail
            name={naver.name}
            role={naver.job_role}
            age={naver.age}
            companyTime={naver.companyTime}
            projects={naver.projects}
            image={naver.image}
          />
        </React.Suspense>
      )}
    </>
  );
};

export default Home;
