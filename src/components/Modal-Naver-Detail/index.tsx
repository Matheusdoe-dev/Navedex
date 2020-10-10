import React, { HTMLAttributes } from "react";
// components
import { Link } from "react-router-dom";
// imgs
import deleteIcon from "../../assets/delete-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
// styles
import { NaverDetailBlock, InfoBlock, Buttons } from "./styles";

interface NaverDetailProps extends HTMLAttributes<HTMLDivElement> {
  naverName: string;
  age: string;
  companyTime: string;
  projects: number;
  image: any;
  role: string;
  deleteFunction?: any;
}

const ModalNaverDetail: React.FC<NaverDetailProps> = ({
  image,
  age,
  companyTime,
  naverName,
  projects,
  role,
  children,
  deleteFunction,
  ...props
}) => {
  return (
    <NaverDetailBlock data-modal="naver-detail" {...props}>
      <img src={image} alt={naverName} />
      <InfoBlock>
        <h2>{naverName}</h2>
        <p>{role}</p>

        <h3>Idade</h3>
        <p>{age}</p>

        <h3>Tempo de empresa</h3>
        <p>{companyTime}</p>

        <h3>Projetos que participou</h3>
        <p>{projects}</p>

        <Buttons>
          <button aria-label="Deletar" onClick={deleteFunction}>
            <img src={deleteIcon} alt="Deletar" />
          </button>
          <Link to="/edit-naver/0" aria-label="Editar">
            <img src={editIcon} alt="Editar" />
          </Link>
        </Buttons>
      </InfoBlock>
      {children}
    </NaverDetailBlock>
  );
};

export default ModalNaverDetail;
