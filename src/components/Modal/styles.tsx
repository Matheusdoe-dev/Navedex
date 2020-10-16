import styled from "styled-components";
// styled-components
import { Button } from "../../styles/objects/button";

interface ModalProps {
  position?: number;
}

export const ModalBlock = styled.article<ModalProps>`
  & {
    display: none;
    opacity: 0;
    transition: 0.3s;

    &.active {
      display: block;
      position: absolute;
      width: 50%;
      left: 344px;
      top: ${({ position }) =>
        position ? `calc(${position}px + 30%)` : "30%"};
      z-index: 900;
      padding: var(--gap-md);

      background: white;
      animation: fade-in 0.3s forwards;

      h2 {
        margin-bottom: calc(var(--gap) * 3);
      }

      @media (max-width: 960px) {
        width: 80%;
        left: 10%;
      }
    }
  }
`;

export const CloseButton = styled(Button)`
  & {
    display: flex;
    place-content: center;
    position: absolute;
    width: 24px;
    height: 24px;
    left: 94%;
    top: 5%;
    z-index: 901;
    background: none;
    color: none;

    img {
      position: relative;
      top: -12px;
      width: 24px;
      height: 24px;
    }

    @media (max-width: 960px) {
      left: 91%;
    }
  }
`;
