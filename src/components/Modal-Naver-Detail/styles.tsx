import styled from "styled-components";
import { Button } from "../../styles/objects/button";

export const NaverDetailBlock = styled.section`
  & {
    display: none;

    &.active {
      display: grid;
      grid-template-columns: 1fr 1fr;

      width: 73.7%;
      height: 503px;
      background: white;

      position: absolute;
      left: 137px;
      top: 109px;
      z-index: 900;

      animation: fade-in 0.3s forwards;
    }
  }
`;

export const InfoBlock = styled.article`
  & {
    padding: var(--gap-md) var(--gap-md) 0 var(--gap-md);

    h2 {
      margin-bottom: var(--gap-sm);
    }

    p {
      margin-bottom: calc(var(--gap) * 3);
    }

    h3 {
      margin-bottom: var(--gap);
    }
  }
`;

export const Buttons = styled.div`
  & {
    display: flex;
    justify-content: flex-start;
    margin-top: var(--gap-xl);

    button,
    a {
      background: 0;
      border: 0;

      :first-child {
        margin-right: var(--gap-sm);
      }
    }

    button {
      padding-left: 0;
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
