// hooks
import React, {
  useState,
  FormEvent,
  useEffect,
  useContext,
  createContext,
  Dispatch,
} from "react";
// apis
import navedexApi from "../services/navedexApi";
// contexts
import { ModalContext } from "./modal";
import { useHistory } from "react-router-dom";

interface AuthenticationContextInterface {
  setEmail: Dispatch<React.SetStateAction<string>>;
  setPassword: Dispatch<React.SetStateAction<string>>;
  useHandleLogin: (e: FormEvent, callback: () => void) => Promise<void>;
  email: string;
  password: string;
  credentialsError: boolean;
  authenticationStatus: boolean;
  useCheckLogin: () => void;
}

export const AuthenticationContext = createContext<AuthenticationContextInterface | null>(
  null
);

// user authentication/login custom hook
export const Authentication: React.FC = ({ children }) => {
  // user data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // credentials error state
  const [credentialsError, setCredentialsError] = useState(false);
  // authentication process status
  const [authenticationStatus, setAuthenticationStatus] = useState(false);
  // user access without login error state
  const [loginError, setLoginError] = useState(false);

  // using modal context
  const modalContext = useContext(ModalContext);

  // handle authentication
  const useHandleLogin = async (e: FormEvent, callback: () => void) => {
    // prevent form standard refresh on submit
    e.preventDefault();

    // authentication process state
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
        callback();
      })
      .catch((err) => {
        // if it was catch any error, credential error state will be turn on
        alert(err);
        setAuthenticationStatus(false);
        setCredentialsError(true);
      });
  };

  const useCheckLogin = () => {
    const history = useHistory();

    useEffect(() => {
      // Check if it's a token on localStorage
      if (!localStorage.getItem("token")) {
        // If don't have, then the user will be redirect to login page and it will save a error state no localStorage for active the error modal on login page
        history.push("/");
        setTimeout(() => {
          setLoginError(true);
        }, 500);
      }
    }, [history]);
  };

  // check if login error state on localStorage is active (user tried to acess without login). if it's, then the error acess denied modal will be active and localStorage clear.
  useEffect(() => {
    if (loginError) {
      modalContext?.handleActive("error-access-denied");
      setLoginError(false);
    }
  }, [modalContext, loginError]);

  return (
    <AuthenticationContext.Provider
      value={{
        setEmail,
        setPassword,
        useHandleLogin,
        email,
        password,
        credentialsError,
        authenticationStatus,
        useCheckLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
