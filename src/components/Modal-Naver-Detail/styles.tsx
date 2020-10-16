import styled from "styled-components";
import { Button } from "../../styles/objects/button";

interface NaverDetailModalProps {
  position?: number;
}

export const NaverDetailBlock = styled.section<NaverDetailModalProps>`
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
      top: ${({ position }) =>
        position ? `calc(${position}px + 10%)` : "10%"};
      z-index: 900;

      animation: fade-in 0.3s forwards;

      @media (max-width: 960px) {
        grid-template-columns: 1fr;
        width: 80%;
        height: auto;
        left: 10%;
      }
    }
  }
`;

export const NaverImage = styled.img`
  & {
    height: 503px;

    @media (max-width: 960px) {
      height: auto;
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

    @media (max-width: 600px) {
      top: 1%;
      left: 91%;
    }

    @media (min-width: 600.1px) and (max-width: 959.9px) {
      top: 1%;
    }
  }
`;

export const LoadingNaverDetail = styled.div`
  & {
    margin-top: calc(var(--gap-xl) * 2);

    div {
      margin: 0 auto;
    }
  }
`;
