import styled from "styled-components";

export const ModalBlock = styled.article`
  & {
    display: none;
    opacity: 0;
    transition: 0.3s;

    &.active {
      display: block;
      position: absolute;
      width: 50%;
      left: 344px;
      top: 244px;
      z-index: 900;
      padding: var(--gap-md);

      background: white;
      animation: fade-in 0.3s forwards;

      h2 {
        margin-bottom: calc(var(--gap) * 3);
      }
    }
  }
`;
