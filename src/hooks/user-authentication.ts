// hooks
import { useState, FormEvent, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// contexts
import { ModalContext } from "./modal";

// user authentication/login custom hook
const useLogin = () => {
  // user data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // credentials error state
  const [credentialsError, setCredentialsError] = useState(false);

  // authentication process status
  const [authenticationStatus, setAuthenticationStatus] = useState(false);

  const history = useHistory();

  // using modal context
  const modalContext = useContext(ModalContext);

  // handle authentication
  const handleLogin = async (e: FormEvent) => {
    // prevent form standard refresh on submit
    e.preventDefault();
    setAuthenticationStatus(true);

    // if as a credential error active, it will be turn off on login submit
    setCredentialsError(false);

    // authentication on navedex api
    await navedexApi
      .post("users/login", {
        email,
        password,
      })
      .then((r) => r.data)
      .then((r) => {
        setAuthenticationStatus(false);
        localStorage.setItem("token", `Bearer ${r.token}`);
        history.push("/navers");
      })
      .catch(() => {
        // if it was catch any error, credential error state will be turn on
        setAuthenticationStatus(false);
        setCredentialsError(true);
      });
  };

  // check if login error state on localStorage is active (user tried to acess without login). if it's, then the error acess denied modal will be active and localStorage clear.
  useEffect(() => {
    if (localStorage.getItem("login-error")) {
      modalContext?.handleActive("error-access-denied");
      localStorage.clear();
    }
  }, [modalContext]);

  return {
    setEmail,
    setPassword,
    handleLogin,
    email,
    password,
    credentialsError,
    authenticationStatus,
  };
};

export default useLogin;
