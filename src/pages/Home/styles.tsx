import styled from "styled-components";
// components
import { Container } from "../../styles/objects/grid";
import { Button } from "../../styles/objects/button";

export const HomeBody = styled.div`
  & {
    height: 100vh;

    &.modal {
      background: var(--gray-900);
      filter: brightness(50%);
    }
  }
`;

export const HomeContainer = styled(Container)`
  & {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeHeader = styled.section`
  & {
    display: flex;
    justify-content: space-between;
    margin-bottom: calc(var(--gap) * 5);
  }
`;

export const Navers = styled.section`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: var(--gap-md);
    row-gap: var(--gap-md);
  }
`;

export const ModalButtonsBlock = styled.div`
  & {
    display: flex;
    justify-content: flex-end;
    margin-top: calc(var(--gap) * 5);

    button:last-child {
      margin-left: calc(var(--gap) * 3);
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
  }
`;
