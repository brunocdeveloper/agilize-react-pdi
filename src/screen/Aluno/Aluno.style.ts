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

export const Alternative: any = styled.p<AlternativeInputType>`
  ${margin}

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.signUp.inputColor};
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.signUp.inputText};

  ${({ selected, theme }) =>
    selected &&
    css`
      border-style: solid;
      border-width: 2px;
      border-color: ${theme.colors.correctlyQuestion};
    `}

  ${({ isCorrect, theme }) =>
    isCorrect &&
    css`
      background-color: ${theme.colors.correctlyQuestion};
      pointer-events: none;
    `}

    ${({ isIncorrect, theme }) =>
    isIncorrect &&
    css`
      background-color: ${theme.colors.incorrectlyQuestion};
      pointer-events: none;
    `}
`;
