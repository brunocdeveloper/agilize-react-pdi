import React, { useCallback, useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/Text";
import { useUserContext } from "../../context/UserContext";
import { Container } from "../Login/Login.style";
import AplicarProvas from "./AplicarProvas/AplicarProvas";
import CadastroAluno from "./CadastroAlunos/CadastroAluno";
import CadastroQuestoes from "./CadastroQuestoeseProvas/CadastroQuestoes";
import { StyledText } from "./Professor.style";
import StepIndicator from "./StepIndicator/StepIndicator";

const Professor = () => {
  const theme = useTheme();
  const { setIsLoged } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stepProfessor, setStepProfessor] = useState("aluno");

  const saveAutentication = (event: any) => {
    const credentials = {
      username,
      password,
    };
    localStorage.setItem("aluno", JSON.stringify(credentials));

    setUsername("");
    setPassword("");
    event.preventDefault();
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
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
          saveAutentication={(e) => saveAutentication(e)}
        />
      )}

      {stepProfessor === "questoes" && <CadastroQuestoes />}
      {stepProfessor === "aplicarProvas" && <AplicarProvas />}
    </Box>
  );
};

export default Professor;
