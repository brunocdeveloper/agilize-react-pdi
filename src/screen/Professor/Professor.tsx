import React, { useCallback, useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import { Container } from "../Login/Login.style";
import CadastroAluno from "./Cadastro/CadastroAluno";
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
      <Box display="flex" justifyContent="center" mt={100}>
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
    </Box>
  );
};

export default Professor;
