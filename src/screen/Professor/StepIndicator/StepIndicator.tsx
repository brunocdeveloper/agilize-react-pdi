import { useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Text from "../../../components/Text/Text";
import { Container } from "./StepIndicator.style";
import { StepIndicatorProps } from "./StepIndicator.types";

const StepIndicator = (props: StepIndicatorProps) => {
  const { steperProfessor, setSteperProfessor } = props;

  const theme = useTheme();
  return (
    <Box display="flex" width={500} justifyContent="space-between">
      <Container onClick={() => setSteperProfessor("aluno")}>
        <Text
          ml={0.8}
          text="Cadastre um aluno"
          fontSize={15}
          fontWeight="bold"
          color={
            steperProfessor === "aluno"
              ? theme.colors.signUp.singUpButton
              : theme.colors.white
          }
        />
        <Box
          backgroundColor={
            steperProfessor === "aluno"
              ? theme.colors.signUp.singUpButton
              : theme.colors.white
          }
          width={140}
          height={10}
          mt={1}
          borderRadius={4}
        />
      </Container>
      <Container onClick={() => setSteperProfessor("questoes")}>
        <Text
          ml={0.8}
          text="Cadastre questões"
          fontSize={15}
          fontWeight="bold"
          color={
            steperProfessor === "questoes"
              ? theme.colors.signUp.singUpButton
              : theme.colors.white
          }
        />
        <Box
          backgroundColor={
            steperProfessor === "questoes"
              ? theme.colors.signUp.singUpButton
              : theme.colors.white
          }
          borderRadius={4}
          width={140}
          height={10}
          mt={1}
        />
      </Container>
      <Container onClick={() => setSteperProfessor("aplicarProvas")}>
        <Text
          ml={1}
          text="Aplique as provas"
          fontSize={15}
          fontWeight="bold"
          color={
            steperProfessor === "aplicarProvas"
              ? theme.colors.signUp.singUpButton
              : theme.colors.white
          }
        />
        <Box
          backgroundColor={
            steperProfessor === "aplicarProvas"
              ? theme.colors.signUp.singUpButton
              : theme.colors.white
          }
          borderRadius={4}
          width={140}
          height={10}
          mt={1}
        />
      </Container>
    </Box>
  );
};

export default StepIndicator;
