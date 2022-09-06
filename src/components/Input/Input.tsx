import React from "react";
import { InputText, Label } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
  const { label } = props;
  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputText type="text" />
    </div>
  );
};

export default Input;
