import styled, { css } from "styled-components";
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  height,
  space,
  width,
} from "styled-system";
import { ButtonProps } from "./Button.types";

export const StyledButton: any = styled.button<ButtonProps>`
  ${height};
  ${width};
  ${space};
  ${color};
  ${borderRadius};
  ${fontWeight};
  ${fontSize};
  border: 2px solid
    ${({ border, theme }) => border || theme.colors.signUp.singUpButton};
  font-family: "Inter", sans-serif;
  color: ${({ theme }) => theme.colors.signUp.singUpText};
  transition: background-color 0.2s ease-in-out;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  ${(props) =>
    props.teacherBtn &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.signUp.singUpButton};
        color: ${({ theme }) => theme.colors.signUp.singUpText};
        font-weight: bold;
      }
    `};

  ${(props) =>
    props.opacityOnClick &&
    css`
      &:hover {
        opacity: 0.6;
      }
    `};

  ${(props) =>
    props.disabled &&
    css`
      background-color: #cccccc;
      color: #666666;
      border-color: none;
      border-width: 0;
      pointer-events: none;
    `}
`;
