import React from "react";
// components
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
// imgs
import arrowIcon from "../../assets/arrow-left.svg";
// styles
import {
  AddNaverBody,
  AddNaverContainer,
  AddNaverForm,
  AddNaverTitle,
} from "./styles";
import { Button } from "../../styles/objects/button";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";
import useCheckLogin from "../../hooks/check-login";
import useCreateNaver from "../../hooks/create-naver";

const AddNaver = () => {
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
    handleCreateNaverSubmit,
  } = useCreateNaver();

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

              <main>
                <AddNaverContainer>
                  <AddNaverTitle>
                    <Link to="/navers">
                      <img src={arrowIcon} alt="Voltar" />
                    </Link>
                    <h2>Adicionar Naver</h2>
                  </AddNaverTitle>
                  <AddNaverForm
                    id="create-naver"
                    onSubmit={handleCreateNaverSubmit}
                  >
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
                  </AddNaverForm>
                  <Button
                    form="create-naver"
                    as="button"
                    type="submit"
                    width="11rem"
                  >
                    Salvar
                  </Button>
                </AddNaverContainer>
              </main>
            </AddNaverBody>

            <Modal
              title="Naver criado"
              content="Naver criado com sucesso!"
              modal="naver-created"
            />

            <Modal
              title="Erro ao criar o naver"
              content="Não foi possível criar o naver, tente novamente."
              modal="naver-create-error"
            />
          </>
        )
      }
    </ModalContextConsumer>
  );
};

export default AddNaver;
