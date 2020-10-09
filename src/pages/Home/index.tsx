import React from "react";
// components
import Header from "../../components/Header";
import Naver from "../../components/Naver-card";
// styles
import { HomeContainer, HomeHeader, Navers } from "./styles";
import { Button } from "../../styles/objects/button";
// imgs
import naverImg from "../../assets/naver_4.jpg";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <HomeContainer>
          <HomeHeader>
            <h1>Navers</h1>
            <Button width="auto">Adicionar Naver</Button>
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
    </>
  );
};

export default Home;
