import styled from "styled-components";
// styled-components
import { Container } from "../../styles/objects/grid";

export const LoginBody = styled.main`
  & {
    min-height: 100vh;

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

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const LoginForm = styled.form`
  & {
    grid-column-start: 2;
    width: 100%;
    padding: calc(var(--gap) * 5) var(--gap-md);
    border: 1px solid var(--gray-900);

    img {
      margin: 0 auto calc(var(--gap) * 5) auto;
    }

    input {
      margin-bottom: var(--gap-md);
    }

    @media (max-width: 960px) {
      grid-column-start: 1;
      padding: calc(var(--gap) * 5) var(--gap-lg);
    }
  }
`;

export const LoginLoading = styled.div`
  & {
    margin-top: var(--gap-md);

    & div {
      width: 100%;
    }
  }
`;
