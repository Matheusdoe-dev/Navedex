import styled from "styled-components";

export const InputBlock = styled.div`
  & {
    label {
      display: block;
      margin-bottom: var(--gap);
    }

    input {
      display: block;
      width: 100%;
      padding: var(--gap);
      border-radius: 0;
      border: 1px solid var(--gray-800);
    }
  }
`;
