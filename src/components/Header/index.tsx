import React from "react";
// components
import { Link } from "react-router-dom";
// imgs
import logoImg from "../../assets/logo.svg";
// styles
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Link to="/index">
          <img src={logoImg} alt="Nave.rs" />
        </Link>
        <button>Sair</button>
      </HeaderContainer>
    </header>
  );
};

export default Header;
