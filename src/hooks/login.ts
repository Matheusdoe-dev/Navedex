import { useState, FormEvent, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
// apis
import navedexApi from "../services/navedexApi";
// hooks
import { ModalContext } from "./modal";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error states
  const [credentialsError, setCredentialsError] = useState(false);

  const history = useHistory();

  const modalContext = useContext(ModalContext);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setCredentialsError(false);

    const response = await navedexApi
      .post("users/login", {
        email,
        password,
      })
      .then((r) => r.data)
      .catch(() => {
        setCredentialsError(true);
      });

    if (response) {
      localStorage.setItem("token", `Bearer ${response.token}`);
      history.push("/navers");
    }
  };

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
  };
};
