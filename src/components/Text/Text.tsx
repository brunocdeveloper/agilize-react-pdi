import React from "react";
import { StyledText } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text = (props: TextProps) => {
  const { text, ...rest } = props;
  return <StyledText {...rest}>{text}</StyledText>;
};

export default Text;
