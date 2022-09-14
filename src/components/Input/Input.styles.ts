import styled, { css } from "styled-components";
import {
  border,
  borderColor,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  height,
  maxHeight,
  space,
  width,
} from "styled-system";
import { InputProps } from "./Input.types";

export const InputText: any = styled.input<InputProps>`
  ${maxHeight};
  ${width};
  ${space};
  ${color};
  ${borderRadius};
  ${fontWeight};
  ${fontSize};
  ${height};
  background-color: ${({ theme }) => theme.colors.signUp.inputColor};
  border-style: none;
  border-radius: 8px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.signUp.inputText};

  ${({ correctlyQuestion, theme }) =>
    correctlyQuestion &&
    css`
      border: 2px solid ${theme.colors.correctlyQuestion};
    `}

  ${({ incorrectlyQuestion, theme }) =>
    incorrectlyQuestion &&
    css`
      border: 2px solid ${theme.colors.incorrectlyQuestion};
    `}


  ${({ error }) =>
    error &&
    css`
      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: red;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: red;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: red;
      }
    `}

  :focus {
    outline: none;
  }
`;

export const Label = styled.p`
  ${fontSize};
  color: ${({ theme, color }) => color || theme.colors.signUp.labelInput};
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
`;
