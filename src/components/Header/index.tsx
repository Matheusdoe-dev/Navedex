import React from "react";
import { useHistory } from "react-router-dom";
// components
import { Link } from "react-router-dom";
// imgs
import logoImg from "../../assets/logo.svg";
// styles
import { HeaderContainer } from "./styles";

const Header = () => {
  const history = useHistory();

  // handle user logout function
  const handleLogout = () => {
    // clean the localStorage
    localStorage.clear();

    // redirecting user to login page
    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  };

  return (
    <header>
      <HeaderContainer>
        <Link to="/navers">
          <img src={logoImg} alt="Nave.rs" />
        </Link>
        <button onClick={handleLogout}>Sair</button>
      </HeaderContainer>
    </header>
  );
};

export default Header;
