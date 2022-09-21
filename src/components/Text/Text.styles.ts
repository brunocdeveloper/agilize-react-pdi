import styled from "styled-components";
import {
  color,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
} from "styled-system";

export const StyledText: any = styled.p`
  ${display};
  ${space};
  ${width};
  ${lineHeight};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  font-family: "Inter", sans-serif;
  transition: color 0.2s ease-in-out;
`;
