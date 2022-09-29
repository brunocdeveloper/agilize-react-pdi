import styled, { css } from "styled-components";
import { margin } from "styled-system";
import Text from "../../components/Text/Text";
import { AlternativeInputType } from "./Aluno.types";

export const StyledText = styled(Text)<{ selected?: boolean }>`
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }

  ${({ selected }) =>
    selected &&
    css`
      opacity: 0.5;
    `}
`;

export const AlternativeInput = styled.input<AlternativeInputType>`
  ${margin}

  background-color: ${({ theme }) => theme.colors.signUp.inputColor};
  border: none;
  padding: 10px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background-color: green;
    `}
`;
