import styled from "styled-components";
// styled-components
import { Container } from "../../styles/objects/grid";

export const EditNaverBody = styled.div`
  & {
    min-height: 100vh;

    &.modal {
      background: var(--gray-900);
      filter: brightness(50%);
    }
  }
`;

export const EditNaverContainer = styled(Container)`
  & {
    display: flex;
    flex-direction: column;
    margin-top: var(--gap-md);

    button {
      align-self: flex-end;
    }

    @media (min-width: 960px) {
      width: 60%;
    }
  }
`;

export const EditNaverForm = styled.form`
  & {
    display: grid;
    grid-column-start: 2;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--gap-md);

    input {
      margin-bottom: var(--gap-md);
    }

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      grid-column-start: 1;
    }
  }
`;

export const EditNaverTitle = styled.div`
  & {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: var(--gap-md);

    a {
      padding-left: 0;
      margin-right: calc(var(--gap-sm) * 1.5);
    }
  }
`;
