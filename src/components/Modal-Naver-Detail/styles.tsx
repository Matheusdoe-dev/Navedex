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
    padding: var(--gap-md);

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
