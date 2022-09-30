import styled, { css } from "styled-components";
import {
  alignItems,
  alignSelf,
  backgroundColor,
  borderRadius,
  color,
  display,
  flexDirection,
  height,
  justifyContent,
  maxWidth,
  minWidth,
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
  ${alignSelf};
  ${maxWidth};
  ${position};
  ${minWidth};
  transition: background-color 0.2s ease-in-out;

  ${({ scrollY }) =>
    scrollY &&
    css`
      overflow-y: auto;
    `}

  ${({ opacityOnHover }) =>
    opacityOnHover &&
    css`
      :hover {
        cursor: pointer;
        opacity: 0.9;
      }
    `}
`;
