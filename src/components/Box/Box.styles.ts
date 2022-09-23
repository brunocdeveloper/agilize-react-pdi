import styled, { css } from "styled-components";
import {
  alignItems,
  backgroundColor,
  borderRadius,
  color,
  display,
  flexDirection,
  height,
  justifyContent,
  maxWidth,
  position,
  space,
  width,
} from "styled-system";
import { BoxProps } from "./Box.types";

export const Container: any = styled.div<BoxProps>`
  ${display};
  ${justifyContent};
  ${flexDirection};
  ${color};
  ${space};
  ${height};
  ${width};
  ${borderRadius};
  ${alignItems};
  ${maxWidth};
  ${position};
  transition: background-color 0.2s ease-in-out;

  ${({ scrollY }) =>
    scrollY &&
    css`
      overflow-y: auto;
    `}
`;
