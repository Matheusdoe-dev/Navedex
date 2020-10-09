import React from "react";
// components
import { Link } from "react-router-dom";
import Input from "../../components/Input";
// imgs
import arrowIcon from "../../assets/arrow-left.svg";
// styles
import { AddNaverContainer, AddNaverForm, AddNaverTitle } from "./styles";
import { Button } from "../../styles/objects/button";

interface EditForm {
  title: string;
}

const EditNaverForm: React.FC<EditForm> = ({ title }) => {
  return (
    <main>
      <AddNaverContainer>
        <AddNaverTitle>
          <Link to="/index">
            <img src={arrowIcon} alt="Voltar" />
          </Link>
          <h2>{title}</h2>
        </AddNaverTitle>
        <AddNaverForm>
          <div>
            <Input name="name" label="Nome" placeholder="Nome" />
            <Input name="age" label="Idade" placeholder="Idade" />
            <Input
              name="projects"
              label="Projetos que participou"
              placeholder="Projetos que participou"
            />
          </div>
          <div>
            <Input name="position" label="Cargo" placeholder="Cargo" />
            <Input name="age" label="Idade" placeholder="Idade" />
            <Input
              name="image"
              label="URL da foto do Naver"
              placeholder="URL da foto do Naver"
            />
          </div>
        </AddNaverForm>
        <Button as="button" type="submit" width="11rem">
          Salvar
        </Button>
      </AddNaverContainer>
    </main>
  );
};

export default EditNaverForm;
