import React from "react";
// imgs
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
// styles
import { Buttons, NaverContainer } from "./styles";

interface NaverProps {
  name: string;
  image?: any;
  role?: string;
}

const NaverCard: React.FC<NaverProps> = ({ name, image, role }) => {
  return (
    <NaverContainer>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <Buttons>
        <button aria-label="Deletar">
          <img src={deleteIcon} alt="Deletar" />
        </button>
        <button aria-label="Editar">
          <img src={editIcon} alt="Editar" />
        </button>
      </Buttons>
    </NaverContainer>
  );
};

export default NaverCard;
