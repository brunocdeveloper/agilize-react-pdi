import React, { useCallback, useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import { Container } from "../Login/Login.style";
import CadastroAluno from "./Cadastro/CadastroAluno";
import CadastroQuestoes from "./CadastroQuestoes/CadastroQuestoes";
import StepIndicator from "./StepIndicator/StepIndicator";

const Professor = () => {
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stepProfessor, setStepProfessor] = useState("aluno");

  const saveAutentication = (event: any) => {
    const credentials = {
      username,
      password,
    };
    localStorage.setItem("credentials", JSON.stringify(credentials));
    setUsername("");
    setPassword("");
    event.preventDefault();
  };

  return (
    <Box>
      <Box
        height={60}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={20}
      >
        <Text
          text="Bem vindo professor!"
          color={theme.colors.white}
          fontWeight="bold"
        />
        <Text text="sair" color={theme.colors.white} fontWeight="bold" />
      </Box>
      <Box display="flex" justifyContent="center" mt={30}>
        <StepIndicator
          steperProfessor={stepProfessor}
          setSteperProfessor={setStepProfessor}
        />
      </Box>
      {stepProfessor === "aluno" && (
        <CadastroAluno
          username={username}
          password={password}
          setPassword={setPassword}
          setUsername={setUsername}
          saveAutentication={saveAutentication}
        />
      )}

      {stepProfessor === "questoes" && <CadastroQuestoes />}
    </Box>
  );
};

export default Professor;
