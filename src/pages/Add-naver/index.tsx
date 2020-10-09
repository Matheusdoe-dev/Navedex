import React from "react";
// components
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Header from "../../components/Header";
// imgs
import arrowIcon from "../../assets/arrow-left.svg";
// styles
import { AddNaverContainer, AddNaverForm, AddNaverTitle } from "./styles";
import { Button } from "../../styles/objects/button";

const AddNaver = () => {
  return (
    <>
      <Header />

      <main>
        <AddNaverContainer>
          <AddNaverTitle>
            <Link to="/index">
              <img src={arrowIcon} alt="" />
            </Link>
            <h2>Adicionar Naver</h2>
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
          <Button width="20%">Salvar</Button>
        </AddNaverContainer>
      </main>
    </>
  );
};

export default AddNaver;
