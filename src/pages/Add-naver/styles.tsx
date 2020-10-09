import styled from "styled-components";
import { Container } from "../../styles/objects/grid";

export const AddNaverContainer = styled(Container)`
  & {
    display: flex;
    flex-direction: column;
    width: 60%;

    button {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const AddNaverForm = styled.form`
  & {
    display: grid;
    grid-column-start: 2;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--gap-md);

    input {
      margin-bottom: var(--gap-md);
    }
  }
`;

export const AddNaverTitle = styled.div`
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
