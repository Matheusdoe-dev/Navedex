import React, { useContext } from "react";
// hooks
import useEditNaver from "../../hooks/edit-naver";
// imgs
import arrowIcon from "../../assets/arrow-left.svg";
// styles
import {
  EditNaverBody,
  EditNaverContainer,
  EditNaverForm,
  EditNaverTitle,
} from "./styles";
import { Button } from "../../styles/objects/button";
import { Loading } from "../../styles/objects/loading";
// contexts
import { ModalContext } from "../../hooks/modal";
import { AuthenticationContext } from "../../hooks/user-authentication";
// utils
import Regexs from "../../utils/regexs";
// components
import { Link } from "react-router-dom";
import SEO from "../../components/Seo";
import Header from "../../components/Header";
import Input from "../../components/Input";
// lazy components
const Modal = React.lazy(() => import("../../components/Modal"));

const EditNaver = () => {
  // contexts
  const modalContext = useContext(ModalContext);
  const authenticationContext = useContext(AuthenticationContext);

  // custom hooks
  const {
    name,
    setName,
    birthdate,
    setBirthDate,
    admission_date,
    setAdmissionDate,
    job_role,
    setRole,
    project,
    setProject,
    url,
    setUrl,
    handleEditNaverSubmit,
  } = useEditNaver();

  authenticationContext?.useCheckLogin();

  return (
    <>
      <SEO title="Editar naver" description="Editar naver" />

      <EditNaverBody data-anime="modal" onClick={modalContext?.handleInactive}>
        <Header />

        <main>
          <EditNaverContainer>
            <EditNaverTitle>
              <Link to="/navers">
                <img src={arrowIcon} alt="Voltar" />
              </Link>
              <h2>Editar Naver</h2>
            </EditNaverTitle>
            <EditNaverForm id="edit-naver" onSubmit={handleEditNaverSubmit}>
              <div>
                <Input
                  name="name"
                  label="Nome"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  name="birthdate"
                  label="Data de nascimento"
                  placeholder="Data de nascimento (dd/mm/aaaa)"
                  value={birthdate}
                  maxLength={10}
                  onChange={(e) =>
                    setBirthDate(
                      e.target.value.replace(Regexs.dateSchema, "$1/$2/$3")
                    )
                  }
                  required
                />
                <Input
                  name="project"
                  label="Projeto"
                  placeholder="Projeto"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  name="job_role"
                  label="Cargo"
                  placeholder="Cargo"
                  value={job_role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
                <Input
                  name="admission_date"
                  label="Data de admissão"
                  placeholder="Data de admissão (dd/mm/aaaa)"
                  value={admission_date}
                  maxLength={10}
                  onChange={(e) =>
                    setAdmissionDate(
                      e.target.value.replace(Regexs.dateSchema, "$1/$2/$3")
                    )
                  }
                  required
                />
                <Input
                  name="url"
                  type="url"
                  label="URL da foto"
                  placeholder="URL da foto"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
            </EditNaverForm>
            <Button form="edit-naver" as="button" type="submit" width="11rem">
              Salvar
            </Button>
          </EditNaverContainer>
        </main>
      </EditNaverBody>

      {/* modals */}
      <React.Suspense fallback={<Loading loading />}>
        <Modal
          title="Naver atualizado"
          content="Naver atualizado com sucesso!"
          modal="naver-updated"
        />
      </React.Suspense>

      <React.Suspense fallback={<Loading loading />}>
        <Modal
          title="Erro ao editar naver"
          content="Não foi possível editar o naver, tente novamente."
          modal="naver-edit-error"
        />
      </React.Suspense>
    </>
  );
};

export default EditNaver;
