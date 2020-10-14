import React from "react";
// components
import Input from "../../components/Input";
import Modal from "../../components/Modal";
// imgs
import logoImg from "../../assets/logo.svg";
// styles
import { LoginContainer, LoginForm, LoginBody } from "./styles";
import { Button } from "../../styles/objects/button";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";
import { useLogin } from "../../hooks/login";

const Login = () => {
  const {
    handleLogin,
    setEmail,
    setPassword,
    email,
    password,
    credentialsError,
  } = useLogin();

  return (
    <ModalContextConsumer>
      {(modalContext) =>
        modalContext && (
          <>
            <LoginBody data-anime="modal" onClick={modalContext.handleInactive}>
              <LoginContainer>
                <LoginForm onSubmit={handleLogin}>
                  <img src={logoImg} alt="Nave.rs" />
                  <Input
                    aria-label="E-mail"
                    label="E-mail"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="E-mail"
                    error={
                      credentialsError
                        ? "E-mail ou senha invalida, tente novamente!"
                        : ""
                    }
                    required
                  />
                  <Input
                    aria-label="Senha"
                    label="Senha"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Senha"
                    error={
                      credentialsError
                        ? "E-mail ou senha invalida, tente novamente!"
                        : ""
                    }
                    required
                  />
                  <Button as="button" type="submit">
                    Entrar
                  </Button>
                </LoginForm>
              </LoginContainer>
            </LoginBody>

            <Modal
              title="Acesso negado"
              content="É necessário estar logado para acessar a aplicação"
              modal="error-access-denied"
            />
          </>
        )
      }
    </ModalContextConsumer>
  );
};

export default Login;
