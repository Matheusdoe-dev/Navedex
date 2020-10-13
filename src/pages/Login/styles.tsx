import styled from "styled-components";
// components
import { Container } from "../../styles/objects/grid";

export const LoginBody = styled.main`
  & {
    &.modal {
      background: var(--gray-900);
      filter: brightness(50%);
    }
  }
`;

export const LoginContainer = styled(Container)`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-content: center;
    flex-direction: column;
    height: 100vh;
  }
`;

export const LoginForm = styled.form`
  & {
    width: 100%;
    padding: calc(var(--gap) * 5) var(--gap-md);
    border: 1px solid var(--gray-900);

    img {
      margin: 0 auto calc(var(--gap) * 5) auto;
    }

    input {
      margin-bottom: var(--gap-md);
    }
  }
`;
