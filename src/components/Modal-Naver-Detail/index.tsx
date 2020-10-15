import React, { HTMLAttributes, useContext } from "react";
// components
import { Link, useParams } from "react-router-dom";
// imgs
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
// styles
import {
  NaverDetailBlock,
  InfoBlock,
  Buttons,
  CloseButton,
  NaverImage,
} from "./styles";
// contexts
import { ModalContext } from "../../hooks/modal";

// naver detail modal props interface
interface NaverDetailProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  age: string;
  companyTime: string;
  projects: string;
  image: string;
  role: string;
}

const ModalNaverDetail: React.FC<NaverDetailProps> = ({
  image,
  age,
  companyTime,
  name,
  projects,
  role,
  children,
  ...props
}) => {
  // getting naver id from route params
  const { naver_id } = useParams();

  // contexts
  const modalContext = useContext(ModalContext);

  return (
    <NaverDetailBlock data-modal="naver-detail" {...props}>
      <NaverImage src={image} alt={name} />
      <InfoBlock>
        <h2>{name}</h2>
        <p>{role}</p>

        <h3>Idade</h3>
        <p>{age}</p>

        <h3>Tempo de empresa</h3>
        <p>{companyTime}</p>

        <h3>Projetos que participou</h3>
        <p>{projects}</p>

        <Buttons>
          <button
            aria-label="Deletar"
            onClick={() => modalContext?.handleActive("delete")}
          >
            <img src={deleteIcon} alt="Deletar" />
          </button>
          <Link to={`/edit-naver/${naver_id}`} aria-label="Editar">
            <img src={editIcon} alt="Editar" />
          </Link>
        </Buttons>
      </InfoBlock>

      <CloseButton as="button" onClick={modalContext?.handleInactive}>
        <img src={closeIcon} alt="Close" />
      </CloseButton>

      {children}
    </NaverDetailBlock>
  );
};

export default ModalNaverDetail;
