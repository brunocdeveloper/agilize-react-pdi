import styled from "styled-components";

export const InputText = styled.input`
  background-color: ${({ theme }) => theme.colors.signUp.inputColor};
  border-style: none;
  border-radius: 8px;
  width: 300px;
  height: 30px;

  :focus {
    outline: none;
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.signUp.labelInput};
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
`;
