import styled from "styled-components";

interface ButtonProps {
  width?: string;
  background?: string;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  & {
    display: block;
    padding: var(--gap-sm) var(--gap-md);
    width: ${({ width }) => (width ? width : `100%`)};
    border-radius: 0;
    border: 0;
    background: ${({ background }) =>
      background ? background : `var(--gray-900)`};
    color: ${({ color }) => (color ? color : `white`)};
    text-align: center;
    transition: 0.2s;

    :hover {
      transition: 0.2s;
      background: var(--gray-800);
    }
  }
`;
