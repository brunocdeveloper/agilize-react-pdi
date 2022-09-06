import styled from "styled-components";
import {
  backgroundColor,
  borderRadius,
  color,
  display,
  height,
  justifyContent,
  space,
  width,
} from "styled-system";

export const Container: any = styled.div`
  ${display}
  ${justifyContent}
  ${color};
  ${space};
  ${height};
  ${width};
  ${borderRadius};
  transition: background-color 0.2s ease-in-out;
`;
