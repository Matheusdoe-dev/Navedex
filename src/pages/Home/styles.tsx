import styled from "styled-components";
// components
import { Container } from "../../styles/objects/grid";
import { Button } from "../../styles/objects/button";

export const HomeBody = styled.div`
  & {
    height: 100%;
    min-height: 100vh;

    &.modal {
      background: var(--gray-900);
      filter: brightness(50%);

      @media (max-width: 600px) {
        min-height: 150vh;
      }
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

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 600.1px) and (max-width: 959.9px) {
      grid-template-columns: 1fr 1fr;
    }
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

export const NoNavers = styled.div`
  & {
    display: flex;
    place-content: center;

    h2 {
      margin-top: var(--gap-xl);
      text-align: center;
    }
  }
`;
