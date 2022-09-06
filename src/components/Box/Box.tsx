import React from "react";
import { Container } from "./Box.styles";
import { BoxProps } from "./Box.types";

const Box = (props: BoxProps) => {
  const { children, ...rest } = props;
  return <Container {...rest}>{children}</Container>;
};

export default Box;
