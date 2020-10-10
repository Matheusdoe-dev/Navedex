import React from "react";
// components
import { Link } from "react-router-dom";
// imgs
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
// styles
import { Buttons, NaverContainer, NaverInfo } from "./styles";
// hooks
import { ModalContextConsumer } from "../../hooks/modal";

// interfaces
interface NaverProps {
  name: string;
  image?: any;
  role?: string;
}

const NaverCard: React.FC<NaverProps> = ({ name, image, role }) => {
  return (
    <ModalContextConsumer>
      {(modalContext) =>
        modalContext && (
          <NaverContainer>
            <NaverInfo
              onClick={() => modalContext.handleActive("naver-detail")}
            >
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <p>{role}</p>
            </NaverInfo>
            <Buttons>
              <button
                aria-label="Deletar"
                onClick={() => modalContext.handleActive("delete")}
              >
                <img src={deleteIcon} alt="Deletar" />
              </button>
              <Link to="/edit-naver/0" aria-label="Editar">
                <img src={editIcon} alt="Editar" />
              </Link>
            </Buttons>
          </NaverContainer>
        )
      }
    </ModalContextConsumer>
  );
};

export default NaverCard;
