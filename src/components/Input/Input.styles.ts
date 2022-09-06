import styled from "styled-components";
import {
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

  :focus {
    outline: none;
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.signUp.labelInput};
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
`;
