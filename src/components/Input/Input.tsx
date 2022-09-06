import React from "react";
import { InputText, Label } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
  const { label, ...rest } = props;
  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputText type="text" {...rest} />
    </div>
  );
};

export default Input;
