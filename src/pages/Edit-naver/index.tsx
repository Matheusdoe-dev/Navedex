import React, { useContext } from "react";
// hooks
import useCheckLogin from "../../hooks/check-login";
import useEditNaver from "../../hooks/edit-naver";
// components
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
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
// contexts
import { ModalContext } from "../../hooks/modal";

const EditNaver = () => {
  // custom hooks
  useCheckLogin();
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

  // contexts
  const modalContext = useContext(ModalContext);

  return (
    <>
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
                  onChange={(e) => setBirthDate(e.target.value)}
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
                  onChange={(e) => setAdmissionDate(e.target.value)}
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
      <Modal
        title="Naver atualizado"
        content="Naver atualizado com sucesso!"
        modal="naver-updated"
      />

      <Modal
        title="Erro ao editar naver"
        content="Não foi possível editar o naver, tente novamente."
        modal="naver-edit-error"
      />
    </>
  );
};

export default EditNaver;
