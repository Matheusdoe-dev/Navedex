import React, { useContext } from "react";
// components
import { Link, useHistory } from "react-router-dom";
// imgs
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
// styles
import { Buttons, NaverContainer, NaverInfo } from "./styles";
// contexts
import { ModalContext } from "../../hooks/modal";

// Naver card props interface
interface NaverProps {
  name: string;
  image?: any;
  role?: string;
  id?: string;
}

const NaverCard: React.FC<NaverProps> = ({ name, image, role, id }) => {
  const history = useHistory();

  // contexts
  const modalContext = useContext(ModalContext);

  return (
    <NaverContainer>
      <NaverInfo
        onClick={() => {
          history.push(`/navers/${id}`);
          modalContext?.handleActive("naver-detail");
        }}
      >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
      </NaverInfo>
      <Buttons>
        <button
          aria-label="Deletar"
          onClick={() => {
            modalContext?.handleActive("delete");
            history.push(`/navers/${id}`);
          }}
        >
          <img src={deleteIcon} alt="Deletar" />
        </button>
        <Link to={`/edit-naver/${id}`} aria-label="Editar">
          <img src={editIcon} alt="Editar" />
        </Link>
      </Buttons>
    </NaverContainer>
  );
};

export default NaverCard;
