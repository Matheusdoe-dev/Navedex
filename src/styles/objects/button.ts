import styled from "styled-components";
// components
import { Link } from "react-router-dom";

interface ButtonProps {
  width?: string;
  background?: string;
  color?: string;
  border?: string;
}

export const Button = styled(Link)<ButtonProps>`
  & {
    display: block;
    padding: var(--gap-sm) var(--gap-sm);
    width: ${({ width }) => (width ? width : `100%`)};
    border-radius: 0;
    border: ${({ border }) => (border ? border : `0`)};
    background: ${({ background }) =>
      background ? background : `var(--gray-900)`};
    color: ${({ color }) => (color ? color : `white`)};
    text-align: center;
    transition: 0.2s;

    :hover {
      transition: 0.2s;
      background: var(--gray-800);
    }

    @media (max-width: 960px) {
      padding: var(--gap-md) var(--gap-sm);
    }
  }
`;
