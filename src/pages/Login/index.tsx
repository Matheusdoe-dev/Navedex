import React, { useContext, FormEvent } from "react";
// hooks
import { useHistory } from "react-router-dom";
// imgs
import logoImg from "../../assets/logo.svg";
// styles
import { LoginContainer, LoginForm, LoginBody, LoginLoading } from "./styles";
import { Button } from "../../styles/objects/button";
import { Loading } from "../../styles/objects/loading";
// contexts
import { ModalContext } from "../../hooks/modal";
import { AuthenticationContext } from "../../hooks/user-authentication";
// components
import Input from "../../components/Input";
import Modal from "../../components/Modal";

const Login = () => {
  // contexts
  const authenticationContext = useContext(AuthenticationContext);
  const modalContext = useContext(ModalContext);

  const history = useHistory();

  return (
    <>
      <LoginBody data-anime="modal" onClick={modalContext?.handleInactive}>
        <LoginContainer>
          <LoginForm
            onSubmit={(e: FormEvent) => {
              authenticationContext?.useHandleLogin(e, () => {
                history.push("/navers");
              });
            }}
          >
            <img src={logoImg} alt="Nave.rs" />
            <Input
              aria-label="E-mail"
              label="E-mail"
              name="email"
              type="email"
              onChange={(e) => authenticationContext?.setEmail(e.target.value)}
              value={authenticationContext?.email}
              placeholder="E-mail"
              error={
                authenticationContext?.credentialsError
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
              onChange={(e) =>
                authenticationContext?.setPassword(e.target.value)
              }
              value={authenticationContext?.password}
              placeholder="Senha"
              error={
                authenticationContext?.credentialsError
                  ? "E-mail ou senha invalida, tente novamente!"
                  : ""
              }
              required
            />
            <Button as="button" type="submit">
              Entrar
            </Button>
            {authenticationContext?.authenticationStatus ? (
              <LoginLoading>
                <Loading loading />
              </LoginLoading>
            ) : (
              ""
            )}
          </LoginForm>
        </LoginContainer>
      </LoginBody>

      {/* modals */}
      <Modal
        title="Acesso negado"
        content="É necessário estar logado para acessar a aplicação"
        modal="error-access-denied"
      />
    </>
  );
};

export default Login;
