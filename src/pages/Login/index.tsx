import React from "react";
// components
import Input from "../../components/Input";
// imgs
import logoImg from "../../assets/logo.svg";
// styles
import { LoginContainer, LoginForm } from "./styles";
import { Button } from "../../styles/objects/button";

const Login = () => {
  return (
    <main>
      <LoginContainer>
        <div></div>
        <LoginForm>
          <img src={logoImg} alt="Nave.rs" />
          <Input label="E-mail" name="email" type="email" required />
          <Input label="Senha" name="password" type="password" required />
          <Button as="button" type="submit">
            Entrar
          </Button>
        </LoginForm>
      </LoginContainer>
    </main>
  );
};

export default Login;
