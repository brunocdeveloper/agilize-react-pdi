import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.signUp.inputColor};
  border-style: none;
  border-radius: 8px;
  padding: 12px 12px;
  color: ${({ theme }) => theme.colors.signUp.inputText};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  resize: none;
`;
