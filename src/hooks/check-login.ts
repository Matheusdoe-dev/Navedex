import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useCheckLogin = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
      localStorage.setItem("login-error", "true");
    }
  }, [history]);
};

export default useCheckLogin;
