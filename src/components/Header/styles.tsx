import styled from "styled-components";
import { Container } from "../../styles/objects/grid";

export const HeaderContainer = styled(Container)`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--gap) * 3) 0;

    a {
      width: 145.12px;
      padding-left: 0;
    }

    button {
      background: none;
      border: none;
    }
  }
`;
