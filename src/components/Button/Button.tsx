import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import { StyledButton } from "./Button.style";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const { text, loading, children, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text text={text} />
        {children && children}
        {loading && <Box ml="12px">{loading}</Box>}
      </Box>
    </StyledButton>
  );
};

export default Button;
