import React from "react";
import { StyledButton } from "./Button.style";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const { text, ...rest } = props;
  return <StyledButton {...rest}>{text}</StyledButton>;
};

export default Button;
