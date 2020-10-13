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

  const handleLogout = () => {
    localStorage.clear();

    if (!localStorage.getItem("token")) {
      history.push("/");
    }
  };

  return (
    <header>
      <HeaderContainer>
        <Link to="/index">
          <img src={logoImg} alt="Nave.rs" />
        </Link>
        <button onClick={handleLogout}>Sair</button>
      </HeaderContainer>
    </header>
  );
};

export default Header;
