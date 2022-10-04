import React from "react";
import { InputText, Label } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
  const { label, value, error, ...rest } = props;
  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputText
        data-testid="inputText"
        type="text"
        value={value}
        {...rest}
        placeholder={error}
        error={error}
      />
    </div>
  );
};

export default Input;
