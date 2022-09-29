import styled, { css } from "styled-components";
import Box from "../../../components/Box/Box";
import { TextAreaProps } from "./CadastroQuestoes.types";

export const TextArea: any = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.signUp.inputColor};
  border-style: none;
  border-radius: 8px;
  padding: 12px 12px;
  color: ${({ theme }) => theme.colors.signUp.inputText};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  resize: none;

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
`;

export const IMG = styled.img`
  fill: green;
  color: green;
`;

export const Container = styled(Box)`
  display: flex;
  margin: 50px auto 40px auto;
  max-width: 1300px;

  @media (max-width: 1197px) {
    height: 1500px;
    justify-content: space-between;
    flex-direction: column;
  }
`;
