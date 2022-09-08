import React from "react";
import { InputText, Label } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
  const { label, value, ...rest } = props;
  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputText type="text" value={value} {...rest} />
    </div>
  );
};

export default Input;
