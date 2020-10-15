// hooks
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useCheckLogin = () => {
  const history = useHistory();

  useEffect(() => {
    // Check if it's a token on localStorage
    if (!localStorage.getItem("token")) {
      // If don't have, then the user will be redirect to login page and it will save a error state no localStorage for active the error modal on login page
      history.push("/");
      localStorage.setItem("login-error", "true");
    }
  }, [history]);
};

export default useCheckLogin;
